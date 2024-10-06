"use client"

import React, { ReactElement, useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import {
  loginFormSchema,
  LoginFormValues,
} from "@/modules/auth/config/form-definitions"
import { useAuth } from "@/modules/auth/presentation/hooks/auth"
import defaultUserLoginForm from "@/modules/auth/presentation/models/default/defaultUserLoginForm"

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
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  })
  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/profile",
  })
  const [shouldRemember, setShouldRemember] = useState(false)
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(false)
  const { fields, action } = defaultUserLoginForm
  const submitForm = async (values: LoginFormValues) => {
    const { email, password } = values
    login({
      email,
      password,
      setErrors,
      setStatus,
    })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-2">
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
        <Button disabled={status} className="w-full">
          {status && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {action.button.label}
        </Button>
      </form>
    </Form>
  )
}