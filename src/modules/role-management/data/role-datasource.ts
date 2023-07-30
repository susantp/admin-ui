import { getAuthenticatedApiClient } from "@/src/common/utils/authentic-client"
import { createUrl } from "@/src/common/utils/helpers"
import {
  permissionResponseToPermission,
  roleResponseToRole,
} from "@/src/modules/role-management/data/mapper"
import { roleEndpoints } from "@/src/modules/role-management/data/role-endpoints"
import {
  PermissionResponse,
  RoleDatasource,
  RoleResponse,
} from "@/src/modules/role-management/data/types"
import { Permission, Role } from "@/src/modules/role-management/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

export const roleDatasource: RoleDatasource = {
  async fetchAllRoles(): Promise<DataResponse<Role>> {
    const apiClient = await getAuthenticatedApiClient({
      "x-screen-id": "abc85e92-1826-4680-bc69-fdc5d5381f3e",
    })

    const url = createUrl(roleEndpoints.getRoles)

    const response = await apiClient.get(url)

    const { results, ...rest } = response.data as DataResponse<RoleResponse>

    const roles = roleResponseToRole(results)

    return {
      ...rest,
      results: roles,
    }
  },

  async fetchAllPermissions(): Promise<DataResponse<Permission>> {
    const apiClient = await getAuthenticatedApiClient({
      "x-screen-id": "abc85e92-1826-4680-bc69-fdc5d5381f3e",
    })

    const url = createUrl(roleEndpoints.getPermissions)

    const response = await apiClient.get(url)

    const data = response.data as PermissionResponse[]

    const permissions = permissionResponseToPermission(data)

    return {
      total: 4,
      total_page: 1,
      results: permissions,
    }
  },
}
