"use client"

import React, { ReactElement } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import {
  loginFormSchema,
  LoginFormValues,
} from "@/modules/login/config/form-config"
import { useAuth } from "@/modules/login/presentation/hooks/use-auth"
import defaultUserLoginForm from "@/modules/login/presentation/models/default/defaultUserLoginForm"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function DefaultUserLoginForm(): ReactElement {
  const { isLoading, loginUser } = useAuth()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  })
  const { fields, action } = defaultUserLoginForm

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(loginUser)} className="space-y-2">
        <FormField
          control={form.control}
          // @ts-expect-error  Type string is not assignable to type "email" | "password" though value is correct
          name={fields.email.id}
          render={({ field }): ReactElement => (
            <FormItem>
              <FormControl>
                <Input placeholder={fields.email.placeHolder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          // @ts-expect-error  Type string is not assignable to type "email" | "password" though value is correct
          name={fields.password.id}
          render={({ field }): ReactElement => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={fields.password.placeHolder}
                  type={fields.password.type}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} className="w-full">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {action.button.label}
        </Button>
      </form>
    </Form>
  )
}
