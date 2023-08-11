import React from "react"

import { PlusCircleIcon } from "lucide-react"

import Restricted from "@/modules/rbac/presentation/components/restricted"
import { fetchAllScreensAction } from "@/modules/screen-management/domain/screen-actions"
import { screenColumnDef } from "@/modules/screen-management/presentation/components/screen-column-def"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DataTable } from "@/components/data-table/data-table"

export default function ScreenManagementPage(): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full justify-between items-end">
          <div>
            <h3 className="text-2xl font-medium">Screen Management</h3>
            <p className="text-muted-foreground">Add or edit app screens</p>
          </div>
          <Restricted to="CREATE">
            <Button>
              <PlusCircleIcon className="mr-2 w-4 h-4" />
              New Screen
            </Button>
          </Restricted>
        </div>
      </CardHeader>
      <CardContent>
        <Restricted to="READ">
          <DataTable columns={screenColumnDef} dataFn={fetchAllScreensAction} />
        </Restricted>
      </CardContent>
    </Card>
  )
}
