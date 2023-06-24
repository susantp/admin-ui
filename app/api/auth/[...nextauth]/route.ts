import ApiClient from "@/src/utils/api-client"
import NextAuth, { type AuthOptions } from "next-auth"
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

      return { ...user, ...userDetails, ...tokens }
    } catch (_) {
      return Promise.reject(
        Error("Authorization Failed! Something went wrong!")
      )
    }
  },
})

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
  providers: [credentialProvider],
  callbacks: {
    jwt: async ({ token, user, trigger }) => {
      if (trigger) {
        token.user = user
      }
      return Promise.resolve(token)
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return Promise.resolve(session)
    },
  },
}

const handler: unknown = NextAuth(authOptions)

export { handler as GET, handler as POST }
