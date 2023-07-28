import { IRoleEndpoints } from "@/src/modules/role/domain/config/role-endpoints"

export const roleEndpoints: IRoleEndpoints = {
  getRoles: "admin/roles/",
  getPermissions: "admin/permissions/",
  getToRoles: "admin/top-roles/",
  postRole: "admin/roles/",
  getRole: "admin/role/{id}/",
  putRole: "admin/role/{id}/",
  deleteRole: "admin/role/{id}/",
}
