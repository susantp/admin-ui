import React from "react"
import { roleService } from "@/src/modules/role-management/domain/service/role-service"
import { columns } from "@/src/modules/role-management/presentation/components/columns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DataTable } from "@/components/data-table/data-table"

export default async function RoleManagementPage(): Promise<JSX.Element> {
  const data = await roleService.fetchAllRoles()

  return (
    <Card>
      <CardHeader>
        <Button className="px-8 w-fit place-self-end">Add New User</Button>
      </CardHeader>
      <CardContent>
        {/* <DataTable columns={columns} label="roles"  dataFn={() => {}}/> */}
      </CardContent>
    </Card>
  )
}
