import React from "react"

import Restricted from "@/src/modules/rbac/presentation/components/restricted"
import { fetchAllUsers } from "@/src/modules/user-management/domain/service/user-service"
import { columns } from "@/src/modules/user-management/presentation/components/columns"
import { PlusCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DataTable } from "@/components/data-table/data-table"

export default function UserManagementPage(): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full justify-between">
          <div>
            <h1 className="text-2xl font-medium">User Management</h1>
            <p className="text-muted-foreground">
              A list of all the users in the system including their name, title,
              email and role
            </p>
          </div>
          <Restricted to="CREATE">
            <Button>
              <PlusCircleIcon className="mr-2 w-4 h-4" />
              New User
            </Button>
          </Restricted>
        </div>
      </CardHeader>
      <CardContent>
        <Restricted to="READ">
          <DataTable columns={columns} dataFn={fetchAllUsers} />
        </Restricted>
      </CardContent>
    </Card>
  )
}
