"use client"

import React from "react"
import { User } from "@/src/modules/user-management/domain/types/user"
import { columns } from "@/src/modules/user-management/presentation/components/columns"
import { PaginationState } from "@tanstack/react-table"
import { useSession } from "next-auth/react"

import { DataResponse } from "@/components/data-table/data-response"
import { DataTable } from "@/components/data-table/data-table"

export function UsersTable(): JSX.Element {
  const session = useSession()

  const fetchData = async (
    pagination: PaginationState,
    globalFilter: string
  ): Promise<DataResponse<User> | null> => {
    if (session.status !== "authenticated") return null

    const accessToken = session.data.user.access

    const response = await fetch(
      `/api/users?page=${pagination.pageIndex + 1}&page_size=${
        pagination.pageSize
      }&q=${globalFilter}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (await response.json()).response as DataResponse<User>
  }

  return <DataTable columns={columns} dataFn={fetchData} label="users" />
}
