import React, { ReactElement } from "react"

import { fetchTopRolesAction } from "@/modules/role-management/domain/role-actions"
import { fetchAllUsersAction } from "@/modules/user-management/domain/user-actions"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default async function Home(): Promise<ReactElement> {
  const roles = await fetchTopRolesAction()
  const users = await fetchAllUsersAction({
    pageIndex: 1,
    pageSize: 5,
    globalFilter: "",
  })
  return (
    <div className="flex flex-col h-full space-y-2">
      <Card className="bg-secondary border-0">
        <CardHeader>
          <CardTitle>Top Roles</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {roles.map((role) => (
            <Card className="flex place-items-center gap-4">
              <CardHeader className="bg-primary-foreground rounded">
                <CardTitle>{role.name.slice(0, 2)}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-1">
                <CardTitle>{role.name}</CardTitle>
                <CardDescription>{role.members} user(s)</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-secondary border-0 h-full">
        <CardHeader>
          <CardTitle>Top Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="bg-background rounded-md">
            <TableHeader>
              <TableRow>
                <TableHead>Username</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.results.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {user.username}
                    <br />
                    <span className="text-muted-foreground">{user.email}</span>
                  </TableCell>
                  <TableCell>
                    {user.detail?.first_name} {user.detail?.last_name}
                    <br />
                    <span className="text-muted-foreground">
                      {user.detail?.designation}
                    </span>
                  </TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    {user.is_active ? (
                      <Badge>Active</Badge>
                    ) : (
                      <Badge variant="destructive">Inactive</Badge>
                    )}
                  </TableCell>

                  <TableCell>{user.roles}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
