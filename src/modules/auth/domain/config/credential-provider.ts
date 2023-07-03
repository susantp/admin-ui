import { authDictionaryImpl } from "@/auth/domain/config/auth-dictionary"
import {
  AuthResponse,
  UserDetailsResponse,
  UserResponse,
} from "@/auth/domain/types"
import ApiClient from "@/src/utils/api-client"
import jwtDecode from "jwt-decode"
import { PagesOptions, SessionOptions, User } from "next-auth"
import { CallbacksOptions } from "next-auth/core/types"
import { JWT } from "next-auth/jwt"
import { CredentialInput, CredentialsConfig } from "next-auth/providers"

type CredentialValues =
  | Record<keyof typeof credentialInputs, string>
  | undefined
const userNameInput: CredentialInput = {
  label: "Username",
  type: "text",
  placeholder: "jsmith",
}
const passwordInput: CredentialInput = {
  label: "Username",
  type: "text",
  placeholder: "jsmith",
}
const credentialInputs: Record<string, CredentialInput> = {
  userNameInput,
  passwordInput,
}
const pageOptions: PagesOptions = {
  signIn: "/login",
  signOut: "",
  error: "",
  verifyRequest: "",
  newUser: "",
}
const sessionOptions: SessionOptions = {
  strategy: "jwt",
  updateAge: 0,
  maxAge: 10,
  generateSessionToken: () => "",
}
const refreshAccessToken = async (token: JWT) => {
  try {
    const newTokens = await new ApiClient().post<AuthResponse>(
      `${process.env.BACKEND_PROJECT_NAME ?? ""}/refresh-token/`,
      {
        access: token.access,
        refresh: token.refresh,
      }
    )
    const decoded: JWT = jwtDecode(newTokens.access)
    return {
      ...token,
      access: newTokens.access,
      expires: decoded.exp,
      error: null,
    }
  } catch (error) {
    return { ...token, error: "RefreshTokenError" }
  }
}
const backendProjectName =
  process.env.BACKEND_PROJECT_NAME ??
  (() => {
    throw new Error("BACKEND_PROJECT_NAME environment variable must be set")
  })()
const authorizeMe = async (
  credentials: CredentialValues
): Promise<User | null> => {
  if (!credentials) return null

  const { username, password } = credentials

  try {
    const tokens: AuthResponse = await new ApiClient().post<AuthResponse>(
      `${backendProjectName}/user/login/`,
      {
        username,
        password,
      }
    )

    const apiClient: ApiClient = new ApiClient({ accessToken: tokens.access })
    const user: UserResponse = await apiClient.get<UserResponse>(
      "logged-in-user/"
    )
    const userDetails: UserDetailsResponse =
      await apiClient.get<UserDetailsResponse>("user-detail/")

    return {
      ...user,
      firstName: userDetails.first_name,
      lastName: userDetails.last_name,
      address: userDetails.address1,
      ...tokens,
    } as User
  } catch (_) {
    return Promise.reject(
      Error("Your sign in request failed. Please try again.")
    )
  }
}
const callbacksOptions: CallbacksOptions = {
  redirect: ({ url, baseUrl }) => {
    if (url.startsWith("/")) return `${baseUrl}${url}`
    if (new URL(url).origin === baseUrl) return url
    return baseUrl
  },
  signIn: async () => Promise.resolve(true),
  jwt: async ({ token, user, trigger }) => {
    if (trigger) {
      const { id, ...rest } = user
      const decoded: JWT = jwtDecode(user.access)
      return { ...rest, sub: id, expires: decoded.exp } as JWT
    }

    const { expires = 0 } = token
    if (Math.floor(Date.now() / 1000) < expires) return token

    return (await refreshAccessToken(token)) as JWT
  },
  session: async ({ session, token }) => {
    session.user.id = token.sub
    session.user.firstName = token.firstName
    session.user.lastName = token.lastName
    session.user.username = token.username
    session.user.phone = token.phone
    session.user.address = token.address
    session.user.access = token.access
    session.user.refresh = token.refresh
    session.user.expires = token.expires

    return Promise.resolve(session)
  },
}
/**
 * Variables to export
 */
export const sessionConfig: Partial<SessionOptions> = sessionOptions
export const pageConfig: Partial<PagesOptions> = pageOptions

export const credentialProviderConfig: CredentialsConfig = {
  id: authDictionaryImpl.credentialConfigOptions.id,
  name: authDictionaryImpl.credentialConfigOptions.name,
  type: authDictionaryImpl.credentialConfigOptions.type,
  credentials: credentialInputs,
  authorize: authorizeMe,
}

export const callbackConfigOptions: Partial<CallbacksOptions> = callbacksOptions
