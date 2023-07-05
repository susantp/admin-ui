import { authEndpoints } from "@/auth/domain/config/auth-endpoints"
import {
  LoggedInUserResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  UserDetailResponse,
  UserLoginRequest,
  UserLoginResponse,
} from "@/auth/domain/types/auth-endpoints"
import ApiClient from "@/src/utils/api-client"
import jwtDecode from "jwt-decode"
import { AuthOptions, User } from "next-auth"
import { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

const credentialProvider = CredentialsProvider({
  credentials: { username: {}, password: {} },
  authorize: async (credentials) => {
    if (!credentials) return null

    const { username, password } = credentials

    try {
      const tokens = await new ApiClient().post<
        UserLoginRequest,
        UserLoginResponse
      >(authEndpoints.userLogin, {
        username,
        password,
      })

      const apiClient = new ApiClient({ accessToken: tokens.access })
      const user = await apiClient.get<LoggedInUserResponse>(
        authEndpoints.loggedInUser
      )
      const userDetails = await apiClient.get<UserDetailResponse>(
        authEndpoints.userDetail
      )

      return {
        ...user,
        firstName: userDetails.first_name,
        lastName: userDetails.last_name,
        address: userDetails.address1,
        ...tokens,
      } as User
    } catch (_) {
      return Promise.reject(
        Error("Your sign in request failed. Please try again.")
      )
    }
  },
})

const refreshAccessToken = async (token: JWT) => {
  try {
    const newTokens = await new ApiClient().post<
      RefreshTokenRequest,
      RefreshTokenResponse
    >(authEndpoints.refreshToken, {
      access: token.access,
      refresh: token.refresh,
    })
    const decoded: JWT = jwtDecode(newTokens.access)
    return {
      ...token,
      access: newTokens.access,
      expires: decoded.exp,
      error: null,
    }
  } catch (error) {
    return { ...token, error: "RefreshTokenError" }
  }
}

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
  providers: [credentialProvider],
  callbacks: {
    jwt: async ({ token, user, trigger }) => {
      if (trigger) {
        const { id, ...rest } = user
        const decoded: JWT = jwtDecode(user.access)
        return { ...rest, sub: id, expires: decoded.exp } as JWT
      }

      const { expires = 0 } = token
      if (Math.floor(Date.now() / 1000) < expires) return token

      return (await refreshAccessToken(token)) as JWT
    },
    session: async ({ session, token }) => {
      session.user.id = token.sub
      session.user.firstName = token.firstName
      session.user.lastName = token.lastName
      session.user.username = token.username
      session.user.phone = token.phone
      session.user.address = token.address
      session.user.access = token.access
      session.user.refresh = token.refresh
      session.user.expires = token.expires

      return Promise.resolve(session)
    },
  },
}
