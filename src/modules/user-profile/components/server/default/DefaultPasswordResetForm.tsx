"use client"

import React, { ReactElement } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import { IResetPasswordProps } from "@/modules/user-profile/components"
import {
  resetPasswordFormSchema,
  ResetPasswordFormValues,
} from "@/modules/user-profile/config/password-reset-form-definition"
import { useProfile } from "@/modules/user-profile/presentation/hooks/useProfile"
import { passwordResetFormFields } from "@/modules/user-profile/presentation/models/default/password-reset-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DefaultPasswordResetForm({
  classes,
}: IResetPasswordProps): ReactElement {
  const { isLoading, passwordReset } = useProfile()
  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordFormSchema),
  })
  const { newPassword, currentPassword } = passwordResetFormFields
  return (
    <Card className={classes}>
      <form onSubmit={form.handleSubmit(passwordReset)}>
        <CardContent className="space-y-6 py-6">
          <Form {...form}>
            <FormField
              control={form.control}
              // @ts-expect-error  Type string is not assignable to type "email" | "password" though value is correct
              name={currentPassword.id}
              render={({ field }): ReactElement => (
                <FormItem className="flex flex-col gap-y-2 w-1/2">
                  <Label>{currentPassword.label}</Label>
                  <FormControl>
                    <Input
                      placeholder={currentPassword.placeHolder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              // @ts-expect-error  Type string is not assignable to type "email" | "password" though value is correct
              name={newPassword.id}
              render={({ field }): ReactElement => (
                <FormItem className="flex flex-col gap-y-2 w-1/2">
                  <Label>{newPassword.label}</Label>
                  <FormControl>
                    <Input placeholder={newPassword.placeHolder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>
        </CardContent>
        <CardFooter className="flex items-center justify-end">
          <Button disabled={isLoading} className="text-sm" size="lg">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Update
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
