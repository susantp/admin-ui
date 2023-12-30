"use client"

import React, { ReactElement } from "react"

import { ColumnDef } from "@tanstack/react-table"

import { User } from "@/modules/user-management/domain/types"
import UserIsActive from "@/modules/user-management/presentation/components/user-is-active"
import UserIsSuperuser from "@/modules/user-management/presentation/components/user-is-superuser"
import UserRolesDropdown from "@/modules/user-management/presentation/components/user-roles-dropdown"

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Username" />
    ),
    cell: ({ row }) => (
      <span>
        {row.original.username}
        <br />
        <span className="text-muted-foreground">{row.original.email}</span>
      </span>
    ),
  },
  {
    id: "name",
    accessorKey: "detail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }): ReactElement => {
      const { detail } = row.original

      if (!detail) return <span />

      return (
        <span>
          {detail.first_name} {detail.last_name}
          <br />
          <span className="text-muted-foreground">{detail.designation}</span>
        </span>
      )
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    id: "status",
    accessorKey: "is_active",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <UserIsActive user={row.original} />,
  },
  {
    accessorKey: "is_superuser",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Is Admin?" />
    ),
    cell: ({ row }) => <UserIsSuperuser user={row.original} />,
  },
  {
    accessorKey: "roles",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => <UserRolesDropdown user={row.original} />,
  },
]
