import {authConfig} from "@/auth/domain/config/auth-config"
import {authEndpoints} from "@/auth/domain/config/auth-endpoints"
import {
  LoggedInUserResponse,
  RefreshTokenResponse,
  UserDetailResponse,
  UserLoginResponse,
} from "@/auth/domain/types/auth-endpoints"
import {TokenPayload} from "@/auth/domain/types/nextauth"
import jwtDecode from "jwt-decode"
import {AuthOptions, User} from "next-auth"
import {JWT} from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"
import {signOut} from "next-auth/react"
import getHelpers from "@/src/modules/global/domain/utils/helpers";
import {handleResponse} from "@/src/modules/global/domain/utils/api-client";
import {Response} from "next/dist/compiled/@edge-runtime/primitives/fetch";

const headers: HeadersInit = [
  ['Content-Type', 'application/json']
]
const requestInit: RequestInit = {headers}

const credentialProvider = CredentialsProvider({
  id: authConfig.credentialId,
  credentials: {username: {}, password: {}},
  authorize: async (credentials: Record<"username" | "password", string> | undefined): Promise<User | null> => {
    if (!credentials) return null
    // compose request path with baseUrl
    const {loggedInUser, userDetail, userLogin} = authEndpoints
    const loggedInUserRequestPath: URL = getHelpers.composeRequestPath({requestPath: loggedInUser})
    const userDetailRequestPath: URL = getHelpers.composeRequestPath({requestPath: userDetail})
    const loginRequestPath: URL = getHelpers.composeRequestPath({requestPath: userLogin})

    const bodyInit: BodyInit = JSON.stringify(credentials)

    const loginRequestInit: RequestInit = {
      ...requestInit,
      body: bodyInit,
      method: "POST"
    }

    try {
      // login request to get userLogin response
      const loginResponse: Response = await fetch(loginRequestPath, loginRequestInit)
      const userLoginResponseData: UserLoginResponse = await handleResponse<UserLoginResponse>(loginResponse)

      // update headers with token
      const headersWithAuth: HeadersInit = [...headers, ["Authorization", `Bearer ${userLoginResponseData.access}`]]
      const requestInitWithAuth: RequestInit = {
        ...requestInit, headers: headersWithAuth
      }

      // fetch logged in user and user detail
      const loggedInUserResponse: Response = await fetch(loggedInUserRequestPath, requestInitWithAuth)
      const userDetailsResponse: Response = await fetch(userDetailRequestPath, requestInitWithAuth)

      const loggedInUserResponseData: LoggedInUserResponse = await handleResponse<LoggedInUserResponse>(loggedInUserResponse)
      const userDetailsResponseData: UserDetailResponse = await handleResponse<UserDetailResponse>(userDetailsResponse)

      return {
        ...loggedInUserResponseData,
        firstName: userDetailsResponseData.first_name,
        lastName: userDetailsResponseData.last_name,
        address: userDetailsResponseData.address1,
        ...userLoginResponseData,
      }
    } catch (_) {
      return Promise.reject(
        Error(`Your sign in request failed. Please try again.`)
      )
    }
  },
})

const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  const {refreshToken} = authEndpoints
  const requestPath: URL = getHelpers.composeRequestPath({requestPath: refreshToken})
  const headersWithAuth: HeadersInit = [...headers,
    ["Authorization", `Bearer ${token.access}`]
  ]
  const bodyInit: BodyInit = JSON.stringify({
    access: token.access,
    refresh: token.refresh
  })
  const authenticRequestInitWithBody: RequestInit = {
    ...requestInit, headers: headersWithAuth, body: bodyInit, method: "POST"
  }
  try {
    const response: Response = await fetch(requestPath, authenticRequestInitWithBody)
    const newTokens: RefreshTokenResponse | null = await handleResponse<RefreshTokenResponse>(response)

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
