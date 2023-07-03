import NextAuth, {type AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {
  callbackConfigOptions,
  credentialProviderConfig,
  pageConfig,
  sessionConfig
} from "@/auth/domain/config/credential-provider";


export const authOptions: AuthOptions = {
  session: sessionConfig,
  secret: process.env.NEXTAUTH_SECRET,
  pages: pageConfig,
  providers: [CredentialsProvider(credentialProviderConfig)],
  callbacks: callbackConfigOptions,
}

const handler: unknown = NextAuth(authOptions)

export { handler as GET, handler as POST }
