import React, { useEffect, useState } from "react"

import {
  fetchAllPermissionsAction,
  fetchRoleAction,
} from "@/roles/domain/service/role-service"
import { PermissionGrouped } from "@/roles/domain/types"
import { RoleFormValues } from "@/roles/presentation/components/form-config"

export const useRoles = (
  roleId?: string
): {
  permissions: PermissionGrouped[]
  defaultValues: RoleFormValues
} => {
  const [permissions, setPermissions] = React.useState<PermissionGrouped[]>([])
  const [defaultValues, setDefaultValues] = useState<RoleFormValues>({
    name: "",
    permissions: [],
  })

  useEffect(() => {
    fetchAllPermissionsAction()
      .then((data) => setPermissions(data))
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (roleId) {
      fetchRoleAction(roleId)
        .then((role) => {
          const rolePermissions = role.permissions.map((p) => p.id)

          setDefaultValues({
            name: role.name,
            permissions: rolePermissions,
          })
        })
        .catch(() => {})
    }
  }, [roleId])

  return { permissions, defaultValues }
}
