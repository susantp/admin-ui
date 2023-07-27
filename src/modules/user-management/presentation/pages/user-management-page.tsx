import React from "react"
import { UsersTable } from "@/src/modules/user-management/presentation/components/users-table"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function UserManagementPage(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-3xl font-medium">Users</h2>
      </CardHeader>
      <CardContent>
        <UsersTable />
      </CardContent>
    </Card>
  )
}
