import { cookies } from "next/headers"
import { NextRequest } from "next/server"

import { ErrorResponse } from "@/core/types"
import { getApiClient } from "@/core/utils/api-client"
import { createUrl } from "@/core/utils/helpers"
import { authEndpoints } from "@/modules/auth/data/auth-endpoints"
import { TokenResponse } from "@/modules/auth/domain/types"

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
export const getAuthToken = (request?: NextRequest) => {
  return cookies().get(tokenKey)
}
const deleteAuthToken = () => {
  return cookies().delete(tokenKey)
}

export const loginService = async (
  credentials: BodyInit
): Promise<TokenResponse | ErrorResponse> => {
  const apiClient = getApiClient(createUrl(authEndpoints.userLogin))

  const response = await apiClient.post<TokenResponse | ErrorResponse>(
    credentials
  )

  if (response.status == "fail")
    throw Error("error" in response.data ? response.data.error : "")
  const { data } = response
  if ("token" in data) {
    deleteAuthToken()
    setAuthToken(data.token)
  }
  return response.data
}
