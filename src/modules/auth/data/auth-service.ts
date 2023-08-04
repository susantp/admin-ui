import { getApiClient } from "@/core/utils/api-client"
import { createUrl } from "@/core/utils/helpers"
import { authEndpoints } from "@/modules/auth/data/auth-endpoints"
import {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RegisterRequest,
  RegisterResponse,
} from "@/modules/auth/domain/types"

export const loginService = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  const apiClient = getApiClient()

  const response = await apiClient.post(
    createUrl(authEndpoints.userLogin),
    credentials
  )

  if (response.status !== 200) throw Error("Username or password incorrect")

  return response.data as LoginResponse
}

export const refreshTokenService = async (
  tokens: RefreshTokenRequest
): Promise<RefreshTokenResponse> => {
  const apiClient = getApiClient()

  const response = await apiClient.post(
    createUrl(authEndpoints.refreshToken),
    tokens
  )

  if (response.status !== 200) throw Error("Token expired")

  return response.data as RefreshTokenResponse
}

export const registerService = async (
  details: RegisterRequest
): Promise<RegisterResponse> => {
  const apiClient = getApiClient()

  const response = await apiClient.post(
    createUrl(authEndpoints.userRegister),
    details
  )

  if (response.status === 201) return response.data as RegisterResponse

  throw Error("Could not create user.")
}
