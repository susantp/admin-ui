import React from "react"
import RoleForm from "@/src/modules/role-management/presentation/components/role-form"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export function RoleCreateEditPage(): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Role</CardTitle>
      </CardHeader>
      <RoleForm />
    </Card>
  )
}
