import { roleDatasource } from "@/src/modules/role-management/data/role-datasource"
import { Permission, Role } from "@/src/modules/role-management/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

export const fetchAllRoles = async (): Promise<DataResponse<Role>> => {
  "use server"

  return roleDatasource.fetchAllRoles()
}

export const fetchAllPermissions = async (): Promise<
  DataResponse<Permission>
> => {
  "use server"

  return roleDatasource.fetchAllPermissions()
}
