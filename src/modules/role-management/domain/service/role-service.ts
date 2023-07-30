"use server"

import { roleDatasource } from "@/roles/data/role-datasource"
import { mapPermissionToPermissionGroup } from "@/roles/domain/mapper"
import { PermissionGrouped, Role } from "@/roles/domain/types"
import { RoleFormValues } from "@/roles/presentation/components/form-config"

import { DataResponse } from "@/components/data-table/data-response"

export const fetchAllRolesAction = async (): Promise<DataResponse<Role>> =>
  roleDatasource.fetchAllRoles()

export const fetchAllPermissionsAction = async (): Promise<
  PermissionGrouped[]
> => {
  const permissions = await roleDatasource.fetchAllPermissions()
  return mapPermissionToPermissionGroup(permissions)
}

export const fetchRoleAction = async (roleId: string): Promise<Role> =>
  roleDatasource.fetchRole(roleId)

export const submitRoleAction = async ({
  roleId,
  role,
}: {
  roleId?: string
  role: RoleFormValues
}): Promise<Role> => {
  if (roleId) return roleDatasource.putRole(roleId, role)

  return roleDatasource.postRole(role)
}

export const deleteRoleAction = async (roleId: string): Promise<void> =>
  roleDatasource.deleteRole(roleId)
