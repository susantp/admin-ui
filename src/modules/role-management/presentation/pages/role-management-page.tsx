import React from "react"
import Link from "next/link"

import { PlusCircleIcon } from "lucide-react"

import Restricted from "@/modules/rbac/presentation/components/restricted"
import { fetchAllRolesAction } from "@/modules/role-management/domain/role-actions"
import { roleColumnDef } from "@/modules/role-management/presentation/components/role-column-def"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DataTable } from "@/components/data-table/data-table"

export default function RoleManagementPage(): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full justify-between items-end">
          <div>
            <h1 className="text-2xl font-medium">Role Management</h1>
            <p className="text-muted-foreground">
              Add or edit user access roles
            </p>
          </div>
          <Restricted to="CREATE">
            <Link href="/roles/create/">
              <Button className="w-fit place-self-end">
                <PlusCircleIcon className="mr-2 w-4 h-4" /> New Role
              </Button>
            </Link>
          </Restricted>
        </div>
      </CardHeader>
      <CardContent>
        <Restricted to="READ">
          <DataTable columns={roleColumnDef} dataFn={fetchAllRolesAction} />
        </Restricted>
      </CardContent>
    </Card>
  )
}