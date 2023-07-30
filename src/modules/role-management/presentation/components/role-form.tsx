"use client"

import React from "react"
import { useRoles } from "@/src/modules/role-management/presentation/hooks/use-roles"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function RoleForm(): React.ReactElement {
  const formSchema = z.object({
    roleName: z
      .string()
      .nonempty("Role name is required")
      .min(2, "Role name must be at least 2 characters.")
      .max(50, "Role name can't be longer than 50 characters."),
    permissions: z
      .array(z.string())
      .nonempty("Permissions are required")
      .min(0),
  })

  const onSubmit = (values: z.infer<typeof formSchema>): void => {
    console.log("SUBMITTED", values)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roleName: "",
      permissions: [],
    },
  })

  const { permissions } = useRoles()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <FormField
            control={form.control}
            name="roleName"
            render={({ field }): React.ReactElement => (
              <FormItem>
                <FormLabel>Role Name</FormLabel>
                <FormControl>
                  <Input placeholder="Role name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h2>Manage Permissions</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Screen</TableCell>
                <TableCell>Create</TableCell>
                <TableCell>Read</TableCell>
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {permissions.map((permission) => (
                <TableRow>
                  <TableCell>{permission.screen}</TableCell>
                  {["CREATE", "READ", "UPDATE", "DELETE"].map((action) => {
                    const currentAction = permission.permissions.find(
                      (x) => x.code === action
                    )

                    if (!currentAction) {
                      return <TableCell />
                    }

                    return (
                      <TableCell>
                        <FormField
                          control={form.control}
                          name="permissions"
                          render={({ field }): React.ReactElement => (
                            <FormItem>
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(
                                    currentAction.id
                                  )}
                                  onCheckedChange={(checked): void => {
                                    const updatedPermissions = checked
                                      ? [
                                          ...(field.value || []),
                                          currentAction.id,
                                        ]
                                      : (field.value || []).filter(
                                          (id) => id !== currentAction.id
                                        )

                                    field.onChange(updatedPermissions)
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </form>
    </Form>
  )
}
