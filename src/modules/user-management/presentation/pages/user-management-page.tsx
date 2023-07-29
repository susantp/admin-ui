import React from "react"
import { fetchAllUsers } from "@/src/modules/user-management/domain/service/user-service"
import { columns } from "@/src/modules/user-management/presentation/components/columns"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DataTable } from "@/components/data-table/data-table"

export default function UserManagementPage(): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-3xl font-medium">Users</h2>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} dataFn={fetchAllUsers} label="users" />
      </CardContent>
    </Card>
  )
}
