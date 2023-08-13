"use client"

import React from "react"

import { ColumnDef } from "@tanstack/react-table"

import { Screen } from "@/modules/screen-management/domain/types"
import ScreenColumnActions from "@/modules/screen-management/presentation/components/screen-column-actions"

export const screenColumnDef: ColumnDef<Screen>[] = [
  {
    accessorKey: "name",
    header: "Screen",
  },
  {
    id: "route",
    accessorKey: "slug",
    header: "Route",
  },
  {
    id: "action",
    header: () => <span>Action</span>,
    cell: ({ row }) => <ScreenColumnActions screen={row.original} />,
  },
]
