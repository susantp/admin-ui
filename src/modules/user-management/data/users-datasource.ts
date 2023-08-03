import { getAuthenticatedApiClient } from "@/src/core/utils/authentic-client"
import { createUrl } from "@/src/core/utils/helpers"
import { userEndpoints } from "@/src/modules/user-management/data/endpoints"
import { UsersDatasource } from "@/src/modules/user-management/data/types"
import { User } from "@/src/modules/user-management/domain/types"

import { DataQuery, DataResponse } from "@/components/data-table/data-response"

export const usersDatasource: UsersDatasource = {
  async fetchAllUsers({
    pageSize,
    pageIndex,
    globalFilter,
  }: DataQuery): Promise<DataResponse<User>> {
    const apiClient = await getAuthenticatedApiClient({
      "x-screen-id": "6d9478a4-572e-4d54-bd08-c40bbd0d2b80",
    })

    const query = `?page=${pageIndex}&page_size=${pageSize}&q=${globalFilter}`
    const url = createUrl(userEndpoints.allUsers + query)

    const response = await apiClient.get(url)
    return response.data as DataResponse<User>
  },

  async toggleIsActive(userId: string): Promise<void> {
    const apiClient = await getAuthenticatedApiClient({
      "x-screen-id": "6d9478a4-572e-4d54-bd08-c40bbd0d2b80",
    })

    const url = createUrl(userEndpoints.userActiveDeactive(userId))

    await apiClient.post(url, {})
  },

  async toggleIsSuperUser(userId: string): Promise<void> {
    const apiClient = await getAuthenticatedApiClient({
      "x-screen-id": "6d9478a4-572e-4d54-bd08-c40bbd0d2b80",
    })

    const url = createUrl(userEndpoints.userIsSuperuser(userId))

    await apiClient.post(url, {})
  },
}
