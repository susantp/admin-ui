import { Role } from "@/src/modules/role-management/domain/types/role"

export default interface RoleService {
  fetchAllRoles(): Promise<Role[]>
}
