import { Permission, Role } from "@/roles/domain/types"
import { RoleFormValues } from "@/roles/presentation/components/form-config"

import { DataResponse } from "@/components/data-table/data-response"

export interface RoleDatasource {
  fetchAllRoles: () => Promise<DataResponse<Role>>
  fetchAllPermissions: () => Promise<Permission[]>
  fetchRole: (roleId: string) => Promise<Role>
  postRole: (role: RoleFormValues) => Promise<Role>
  putRole: (roleId: string, role: RoleFormValues) => Promise<Role>
}
