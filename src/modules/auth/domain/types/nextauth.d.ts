import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface User {
    access: string
    refresh: string
    access_exp?: number
    refresh_exp?: number
  }

  interface Session {
    user: User
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    sub: string
    access: string
    refresh: string
    access_exp: number
    refresh_exp: number
    error?: string
  }
}

export interface TokenPayload {
  token_type: string
  exp: number
  iat: number
  jti: number
  user_id: string
  roles: string[]
}
