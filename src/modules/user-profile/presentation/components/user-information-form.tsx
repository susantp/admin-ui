"use client"

import React from "react"
import {
  userEmailSchema,
  UserEmailValue,
  userPhoneSchema,
  UserPhoneValue,
} from "@/src/modules/user-profile/presentation/components/form-config"
import UserChangePasswordForm from "@/src/modules/user-profile/presentation/components/user-change-password-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { KeyIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function UserInformationForm(): React.ReactElement {
  const emailForm = useForm<UserEmailValue>({
    resolver: zodResolver(userEmailSchema),
  })

  const phoneForm = useForm<UserPhoneValue>({
    resolver: zodResolver(userPhoneSchema),
  })

  const submitEmail = (value: UserEmailValue): void =>
    console.log("E-mail", value)

  const submitPhone = (value: UserPhoneValue): void =>
    console.log("Phone", value)

  return (
    <Card>
      <CardHeader className="space-y-6">
        <div className="space-y-2">
          <Label>Username</Label>
          <Input disabled />
        </div>
        <Form {...emailForm}>
          <form onSubmit={emailForm.handleSubmit(submitEmail)}>
            <FormField
              control={emailForm.control}
              name="email"
              render={({ field }): React.ReactElement => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <div className="flex space-x-2 items-center">
                    <FormControl>
                      <Input placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <Button size="sm" className="whitespace-nowrap">
                      Update E-mail
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Form {...phoneForm}>
          <form onSubmit={phoneForm.handleSubmit(submitPhone)}>
            <FormField
              control={phoneForm.control}
              name="phone"
              render={({ field }): React.ReactElement => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <div className="flex space-x-2 items-center">
                    <FormControl>
                      <Input placeholder="+977 xxxxxxxxx" {...field} />
                    </FormControl>
                    <Button size="sm" className="whitespace-nowrap">
                      Update Phone
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardHeader>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <KeyIcon className="mr-2 w-4 h-4" />
              Change Password
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0">
            <UserChangePasswordForm />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
