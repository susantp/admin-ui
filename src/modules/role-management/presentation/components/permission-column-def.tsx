"use client"

import React from "react"
import { Permission } from "@/src/modules/role-management/domain/types"
import PermissionCheckbox from "@/src/modules/role-management/presentation/components/permission-checkbox"
import { ColumnDef } from "@tanstack/react-table"

export const permissionColumnDef: ColumnDef<Permission>[] = [
  {
    accessorKey: "screen",
    header: "Screen",
  },
  {
    id: "create",
    header: () => <div className="text-center">Create</div>,
    cell: ({ row }) => (
      <PermissionCheckbox permission={row.original} action="CREATE" />
    ),
  },
  {
    id: "read",
    header: () => <div className="text-center">Read</div>,
    cell: ({ row }) => (
      <PermissionCheckbox permission={row.original} action="READ" />
    ),
  },
  {
    id: "update",
    header: () => <div className="text-center">Update</div>,
    cell: ({ row }) => (
      <PermissionCheckbox permission={row.original} action="UPDATE" />
    ),
  },
  {
    id: "delete",
    header: () => <div className="text-center">Delete</div>,
    cell: ({ row }) => (
      <PermissionCheckbox permission={row.original} action="DELETE" />
    ),
  },
]
