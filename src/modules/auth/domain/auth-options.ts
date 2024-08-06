import jwtDecode from "jwt-decode"
import { AuthOptions, User } from "next-auth"
import { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"
import { signOut } from "next-auth/react"

import {
  loginService,
  refreshTokenService,
} from "@/modules/auth/data/auth-service"
import { authConfig } from "@/modules/auth/domain/auth-config"
import { TokenResponse } from "@/modules/auth/domain/types"
import { TokenPayload } from "@/modules/auth/domain/types/nextauth"

const credentialProvider = CredentialsProvider({
  id: authConfig.credentialId,
  credentials: { username: {}, password: {} },
  authorize: async (credentials) => {
    if (!credentials) return null

    const tokens: TokenResponse = await loginService(credentials)

    const user: User = {
      id: "user",
      ...tokens,
    }

    return user
  },
})

const refreshAccessToken = async (token: JWT): Promise<JWT> => {
  try {
    const newTokens = await refreshTokenService({
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
        await signOut()
      }

      return refreshAccessToken(token)
    },
    session: async ({ session, token }) => {
      session.user.id = token.sub
      session.user.access = token.access
      session.user.refresh = token.refresh
      session.user.access_exp = token.access_exp
      session.user.refresh_exp = token.refresh_exp

      return Promise.resolve(session)
    },
  },
}
