"use client"

import React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import {
  UserDetailsFormValues,
  userDetailsSchema,
} from "@/modules/user-profile/presentation/components/form-config"
import { useProfileActions } from "@/modules/user-profile/presentation/hooks/use-profile-actions"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
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

interface UserDetailsFormProps {
  profile?: UserProfile
}

export default function UserDetailsForm({
  profile,
}: UserDetailsFormProps): React.ReactElement {
  const { isLoading, submitUserDetails } = useProfileActions()
  const form = useForm<UserDetailsFormValues>({
    resolver: zodResolver(userDetailsSchema),
    defaultValues: {
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      address: profile?.address,
    },
  })

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitUserDetails)}>
          <CardHeader className="space-y-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }): React.ReactElement => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }): React.ReactElement => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }): React.ReactElement => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Label>Designation</Label>
              <Input disabled value={profile?.designation} />
            </div>
          </CardHeader>
          <CardFooter>
            <Button disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Update Details
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
