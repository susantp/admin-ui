import NextAuth from "next-auth"

import providers from "@/modules/auth/config/auth-providers"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
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
})
