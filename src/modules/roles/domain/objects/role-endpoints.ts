import { IRoleEndpoints } from "@/src/modules/roles/domain/config/role-endpoints"

export const roleEndpoints: IRoleEndpoints = {
  fetchRoles: "admin/roles/",
  fetchPermission: "admin/permissions/",
  fetchTopRoles: "admin/top-roles/",
  createRole: "admin/roles/"
}
