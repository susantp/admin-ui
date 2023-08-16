import {
  Permission,
  PermissionGrouped,
  Role,
  RoleGrouped,
} from "@/modules/role-management/domain/types"

export const mapPermissionToPermissionGroup = (
  permissions: Permission[]
): PermissionGrouped[] =>
  permissions.reduce<PermissionGrouped[]>(
    (grouped: PermissionGrouped[], item: Permission) => {
      const { screen, ...rest } = item

      const existingEntry = grouped.find((entry) => entry.screen === screen)

      if (existingEntry) {
        existingEntry.permissions.push(rest)
      } else {
        grouped.push({ screen, permissions: [rest] })
      }
      return grouped
    },
    []
  )

export const mapRoleToRoleGrouped = (roleResponse: Role): RoleGrouped => {
  const { permissions: permissionResponse, ...rest } = roleResponse

  const permissions = mapPermissionToPermissionGroup(permissionResponse)

  return {
    ...rest,
    permissions,
  }
}
