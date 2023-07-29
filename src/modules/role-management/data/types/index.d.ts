import { Role } from "@/src/modules/role-management/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

export interface RoleDatasource {
  fetchAllRoles: () => Promise<DataResponse<Role>>
}
