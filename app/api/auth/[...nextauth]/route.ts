import ApiClient from "@/src/utils/api-client"
import jwtDecode from "jwt-decode"
import NextAuth, { type AuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

const credentialProvider = CredentialsProvider({
  authorize: async (credentials) => {
    if (!credentials) return null

    const { username, password } = credentials

    try {
      const tokens: object = await ApiClient.post("soa_poc/user/login/", {
        username,
        password,
      })
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.access as string}`,
      }
      const user: object = await ApiClient.get("logged-in-user/", headers)
      const userDetails: object = await ApiClient.get("user-detail/", headers)

      return {
        ...user,
        firstName: userDetails.first_name as string,
        lastName: userDetails.last_name as string,
        address: userDetails.address1 as string,
        ...tokens,
      }
    } catch (_) {
      return Promise.reject(
        Error("Authorization Failed! Something went wrong!")
      )
    }
  },
})

const refreshAccessToken = async (token: JWT) => {
  try {
    const newTokens = await ApiClient.post("soa_poc/refresh-token/", {
      access: token.access,
      refresh: token.refresh,
    })
    console.log("OLD TOKENS", token)
    console.log("NEW TOKENS", newTokens)
    const decoded: JWT = jwtDecode(newTokens.access)
    return {
      ...token,
      access: newTokens.access,
      refresh: newTokens.refresh,
      expires: decoded.exp,
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
        console.log("DECODED", decoded)
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

const handler: unknown = NextAuth(authOptions)

export { handler as GET, handler as POST }
