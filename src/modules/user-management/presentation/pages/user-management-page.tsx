import React, { ReactElement } from "react"

import Restricted from "@/src/modules/rbac/presentation/components/restricted"
import { PlusCircleIcon } from "lucide-react"

import UsersTable from "@/modules/user-management/presentation/components/users-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function UserManagementPage(): ReactElement {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full justify-between items-end">
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
        <UsersTable />
      </CardContent>
    </Card>
  )
}
