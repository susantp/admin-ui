import { getAuthenticatedApiClient } from "@/core/utils/authentic-client"
import { createUrl } from "@/core/utils/helpers"
import { userEndpoints } from "@/modules/user-management/data/endpoints"
import { AddRoleRequest } from "@/modules/user-management/data/types"
import { User } from "@/modules/user-management/domain/types"
import { DataQuery, DataResponse } from "@/components/data-table/data-response"

export const fetchAllUsersService = async ({
  pageSize,
  pageIndex,
  globalFilter,
}: DataQuery): Promise<DataResponse<User>> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "6d9478a4-572e-4d54-bd08-c40bbd0d2b80",
  })

  const query = `?page=${pageIndex}&page_size=${pageSize}&q=${globalFilter}`
  const url = createUrl(userEndpoints.allUsers + query)

  const response = await apiClient.get(url)
  return response.data as DataResponse<User>
}

export const toggleIsActiveService = async (userId: string): Promise<void> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "6d9478a4-572e-4d54-bd08-c40bbd0d2b80",
  })

  const url = createUrl(userEndpoints.userActiveDeactive(userId))

  const res = await apiClient.post(url, {})

  if (res.status !== 200) throw Error("Something went wrong!")
}

export const toggleIsSuperUserService = async (
  userId: string
): Promise<void> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "6d9478a4-572e-4d54-bd08-c40bbd0d2b80",
  })

  const url = createUrl(userEndpoints.userIsSuperuser(userId))

  const res = await apiClient.post(url, {})

  if (res.status !== 200) throw Error("Something went wrong!")
}

export const addRoleService = async (data: AddRoleRequest): Promise<void> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "abc85e92-1826-4680-bc69-fdc5d5381f3e",
  })

  const res = await apiClient.post(createUrl(userEndpoints.addRole), data)

  if (res.status !== 200) throw Error("Something went wrong!")
}
