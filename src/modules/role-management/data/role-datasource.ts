import { roleEndpoints } from "@/roles/data/role-endpoints"
import { RoleDatasource } from "@/roles/data/types"
import { Permission, Role } from "@/roles/domain/types"
import { getAuthenticatedApiClient } from "@/src/common/utils/authentic-client"
import { createUrl } from "@/src/common/utils/helpers"

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

  async fetchAllPermissions(): Promise<Permission[]> {
    const apiClient = await getAuthenticatedApiClient({
      "x-screen-id": "abc85e92-1826-4680-bc69-fdc5d5381f3e",
    })

    const url = createUrl(roleEndpoints.getPermissions)
    const response = await apiClient.get(url)

    return response.data as Permission[]
  },

  async fetchRole(roleId): Promise<Role> {
    const apiClient = await getAuthenticatedApiClient({
      "x-screen-id": "abc85e92-1826-4680-bc69-fdc5d5381f3e",
    })

    const url = createUrl(roleEndpoints.getRole(roleId))
    const response = await apiClient.get(url)

    return response.data as Role
  },
}
