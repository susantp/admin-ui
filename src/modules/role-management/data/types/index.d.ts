import { Permission, Role } from "@/src/modules/role-management/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

export interface RoleDatasource {
  fetchAllRoles: () => Promise<DataResponse<Role>>
  fetchAllPermissions: () => Promise<DataResponse<Permission>>
}

export interface PermissionResponse {
  id: string
  code: string
  screen: string
}

export interface RoleResponse {
  id: string
  name: string
  members: number
  permissions: PermissionResponse[]
}
