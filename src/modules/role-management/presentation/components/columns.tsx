"use client"

import React from "react"
import { Role } from "@/src/modules/role-management/domain/types"
import { ColumnDef } from "@tanstack/react-table"
import { EditIcon, EyeIcon, KeyRoundIcon, UsersIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export const columns: ColumnDef<Role>[] = [
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
    cell: () => (
      <div className="space-x-2 text-right">
        <Button size="sm" variant="outline">
          <EyeIcon className="mr-2 w-4 h-4" />
          View
        </Button>
        <Button size="sm" variant="outline">
          <EditIcon className="mr-2 w-4 h-4" />
          Edit
        </Button>
        <Button size="sm">
          <KeyRoundIcon className="mr-2 w-4 h-4" />
          Manage Access
        </Button>
      </div>
    ),
  },
]
