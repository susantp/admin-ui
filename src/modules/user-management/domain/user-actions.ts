"use server"

import { AddRoleRequest } from "@/modules/user-management/data/types"
import {
  addRoleService,
  fetchAllUsersService,
  toggleIsActiveService,
  toggleIsSuperUserService,
} from "@/modules/user-management/data/user-services"
import { User } from "@/modules/user-management/domain/types"

import { DataQuery, DataResponse } from "@/components/data-table/data-response"

export const fetchAllUsersAction = async (
  query: DataQuery
): Promise<DataResponse<User>> => fetchAllUsersService(query)

export const toggleIsActiveAction = async (userId: string): Promise<void> =>
  toggleIsActiveService(userId)

export const toggleIsSuperUserAction = async (userId: string): Promise<void> =>
  toggleIsSuperUserService(userId)

export const addRoleAction = async (data: AddRoleRequest): Promise<void> =>
  addRoleService(data)
