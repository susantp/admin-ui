import { roles } from "@/src/modules/role-management/data/data"
import { Role } from "@/src/modules/role-management/domain/types/role"
import RoleService from "@/src/modules/role-management/domain/types/role-service"

export const roleService: RoleService = {
  fetchAllRoles(): Promise<Role[]> {
    return Promise.all(roles)
  },
}
