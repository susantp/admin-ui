import React from "react"

import { columns } from "@/app/(dashboard)/users/columns"
import { DataTable } from "@/app/(dashboard)/users/data-table"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getData() {
  return [
    {
      id: "e3141cc8-71b4-4967-a4c7-5bdcbcd5b926",
      username: "admin",
      email: "admin@admin.com",
      phone: null,
      is_active: true,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Superuser"],
    },
    {
      id: "e3141cc8-71b4-4967-a4c7-5bdcbcd5b927",
      username: "bishnu.das",
      email: "bishnu.das@lisnepal.com.np",
      phone: "9818583682",
      is_active: true,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Superuser"],
    },
    {
      id: "e3141cc8-71b4-4967-a4c7-5bdcbcd5b928",
      username: "susanta.paudel",
      email: "susanta.paudel@lisnepal.com.np",
      phone: null,
      is_active: true,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Superuser"],
    },
    {
      id: "e3141cc8-71b4-4967-a4c7-5bdcbcd5b929",
      username: "ishwor.kafle",
      email: "ishwor.kafle@lisnepal.com.np",
      phone: null,
      is_active: true,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Superuser"],
    },
    {
      id: "e3141cc8-71b4-4967-a4c7-5bdcbcd5b930",
      username: "anish.byanjankar",
      email: "anish.byanjankar@lisnepal.com.np",
      phone: null,
      is_active: true,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Superuser"],
    },
  ]
}

export default function UsersPage(): JSX.Element {
  const data = getData()
  return <DataTable columns={columns} data={data} />
}
