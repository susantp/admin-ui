import React from "react"
import { UsersTable } from "@/src/modules/user-management/presentation/components/users-table"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function UserManagementPage(): JSX.Element {
  return (
    <Card>
      <CardHeader />
      <CardContent>
        <UsersTable />
      </CardContent>
    </Card>
  )
}
