import { getAuthenticatedApiClient } from "@/src/common/utils/authentic-client"
import { roleEndpoints } from "@/src/modules/role-management/data/role-endpoints"
import { RoleDatasource } from "@/src/modules/role-management/data/types"
import { Role } from "@/src/modules/role-management/domain/types"
import { createUrl } from "@/src/utils/helpers"

import { DataResponse } from "@/components/data-table/data-response"

export const roleDatasource: RoleDatasource = {
  async fetchAllRoles(): Promise<DataResponse<Role>> {
    const apiClient = await getAuthenticatedApiClient({
      "x-screen-id": "abc85e92-1826-4680-bc69-fdc5d5381f3e",
    })

    const url = createUrl(roleEndpoints.getRoles)

    const response = await apiClient.get(url)

    return response.data as DataResponse<Role>
  },
}
