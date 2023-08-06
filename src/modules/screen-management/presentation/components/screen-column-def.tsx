import { ColumnDef } from "@tanstack/react-table"

import { Screen } from "@/modules/screen-management/domain/types"

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
]
