import { getAuthenticatedApiClient } from "@/core/utils/authentic-client"
import { createUrl } from "@/core/utils/helpers"
import { roleEndpoints } from "@/modules/role-management/data/role-endpoints"
import { Permission, Role } from "@/modules/role-management/domain/types"
import { RoleFormValues } from "@/modules/role-management/presentation/components/form-config"

import { DataResponse } from "@/components/data-table/data-response"

export const fetchAllRolesService = async (): Promise<DataResponse<Role>> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "abc85e92-1826-4680-bc69-fdc5d5381f3e",
  })

  const url = createUrl(roleEndpoints.getRoles)
  const response = await apiClient.get(url)

  return response.data as DataResponse<Role>
}

export const fetchTopRolesService = async (): Promise<Role[]> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "abc85e92-1826-4680-bc69-fdc5d5381f3e",
  })

  const url = createUrl(roleEndpoints.getTopRoles)
  const response = await apiClient.get(url)

  return response.data as Role[]
}

export const fetchAllPermissionsService = async (): Promise<Permission[]> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "abc85e92-1826-4680-bc69-fdc5d5381f3e",
  })

  const url = createUrl(roleEndpoints.getPermissions)
  const response = await apiClient.get(url)

  return response.data as Permission[]
}

export const fetchRoleService = async (roleId: string): Promise<Role> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "abc85e92-1826-4680-bc69-fdc5d5381f3e",
  })

  const url = createUrl(roleEndpoints.getRole(roleId))
  const response = await apiClient.get(url)

  return response.data as Role
}

export const postRoleService = async (role: RoleFormValues): Promise<Role> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "236d1241-3baa-4f5c-8bf9-dc4c122ae4be",
  })

  const url = createUrl(roleEndpoints.postRole)
  const response = await apiClient.post(url, role)

  return response.data as Role
}

export const putRoleService = async (
  roleId: string,
  role: RoleFormValues
): Promise<Role> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "236d1241-3baa-4f5c-8bf9-dc4c122ae4be",
  })

  const url = createUrl(roleEndpoints.putRole(roleId))
  const response = await apiClient.put(url, role)

  return response.data as Role
}

export const deleteRoleService = async (roleId: string): Promise<void> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": "236d1241-3baa-4f5c-8bf9-dc4c122ae4be",
  })

  const url = createUrl(roleEndpoints.deleteRole(roleId))
  await apiClient.remove(url)
}
