"use client"

import React, { ReactElement } from "react"

import {
  loginFormSchema,
  LoginFormValues,
} from "@/auth/presentation/components/form-config"
import { useAuth } from "@/auth/presentation/hooks/use-auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function UserLoginForm(): ReactElement {
  const { isLoading, loginUser } = useAuth()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(loginUser)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }): ReactElement => (
            <FormItem>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }): ReactElement => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} className="w-full">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Login
        </Button>
      </form>
    </Form>
  )
}
