import { roleEndpoints } from "@/roles/data/role-endpoints"
import { RoleDatasource } from "@/roles/data/types"
import { Permission, Role } from "@/roles/domain/types"
import { RoleFormValues } from "@/roles/presentation/components/form-config"
import { getAuthenticatedApiClient } from "@/src/core/utils/authentic-client"
import { createUrl } from "@/src/core/utils/helpers"

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

  async postRole(role: RoleFormValues): Promise<Role> {
    const apiClient = await getAuthenticatedApiClient({
      "x-screen-id": "236d1241-3baa-4f5c-8bf9-dc4c122ae4be",
    })

    const url = createUrl(roleEndpoints.postRole)
    const response = await apiClient.post(url, role)

    return response.data as Role
  },

  async putRole(roleId: string, role: RoleFormValues): Promise<Role> {
    const apiClient = await getAuthenticatedApiClient({
      "x-screen-id": "236d1241-3baa-4f5c-8bf9-dc4c122ae4be",
    })

    const url = createUrl(roleEndpoints.putRole(roleId))
    const response = await apiClient.put(url, role)

    return response.data as Role
  },

  async deleteRole(roleId: string): Promise<void> {
    const apiClient = await getAuthenticatedApiClient({
      "x-screen-id": "236d1241-3baa-4f5c-8bf9-dc4c122ae4be",
    })

    const url = createUrl(roleEndpoints.deleteRole(roleId))
    await apiClient.remove(url)
  },
}
