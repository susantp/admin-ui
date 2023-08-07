"use client"

import React from "react"

import { ColumnDef } from "@tanstack/react-table"
import { KeyRoundIcon, UsersIcon } from "lucide-react"

import { Role } from "@/modules/role-management/domain/types"
import RoleActions from "@/modules/role-management/presentation/components/role-actions"

export const roleColumnDef: ColumnDef<Role>[] = [
  {
    accessorKey: "name",
    header: "Role",
    cell: ({ row }): React.ReactElement => {
      const role = row.original
      return (
        <div className="space-y-2">
          <h2 className="text-xl font-medium">{role.name}</h2>
          <div className="space-x-8 text-muted-foreground">
            <p className="inline-flex">
              <KeyRoundIcon className="mr-2 w-4 h-4" />{" "}
              {role.permissions.length} permissions(s)
            </p>
            <p className="inline-flex">
              <UsersIcon className="mr-2 w-4 h-4" /> {role.members} user(s)
              assigned
            </p>
          </div>
        </div>
      )
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => <RoleActions roleId={row.original.id} />,
  },
]
