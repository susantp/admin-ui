import React from "react"
import { fetchAllScreensAction } from "@/screens/domain/screen-actions"
import { screenColumnDef } from "@/screens/presentation/components/screen-column-def"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DataTable } from "@/components/data-table/data-table"

export default function ScreenManagementPage(): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full justify-between">
          <div>
            <h3 className="text-2xl font-medium">Screen Management</h3>
            <p className="text-muted-foreground">Add or edit app screens</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable columns={screenColumnDef} dataFn={fetchAllScreensAction} />
      </CardContent>
    </Card>
  )
}
