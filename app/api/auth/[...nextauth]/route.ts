import AuthRepositoryImpl from "@/auth/data/repositories/auth-repository-impl"
import NextAuth, { type AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials) {
          const { username, password } = credentials

          const repo = new AuthRepositoryImpl()
          try {
            const user = await repo.login(username, password)
            console.log("AUTHORIZED USER", user)
            return user
          } catch (_) {
            console.log("NO USER")
          }
        }
        return null
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) {
        return Promise.resolve(user)
      }
      return Promise.resolve(null)
    },
    async session({ session, token, user }) {
      session.access = token.access
      session.refresh = token.refresh
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.access = user.access
        token.refresh = user.refresh
      }
      return token
    },
  },
}

const handler: unknown = NextAuth(authOptions)

export { handler as GET, handler as POST }
