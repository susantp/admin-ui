import { ApiResponse } from "@/core/data"
import { getApiClient } from "@/core/data/api-client"
import { createUrl } from "@/core/utils/helpers"
import { endpoints } from "@/modules/user-profile/dictionaries/endpoints"
import { IUser } from "@/modules/user-profile/presentation/models/default"

const { getUser } = endpoints
export const actionGetUser = async (): Promise<IUser> => {
  const response = await getApiClient(createUrl(getUser)).get<ApiResponse>()
  if (response.metaData.error.length > 0) throw Error(response.metaData.error)
  const { data } = response
  if (!("user" in data.payload)) {
    throw Error("Response Tampered")
  }
  return data.payload.user as IUser
}
