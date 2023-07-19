import {authConfig} from "@/auth/domain/config/auth-config"
import {authEndpoints} from "@/auth/domain/config/auth-endpoints"
import {
  LoggedInUserResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  UserDetailResponse,
  UserLoginRequest,
  UserLoginResponse,
} from "@/auth/domain/types/auth-endpoints"
import {TokenPayload} from "@/auth/domain/types/nextauth"
import ApiClient from "@/src/utils/api-client"
import jwtDecode from "jwt-decode"
import {AuthOptions, User} from "next-auth"
import {JWT} from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"
import {signOut} from "next-auth/react"
import getHelpers from "@/src/modules/global/domain/utils/helpers";
import {handleResponse} from "@/src/modules/global/domain/utils/api-client";

const credentialProvider = CredentialsProvider({
  id: authConfig.credentialId,
  credentials: {username: {}, password: {}},
  authorize: async (credentials):Promise<User|null> => {
    if (!credentials) return null

    const {username, password} = credentials
    const requestInit: RequestInit = {}
    const loggedInUserRequestPath: string = getHelpers.getBackendBaseUrl() + authEndpoints.loggedInUser
    const userDetailRequestPath: string = getHelpers.getBackendBaseUrl() + authEndpoints.userDetail
    // const bodyInit: BodyInit = credentials
    try {
      const tokens = await new ApiClient().post<
        UserLoginRequest,
        UserLoginResponse
      >(authEndpoints.userLogin, {
        username,
        password,
      })

      requestInit.headers = [
        ["Authorization", `Bearer ${tokens.access}`]
      ]

      const loggedInUserResponse: Response = await fetch(loggedInUserRequestPath, requestInit)
      const userDetailsResponse: Response = await fetch(userDetailRequestPath, requestInit)

      const loggedInUser: LoggedInUserResponse | null = await handleResponse<LoggedInUserResponse>(loggedInUserResponse)
      const userDetails: UserDetailResponse | null = await handleResponse<UserDetailResponse>(userDetailsResponse)

      if(!loggedInUser || !userDetails) return null

      const user: User = {
        ...loggedInUser,
        firstName: userDetails.first_name,
        lastName: userDetails.last_name,
        address: userDetails.address1,
        ...tokens,
      }

      return user
    } catch (_) {
      return Promise.reject(
        Error("Your sign in request failed. Please try again.")
      )
    }
  },
})

const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  try {
    const newTokens = await new ApiClient().post<
      RefreshTokenRequest,
      RefreshTokenResponse
    >(authEndpoints.refreshToken, {
      access: token.access,
      refresh: token.refresh,
    })

    const decoded: TokenPayload = jwtDecode(newTokens.access)

    return {
      ...token,
      access: newTokens.access,
      access_exp: decoded.exp,
    }
  } catch (error) {
    return {...token, error: "RefreshTokenError"}
  }
}

export const authOptions: AuthOptions = {
  session: {strategy: "jwt"},
  secret: process.env.NEXTAUTH_SECRET,
  pages: {signIn: "/login"},
  providers: [credentialProvider],
  callbacks: {
    jwt: async ({token, user, trigger}) => {
      if (trigger) {
        const {id, ...rest} = user
        const accessDecoded: TokenPayload = jwtDecode(user.access)
        const refreshDecoded: TokenPayload = jwtDecode(user.refresh)

        return {
          ...rest,
          sub: id,
          access_exp: accessDecoded.exp,
          refresh_exp: refreshDecoded.exp,
        }
      }

      if (Math.floor(Date.now() / 1000) < token.access_exp) return token

      if (Math.floor(Date.now()) / 1000 > token.refresh_exp) {
        await signOut({redirect: false})
        throw Error("Token Expired")
      }

      return refreshAccessToken(token)
    },
    session: async ({session, token}) => {
      session.user.id = token.sub
      session.user.firstName = token.firstName
      session.user.lastName = token.lastName
      session.user.username = token.username
      session.user.phone = token.phone
      session.user.address = token.address
      session.user.access = token.access
      session.user.refresh = token.refresh
      session.user.access_exp = token.access_exp
      session.user.refresh_exp = token.refresh_exp

      return Promise.resolve(session)
    },
  },
}
