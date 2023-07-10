"use client"

import React from "react"

import { Card, CardHeader } from "@/components/ui/card"
import { UserCard } from "@/components/user-card"
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
      is_active: false,
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
      roles: ["Admin"],
    },
    {
      id: "e3141cc8-71b4-4967-a4c7-5bdcbcd5b930",
      username: "anish.byanjankar",
      email: "anish.byanjankar@lisnepal.com.np",
      phone: null,
      is_active: false,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Member"],
    },
    {
      id: "e3141cc8-71b4-4967-a4c7-23dcbcd5b926",
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
      id: "e3141cc8-71b4-49657554c7-5bdcbcd5b927",
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
      id: "e3141cc8-71b4-4967-a4c645dcbcd5b928",
      username: "susanta.paudel",
      email: "susanta.paudel@lisnepal.com.np",
      phone: null,
      is_active: false,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Superuser"],
    },
    {
      id: "e3141cc8-71b4-986a4c7-5bdcbcd5b929",
      username: "ishwor.kafle",
      email: "ishwor.kafle@lisnepal.com.np",
      phone: null,
      is_active: true,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Admin"],
    },
    {
      id: "e3141cc8-54267-a4c7-5bdcbcd5b930",
      username: "anish.byanjankar",
      email: "anish.byanjankar@lisnepal.com.np",
      phone: null,
      is_active: false,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Member"],
    },
    {
      id: "e3141cc8-716437-a4c7-5bdcbcd5b926",
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
      id: "e3141cc8-7154267-a4c7-5bdcbcd5b927",
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
      id: "e3141cc8-71b4-785a4c7-5bdcbcd5b928",
      username: "susanta.paudel",
      email: "susanta.paudel@lisnepal.com.np",
      phone: null,
      is_active: false,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Superuser"],
    },
    {
      id: "e3141cc8-71b4-4123-a4c7-5bdcbcd5b929",
      username: "ishwor.kafle",
      email: "ishwor.kafle@lisnepal.com.np",
      phone: null,
      is_active: true,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Admin"],
    },
    {
      id: "e31457-71b4-4967-a4c7-5bdcbcd5b930",
      username: "anish.byanjankar",
      email: "anish.byanjankar@lisnepal.com.np",
      phone: null,
      is_active: false,
      is_user: true,
      is_superuser: true,
      created_at: "2023-06-30T09:42:07.082074Z",
      updated_at: "2023-06-30T09:42:07.082098Z",
      roles: ["Member"],
    },
  ]
}

export default function UsersPage(): JSX.Element {
  const data = getData()
  return (
    <div className="flex flex-col p-2 space-y-6">
      <div className="flex justify-end">
        <UserCard />
      </div>
      <Card>
        <CardHeader>
          <DataTable columns={columns} data={data} />
        </CardHeader>
      </Card>
    </div>
  )
}
