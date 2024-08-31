"use server"

import { ApiResponse } from "@/core/data"
import { getApiClient } from "@/core/data/api-client"
import { createUrl } from "@/core/utils/helpers"
import { authEndpoints } from "@/modules/auth/config/auth-endpoints"
import {
  actionDeleteAuthToken,
  actionSetAuthToken,
} from "@/modules/auth/domain/cookie-service"

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
    await actionSetAuthToken(payload.token as string)
    return message
  }
}

export const actionLogout = async (body: BodyInit): Promise<string> =>
  getApiClient(createUrl(authEndpoints.userLogout))
    .post<ApiResponse>(body)
    .then((response) => {
      if (response.metaData.error.length > 0)
        throw Error(response.metaData.error)
      const { data } = response
      return data.message
    })
    .catch((error: Error) => {
      throw Error(error.message)
    })

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
