import React from "react"
import { userService } from "@/src/modules/user-management/domain/service/user-service"
import { columns } from "@/src/modules/user-management/presentation/components/columns"
import UserCreateForm from "@/src/modules/user-management/presentation/components/user-create-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DataTable } from "@/components/data-table/data-table"

export default async function UserManagementPage(): Promise<JSX.Element> {
  const data = await userService.fetchAllUsers()

  return (
    <Card>
      <CardHeader>
        <Dialog>
          <DialogTrigger className="place-self-end">
            <Button className="px-8 w-fit">Add New User</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Add New User</DialogHeader>
            <UserCreateForm />
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} label="users" />
      </CardContent>
    </Card>
  )
}
