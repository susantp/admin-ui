import { useEffect, useState } from "react"

import { useSetAtom } from "jotai"

import {
  fetchAllPermissionsAction,
  fetchAllRolesAction,
  fetchRoleAction,
} from "@/modules/role-management/domain/role-actions"
import { PermissionGrouped } from "@/modules/role-management/domain/types"
import { roleAtom } from "@/modules/role-management/presentation/atoms/role-atom"
import { RoleFormValues } from "@/modules/role-management/presentation/components/form-config"

export const useRoles = (
  roleId?: string
): {
  permissions: PermissionGrouped[]
  defaultValues: RoleFormValues
} => {
  const setRoles = useSetAtom(roleAtom)

  const [permissions, setPermissions] = useState<PermissionGrouped[]>([])
  const [defaultValues, setDefaultValues] = useState<RoleFormValues>({
    name: "",
    permissions: [],
  })

  useEffect(() => {
    fetchAllRolesAction()
      .then((data) => setRoles(data.results))
      .catch(() => {})

    fetchAllPermissionsAction()
      .then((data) => setPermissions(data))
      .catch(() => {})
  }, [setRoles])

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
