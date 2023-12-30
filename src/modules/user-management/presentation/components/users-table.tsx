"use client"

import React, { ReactElement } from "react"

import Restricted from "@/modules/rbac/presentation/components/restricted"
import { useRoles } from "@/modules/role-management/presentation/hooks/use-roles"
import { fetchAllUsersAction } from "@/modules/user-management/domain/user-actions"
import { columns } from "@/modules/user-management/presentation/components/columns"

import { DataTable } from "@/components/data-table/data-table"

export default function UsersTable(): ReactElement {
  useRoles()

  return (
    <Restricted to="READ">
      <DataTable columns={columns} dataFn={fetchAllUsersAction} />
    </Restricted>
  )
}
