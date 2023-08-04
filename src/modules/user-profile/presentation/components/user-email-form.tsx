import React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import {
  userEmailSchema,
  UserEmailValue,
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

interface UserEmailFormProps {
  profile?: UserProfile
}

export default function UserEmailForm({
  profile,
}: UserEmailFormProps): React.ReactElement {
  const { isLoading, submitEmail } = useProfileActions()

  const form = useForm<UserEmailValue>({
    resolver: zodResolver(userEmailSchema),
    defaultValues: {
      email: profile?.email,
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitEmail)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }): React.ReactElement => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <div className="flex space-x-2 items-center">
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <Button
                  size="sm"
                  className="whitespace-nowrap"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Update E-mail
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
