import {IRoleEndpoints} from "@/src/modules/roles/domain/config/role-endpoints"

export const roleEndpoints: IRoleEndpoints = {
  getRoles: "admin/roles/", // getRoles
  getPermissions: "admin/permissions/", // getPermissions
  getToRoles: "admin/top-roles/", // getToRoles
  postRole: "admin/roles/", // postRole
  getRole: `admin/role/[id]/` // getRole
}
