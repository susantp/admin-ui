import { type DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    expiration: number
    token: string & DefaultSession["user"]
  }

  interface User {
    token: string
    expiration: number
  }

  interface JWT {
    token: string
    expiration: number
  }
}
