"use client"

import React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export interface User {
  id: string
  username: string
  email: string
  phone: string | null
  is_active: boolean
  is_user: boolean
  is_superuser: boolean
  created_at: string
  updated_at: string
  roles: string[]
}

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
    header: "Username",
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={(): void =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        Email <ArrowUpDown className="ml-2 h-4 w-4" />{" "}
      </Button>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }): JSX.Element => {
      const isActive = row.getValue("is_active")
      return (
        <Badge variant={isActive ? "default" : "destructive"}>
          {row.getValue("is_active") ? "Active" : "Inactive"}
        </Badge>
      )
    },
  },
  {
    accessorKey: "roles",
    header: "Role",
  },
  {
    id: "actions",
    header: "Action",
    cell: () => <Button variant="link">Edit</Button>,
  },
]
