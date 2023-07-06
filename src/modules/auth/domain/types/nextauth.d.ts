import { DefaultUser } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string
    firstName: string
    lastName: string
    username: string
    phone: string
    address: string
    access: string
    refresh: string
    expires?: number
  }

  interface Session {
    user: User
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    sub: string
    firstName: string
    lastName: string
    username: string
    phone: string
    address: string
    access: string
    refresh: string
    expires: number
    error?: string
  }
}
