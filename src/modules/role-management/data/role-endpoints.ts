export const roleEndpoints = {
  getRoles: "admin/roles/",
  getTopRoles: "admin/top-roles/",
  postRole: "admin/roles/",
  getRole: (roleId: string): string => `admin/role/${roleId}/`,
  putRole: (roleId: string): string => `admin/role/${roleId}/`,
  deleteRole: (roleId: string): string => `admin/role/${roleId}/`,

  getPermissions: "admin/permissions/",
}
