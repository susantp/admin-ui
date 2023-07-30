import { Permission, Role } from "@/roles/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

export interface RoleDatasource {
  fetchAllRoles: () => Promise<DataResponse<Role>>
  fetchAllPermissions: () => Promise<Permission[]>
  fetchRole: (roleId: string) => Promise<Role>
}
