import { User } from "@/src/modules/user-management/domain/types"

import { DataQuery, DataResponse } from "@/components/data-table/data-response"

export interface UsersDatasource {
  fetchAllUsers: (query: DataQuery) => Promise<DataResponse<User>>
  toggleIsActive: (userId: string) => Promise<void>
  toggleIsSuperUser: (userId: string) => Promise<void>
}
