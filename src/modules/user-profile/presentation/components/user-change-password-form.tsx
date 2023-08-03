import React from "react"

import {
  PasswordFormValues,
  passwordSchema,
} from "@/profile/presentation/components/form-config"
import { useProfileActions } from "@/profile/presentation/hooks/use-profile-actions"
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function UserChangePasswordForm(): React.ReactElement {
  const { isLoading, submitPassword } = useProfileActions()

  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
  })

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitPassword)}>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              name="oldPassword"
              control={form.control}
              render={({ field }): React.ReactElement => (
                <FormItem>
                  <FormLabel>Old Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Old Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }): React.ReactElement => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Passwod" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }): React.ReactElement => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button disabled={isLoading}>Update Password</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
