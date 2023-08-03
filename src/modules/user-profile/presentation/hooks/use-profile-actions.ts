import { useState } from "react"

import {
  updateEmailAction,
  updatePasswordAction,
  updatePhoneAction,
  updateUserDetailAction,
} from "@/profile/domain/profile-actions"
import {
  PasswordFormValues,
  UserDetailsFormValues,
  UserEmailValue,
  UserPhoneValue,
} from "@/profile/presentation/components/form-config"
import { signOut } from "next-auth/react"

import { toast } from "@/components/ui/use-toast"

export const useProfileActions = (): {
  isLoading: boolean
  submitUserDetails: (values: UserDetailsFormValues) => void
  submitPassword: (values: PasswordFormValues) => void
  submitEmail: (email: UserEmailValue) => void
  submitPhone: (phone: UserPhoneValue) => void
} => {
  const [isLoading, setIsLoading] = useState(false)

  const submitUserDetails = (values: UserDetailsFormValues): void => {
    setIsLoading(true)
    updateUserDetailAction(values)
      .then(() => {
        toast({
          title: "Success",
          description: "User details updated successfully.",
        })
      })
      .catch(() =>
        toast({
          title: "Failure",
          description: "There was a problem updating user details",
        })
      )
      .finally(() => setIsLoading(false))
  }

  const submitEmail = (value: UserEmailValue): void => {
    setIsLoading(true)
    updateEmailAction(value.email)
      .then(() =>
        toast({
          title: "Success",
          description: "Email updated successfully.",
        })
      )
      .catch(() =>
        toast({
          title: "Failure",
          description: "Could not update email.",
          variant: "destructive",
        })
      )
      .finally(() => setIsLoading(false))
  }

  const submitPhone = (value: UserPhoneValue): void => {
    setIsLoading(true)
    updatePhoneAction(value.phone)
      .then(() =>
        toast({
          title: "Success",
          description: "Phone updated successfully.",
        })
      )
      .catch(() =>
        toast({
          title: "Failure",
          description: "Could not update phone.",
          variant: "destructive",
        })
      )
      .finally(() => setIsLoading(false))
  }

  const submitPassword = (values: PasswordFormValues): void => {
    setIsLoading(true)
    updatePasswordAction({
      old_password: values.oldPassword,
      new_password: values.password,
    })
      .then(async () => {
        toast({
          title: "Success",
          description: "Password updated successfully. Redirecting to login...",
        })
        await signOut()
      })
      .catch(() =>
        toast({
          title: "Failure",
          description: "Could not update password.",
          variant: "destructive",
        })
      )
      .finally(() => setIsLoading(false))
  }

  return {
    isLoading,
    submitUserDetails,
    submitEmail,
    submitPhone,
    submitPassword,
  }
}
