import { cookies } from "next/headers"

import { ApiResponse, ErrorResponse } from "@/core/types"
import { getApiClient } from "@/core/utils/api-client"
import { createUrl } from "@/core/utils/helpers"
import { authEndpoints } from "@/modules/auth/data/auth-endpoints"
import {
  LoginRequest,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RegisterRequest,
  RegisterResponse,
  TokenResponse,
} from "@/modules/auth/domain/types"

const tokenKey: any = "token"

const setAuthToken = (token: any) => {
  const cookieOptions: any = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // One week
    path: "/",
  }
  cookies().set(tokenKey, token, cookieOptions)
}
const getAuthToken = () => {
  return cookies().get(tokenKey)
}

export const loginService = async (
  credentials: BodyInit
): Promise<TokenResponse | ErrorResponse> => {
  const requestInit: RequestInit = { body: credentials }

  const response = await getApiClient<LoginRequest>(
    createUrl(authEndpoints.userLogin),
    requestInit
  ).post<ApiResponse<TokenResponse | ErrorResponse>>()

  if (response.status == "fail")
    throw Error("error" in response.data ? response.data.error : "")
  const { data } = response
  if ("access" in data) {
    setAuthToken(data.access)
  }
  return response.data
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
