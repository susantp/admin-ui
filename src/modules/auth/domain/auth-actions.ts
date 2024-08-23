"use server"

import { ApiResponse } from "@/core/types"
import { getApiClient } from "@/core/utils/api-client"
import { createUrl } from "@/core/utils/helpers"
import { authEndpoints } from "@/modules/auth/data/auth-endpoints"
import { deleteAuthToken, setAuthToken } from "@/modules/auth/data/auth-service"
import { RegisterRequest } from "@/modules/auth/domain/types"

export const actionRegister = (details: RegisterRequest) =>
  Promise.resolve("hey")

export const actionLogin = async (credentials: BodyInit): Promise<string> => {
  const client = getApiClient(createUrl(authEndpoints.userLogin))
  const response = await client.post<ApiResponse>(credentials)

  if (response.metaData.error.length > 0) throw Error(response.metaData.error)

  const {
    data: { message, payload },
  } = response

  if (!("token" in payload)) {
    throw Error("Response Tampered")
  } else {
    deleteAuthToken()
    setAuthToken(payload.token)
    return message
  }
}
