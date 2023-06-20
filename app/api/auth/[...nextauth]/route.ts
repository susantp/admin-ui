import AuthRepositoryImpl from "@/auth/data/repositories/auth-repository-impl"
import NextAuth, {type AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import UserEntity from "@/auth/domain/entities/user-entity";

// @ts-ignore
export const authOptions: AuthOptions = {
  session: {strategy: "jwt"},
  secret: process.env.NEXTAUTH_SECRET,
  pages: {signIn: "/login"},
  providers: [
    CredentialsProvider(
      {
        id:"cred_1",
        name: "Credentials",
        credentials: {
          username: {label: "Username", type: "text", placeholder: "jsmith"},
          password: {label: "Password", type: "password"}
        },
        type: "credentials",
        async authorize(credentials: Record<"username" | "password", string> | undefined, re): Promise<null | UserEntity> {
          if (!credentials) return null

          const {username, password} = credentials
          const repo = new AuthRepositoryImpl()
          return repo.login(username, password);
        }
      }
    ),
  ],
}

const handler: unknown = NextAuth(authOptions)

export {handler as GET, handler as POST}
