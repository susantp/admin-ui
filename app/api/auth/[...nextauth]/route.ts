import { authOptions } from "@/auth/domain/config/auth-options"
import NextAuth from "next-auth"

const handler: unknown = NextAuth(authOptions)

export { handler as GET, handler as POST }
