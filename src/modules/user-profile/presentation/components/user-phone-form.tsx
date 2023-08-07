import React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import { UserProfile } from "@/modules/user-profile/domain/types"
import {
  userPhoneSchema,
  UserPhoneValue,
} from "@/modules/user-profile/presentation/components/form-config"
import { useProfileActions } from "@/modules/user-profile/presentation/hooks/use-profile-actions"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface UserPhoneFormProps {
  profile?: UserProfile
}

export default function UserPhoneForm({
  profile,
}: UserPhoneFormProps): React.ReactElement {
  const { isLoading, submitPhone } = useProfileActions()

  const form = useForm<UserPhoneValue>({
    resolver: zodResolver(userPhoneSchema),
    values: {
      phone: profile?.phone ?? "",
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitPhone)}>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }): React.ReactElement => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <div className="flex space-x-2 items-center">
                <FormControl>
                  <Input placeholder="+977 xxxxxxxxx" {...field} />
                </FormControl>
                <Button
                  size="sm"
                  className="whitespace-nowrap"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Update Phone
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
