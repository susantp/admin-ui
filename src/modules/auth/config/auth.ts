import NextAuth from "next-auth"

import providerConfig from "@/modules/auth/config/providerConfig"

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV !== "production",
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user, trigger }) {
      if (trigger) {
        if (user) {
          token.id = user.id
          token.token = user.token
          token.exp = user.expiration
        }
        return token
      }
      return token
    },
    session({ session, user }) {
      session.user = user
      return session
    },
  },
  ...providerConfig,
})
