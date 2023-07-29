"use server"

import { usersDatasource } from "@/src/modules/user-management/data/users-datasource"
import { User } from "@/src/modules/user-management/domain/types"

import { DataQuery, DataResponse } from "@/components/data-table/data-response"

export const fetchAllUsers = async (
  query: DataQuery
): Promise<DataResponse<User>> => usersDatasource.fetchAllUsers(query)

export const toggleIsActive = async (userId: string): Promise<void> => {
  "use server"

  return usersDatasource.toggleIsActive(userId)
}

export const toggleIsSuperUser = async (userId: string): Promise<void> => {
  "use server"

  return usersDatasource.toggleIsSuperUser(userId)
}
