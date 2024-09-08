"use server"

import { ApiResponse, IData, IMetaData } from "@/core/data"
import { getApiClient } from "@/core/data/api-client"
import { responseTamperedError } from "@/core/presentation/models/errors"
import { createUrl } from "@/core/utils/helpers"
import { endpoints } from "@/modules/user-profile/dictionaries/endpoints"
import { IUser } from "@/modules/user-profile/presentation/models/default"

const { getUser, resetPassword } = endpoints
export const actionGetUser = async (): Promise<IUser | IMetaData> => {
  const response = await getApiClient(createUrl(getUser)).get<
    ApiResponse<IData<IUser>, IMetaData>
  >()
  if (response.metaData.error.length > 0) return response.metaData
  const { data } = response
  if (!("user" in data.payload)) {
    throw Error("Response Tampered")
  }
  return data.payload.user as IUser
}

export const actionResetPassword = async (body: BodyInit): Promise<string> => {
  const response = await getApiClient(createUrl(resetPassword)).post<
    ApiResponse<IData<[]>, IMetaData>
  >(body)
  if (response.metaData.error.length > 0) throw Error(response.metaData.error)
  const { data } = response
  if (!("message" in data)) {
    response.metaData = {
      ...response.metaData,
      ...responseTamperedError,
    }
    return response
  }
  return response
}
