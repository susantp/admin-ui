import {
  PermissionResponse,
  RoleResponse,
} from "@/src/modules/role-management/data/types"
import { Permission, Role } from "@/src/modules/role-management/domain/types"

export const permissionResponseToPermission = (
  permissions: PermissionResponse[]
): Permission[] =>
  permissions.reduce<Permission[]>(
    (acc: Permission[], item: PermissionResponse) => {
      const { screen, ...rest } = item

      const existingEntry = acc.find((entry) => entry.screen === screen)

      if (existingEntry) {
        existingEntry.permissions.push(rest)
      } else {
        acc.push({ screen, permissions: [rest] })
      }
      return acc
    },
    []
  )

export const roleResponseToRole = (roles: RoleResponse[]): Role[] =>
  roles.map((roleResponse) => {
    const { permissions: permissionResponse, ...rest } = roleResponse

    const permissions = permissionResponseToPermission(permissionResponse)

    return {
      ...rest,
      permissions,
    }
  })
