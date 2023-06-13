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
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log("CALLBACK SIGN IN")
    //   console.log("USER", user)
    //   console.log("ACCOUNT", account)
    //   console.log("PROFILE", profile)
    //   console.log("EMAIL", email)
    //   console.log("CREDENTIALS", credentials)
    //   return true
    // },
    // async redirect({ url, baseUrl }) {
    //   console.log("CALLBACK REDIRECT")
    //   console.log("URL", url)
    //   console.log("BASE_URL", baseUrl)
    //   return baseUrl
    // },
    // async session({ session, token, user }) {
    //   console.log("CALLBACK SESSION")
    //   console.log("SESSION", session)
    //   console.log("TOKEN", token)
    //   console.log("USER", user)
    //   return session
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   console.log("CALLBACK JWT")
    //   console.log("TOKEN", token)
    //   console.log("USER", user)
    //   console.log("ACCOUNT", account)
    //   console.log("PROFILE", profile)
    //   console.log("IS_NEW_USER", isNewUser)
    //   return token
    // },
  },
}

const handler: unknown = NextAuth(authOptions)

export { handler as GET, handler as POST }
