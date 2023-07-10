import { ColumnDef } from "@tanstack/react-table"

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
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
]
