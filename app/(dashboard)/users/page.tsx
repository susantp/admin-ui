"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { columns } from "@/app/(dashboard)/users/columns"
import { users } from "@/app/(dashboard)/users/data"
import { DataTable } from "@/app/(dashboard)/users/data-table"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getData() {
  return users
}

export default function UsersPage(): JSX.Element {
  const data = getData()
  return (
    <Card>
      <CardHeader>
        <Button className="px-8 w-fit place-self-end">Add New User</Button>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  )
}
