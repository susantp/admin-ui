"use client"

import React from "react"
import { User } from "@/src/modules/user-management/domain/types/user"
import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Combobox } from "@/components/combobox"
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value): void =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value): void => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Username" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    id: "name",
    accessorKey: "detail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }): JSX.Element => {
      const value = row.getValue("name")
      return (
        <span>
          {value.first_name} {value.last_name}
        </span>
      )
    },
  },
  {
    id: "designation",
    accessorKey: "detail.designation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Designation" />
    ),
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
    cell: ({ row }): JSX.Element => {
      const isActive = row.getValue<boolean>("status")
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [value, setValue] = React.useState(isActive)

      return (
        <Switch
          checked={value}
          onCheckedChange={(): void => {
            setValue((prevState) => !prevState)
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
    cell: ({ row }): JSX.Element => {
      const isAdmin = row.getValue<boolean>("is_superuser")
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [value, setValue] = React.useState(isAdmin)

      return (
        <Switch
          checked={value}
          onCheckedChange={(): void => {
            setValue((prevState) => !prevState)
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
  {
    id: "actions",
    header: "Action",
    cell: () => (
      <Button variant="link" size="sm">
        Edit
      </Button>
    ),
  },
]
