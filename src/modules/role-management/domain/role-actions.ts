"use server"

import {
  deleteRoleService,
  fetchAllPermissionsService,
  fetchAllRolesService,
  fetchRoleService,
  fetchTopRolesService,
  postRoleService,
  putRoleService,
} from "@/modules/role-management/data/role-services"
import { mapPermissionToPermissionGroup } from "@/modules/role-management/domain/mapper"
import { PermissionGrouped, Role } from "@/modules/role-management/domain/types"
import { RoleFormValues } from "@/modules/role-management/presentation/components/form-config"
import { DataResponse } from "@/components/data-table/data-response"

export const fetchAllRolesAction = async (): Promise<DataResponse<Role>> =>
  fetchAllRolesService()

export const fetchTopRolesAction = async (): Promise<Role[]> =>
  fetchTopRolesService()

export const fetchAllPermissionsAction = async (): Promise<
  PermissionGrouped[]
> => {
  const permissions = await fetchAllPermissionsService()
  return mapPermissionToPermissionGroup(permissions)
}

export const fetchRoleAction = async (roleId: string): Promise<Role> =>
  fetchRoleService(roleId)

export const submitRoleAction = async ({
  roleId,
  role,
}: {
  roleId?: string
  role: RoleFormValues
}): Promise<Role> => {
  if (roleId) return putRoleService(roleId, role)

  return postRoleService(role)
}

export const deleteRoleAction = async (roleId: string): Promise<void> =>
  deleteRoleService(roleId)
