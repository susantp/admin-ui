"use client"

import React from "react"
import {
  toggleIsActive,
  toggleIsSuperUser,
} from "@/src/modules/user-management/domain/service/user-service"
import { User, UserDetail } from "@/src/modules/user-management/domain/types"
import { ColumnDef } from "@tanstack/react-table"

import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { Combobox } from "@/components/combobox"
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
    cell: ({ row }): JSX.Element => {
      const detail = row.getValue<UserDetail>("name")
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
    cell: ({ row }): React.ReactElement => {
      const isActive = row.getValue<boolean>("status")
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [value, setValue] = React.useState(isActive)
      const userId = row.original.id

      return (
        <Switch
          checked={value}
          onCheckedChange={async (): Promise<void> => {
            try {
              await toggleIsActive(userId)
              setValue((prevState) => !prevState)
              toast({
                title: "User status updated!",
              })
            } catch (e) {
              toast({
                title: "Something went wrong!",
              })
            }
          }}
        />
      )
    },
  },
  {
    accessorKey: "is_superuser",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Is Admin?" />
    ),
    cell: ({ row }): React.ReactElement => {
      const isAdmin = row.getValue<boolean>("is_superuser")
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [value, setValue] = React.useState(isAdmin)
      const userId = row.original.id

      return (
        <Switch
          checked={value}
          onCheckedChange={async (): Promise<void> => {
            try {
              await toggleIsSuperUser(userId)
              setValue((prevState) => !prevState)
              toast({
                title: "User status updated!",
              })
            } catch (e) {
              toast({
                title: "Something went wrong!",
              })
            }
          }}
        />
      )
    },
  },
  {
    accessorKey: "roles",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Roles" />
    ),
    cell: ({ row }): JSX.Element => {
      const options = [
        { value: "Customer", label: "Customer" },
        { value: "Admin", label: "Admin" },
        { value: "Superadmin", label: "Superadmin" },
        { value: "Member", label: "Member" },
      ]

      return (
        <Combobox
          value={row.getValue<string[]>("roles")[0]}
          options={options}
        />
      )
    },
  },
]
