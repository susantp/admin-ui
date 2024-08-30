import React, { ReactElement } from "react"

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

export default function Home(): ReactElement {
  return (
    <div className="flex flex-col h-full space-y-2">
      <Card className="">
        <CardHeader>
          <CardTitle>Top Roles</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Card className="flex place-items-center gap-4">
            <CardHeader className="bg-primary-foreground rounded">
              <CardTitle>role name</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-1">
              <CardTitle>role name</CardTitle>
              <CardDescription>role associated user(s)</CardDescription>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card className="h-full">
        <CardHeader>
          <CardTitle>Top Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
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
                <TableRow key="id">
                  <TableCell>
                    username
                    <br />
                    <span className="text-muted-foreground">email</span>
                  </TableCell>
                  <TableCell>
                    firstname lastname
                    <br />
                    <span className="text-muted-foreground">designation</span>
                  </TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>
                    <Badge>Active</Badge>
                    {/* <Badge variant="destructive">Inactive</Badge> */}
                  </TableCell>

                  <TableCell>user roles</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
