"use client"

import React from "react"
import { useRouter } from "next/navigation"

import { submitRoleAction } from "@/roles/domain/service/role-service"
import {
  formSchema,
  RoleFormValues,
} from "@/roles/presentation/components/form-config"
import { useRoles } from "@/roles/presentation/hooks/use-roles"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { toast } from "@/components/ui/use-toast"

interface RoleCreateEditPageProps {
  roleId?: string
}

export function RoleCreateEditForm({
  roleId,
}: RoleCreateEditPageProps): React.ReactElement {
  const router = useRouter()
  const { permissions, defaultValues } = useRoles(roleId)

  const form = useForm<RoleFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      permissions: [],
    },
    values: defaultValues,
  })

  const onSubmit = (values: RoleFormValues): void => {
    submitRoleAction({ roleId, role: values })
      .then(() => {
        if (!roleId) form.reset()
        toast({
          title: "Success",
          description: `Role ${roleId ? "updated" : "created"} successfully.`,
        })
        router.back()
      })
      .catch(() => {})
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{roleId ? "Edit Role" : "Create Role"}</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="name"
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
                  <TableRow key={permission.screen}>
                    <TableCell>{permission.screen}</TableCell>
                    {["CREATE", "READ", "UPDATE", "DELETE"].map((action) => {
                      const currentAction = permission.permissions.find(
                        (x) => x.code === action
                      )

                      if (!currentAction) {
                        return <TableCell key={action} />
                      }

                      return (
                        <TableCell key={action}>
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
    </Card>
  )
}
