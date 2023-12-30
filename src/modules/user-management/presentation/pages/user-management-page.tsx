import React from "react"
import { fetchAllUsers } from "@/src/modules/user-management/domain/service/user-service"
import { columns } from "@/src/modules/user-management/presentation/components/columns"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DataTable } from "@/components/data-table/data-table"

export default function UserManagementPage(): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-medium">User Management</h1>
        <p className="text-muted-foreground">
          A list of all the users in the system including their name, title,
          email and role
        </p>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} dataFn={fetchAllUsers} />
      </CardContent>
    </Card>
  )
}
