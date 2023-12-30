import { authOptions } from "@/auth/domain/config/auth-options"
import NextAuth from "next-auth"

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler: any = NextAuth(authOptions)

export { handler as GET, handler as POST }
