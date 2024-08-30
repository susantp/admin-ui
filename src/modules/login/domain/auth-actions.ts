"use server"

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"
import { cookies } from "next/headers"

import { ApiResponse } from "@/core/data"
import { getApiClient } from "@/core/data/api-client"
import { createUrl } from "@/core/utils/helpers"
import { authEndpoints } from "@/modules/login/config/auth-endpoints"

const tokenKey: string = "token"

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/require-await
export const actionSetAuthToken = async (token: any): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cookieOptions: any = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // One week
    path: "/",
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  cookies().set(tokenKey, token, cookieOptions)
}

export const actionGetAuthToken = async (): Promise<
  RequestCookie | undefined
  // eslint-disable-next-line @typescript-eslint/require-await
> => cookies().get(tokenKey)
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const actionDeleteAuthToken = async () => cookies().delete(tokenKey)

export const actionLogin = async (credentials: BodyInit): Promise<string> => {
  const response = await getApiClient(
    createUrl(authEndpoints.userLogin)
  ).post<ApiResponse>(credentials)

  if (response.metaData.error.length > 0) throw Error(response.metaData.error)

  const {
    data: { message, payload },
  } = response

  if (!("token" in payload)) {
    throw Error("Response Tampered")
  } else {
    await actionDeleteAuthToken()
    await actionSetAuthToken(payload.token)
    return message
  }
}

export const actionGetLoginProviderLink = async (): Promise<string> => {
  const response = await getApiClient(
    createUrl(authEndpoints.socialLoginProvider.github.redirectUrl)
  ).get<ApiResponse>()

  if (response.metaData.error.length > 0) throw Error(response.metaData.error)

  const { data } = response
  if (!("redirectUrl" in data.payload)) {
    throw Error("Response Tampered")
  }
  const { redirectUrl } = data.payload
  return redirectUrl as string
}
