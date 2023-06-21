import AuthRepositoryImpl from "@/auth/data/repositories/auth-repository-impl"
import NextAuth, {type AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import UserEntity, {
  InterfaceUserEntityProperties
} from "@/auth/domain/entities/user-entity";
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";

export const authOptions: AuthOptions = {
  session: {strategy: "jwt"},
  secret: process.env.NEXTAUTH_SECRET,
  pages: {signIn: "/login"},
  providers: [
    CredentialsProvider(
      {
        id: "cred_1",
        name: "Credentials",
        type: "credentials",
        credentials: {
          username: {label: "Username", type: "text", placeholder: "jsmith"},
          password: {label: "Password", type: "password"}
        },
        async authorize(credentials: Record<"username" | "password", string> | undefined, re): Promise<UserEntity | null> {
          if (!credentials) return null
          const repo = new AuthRepositoryImpl()
          const {username, password} = credentials
          const res = await repo.login(username, password)
          if (!res) {
            return null
          }


          const userProperties: InterfaceUserEntityProperties = {
            id: "id01",
            username: "username",
            password: "password",
            email: "email",
            phone: 12364568,
            token: "token"
          }
          return new UserEntity(userProperties)
        }
      },
    ),
  ],
  // callbacks:{
  //   signIn({ user, account, profile, email, credentials }){
  //     return true
  //   }
  // }
}

const handler: unknown = NextAuth(authOptions)

export {handler as GET, handler as POST}
