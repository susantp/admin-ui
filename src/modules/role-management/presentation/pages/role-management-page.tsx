import React from "react"
import { fetchAllRoles } from "@/src/modules/role-management/domain/service/role-service"
import { columns } from "@/src/modules/role-management/presentation/components/columns"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DataTable } from "@/components/data-table/data-table"

export default function RoleManagementPage(): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full justify-between">
          <div>
            <h3 className="text-2xl font-medium">Role Management</h3>
            <p className="text-muted-foreground">
              Add or edit user access roles
            </p>
          </div>
          <Button className="w-fit place-self-end">
            <PlusIcon className="mr-2 w-4 h-4" /> New Role
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} label="roles" dataFn={fetchAllRoles} />
      </CardContent>
    </Card>
  )
}
