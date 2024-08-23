import { cookies } from "next/headers"
import { NextRequest } from "next/server"

import { ApiResponse } from "@/core/types"
import { getApiClient } from "@/core/utils/api-client"
import { createUrl } from "@/core/utils/helpers"
import { authEndpoints } from "@/modules/auth/data/auth-endpoints"

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

export const loginService = async (credentials: BodyInit): Promise<string> => {
  const client = getApiClient(createUrl(authEndpoints.userLogin))
  const response = await client.post<ApiResponse>(credentials)

  console.log(response)

  if (response.metaData.error.length > 0) throw Error(response.metaData.error)

  const {
    data: { message, payload },
  } = response

  if (!("token" in payload)) {
    throw Error(response.metaData.error)
  } else {
    deleteAuthToken()
    setAuthToken(payload.token)
    return message
  }
}
