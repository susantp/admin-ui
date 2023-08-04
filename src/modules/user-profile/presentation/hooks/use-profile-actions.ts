import { useState } from "react"

import { signOut } from "next-auth/react"

import {
  updateEmailAction,
  updatePasswordAction,
  updatePhoneAction,
  updateUserDetailAction,
} from "@/modules/user-profile/domain/profile-actions"
import {
  PasswordFormValues,
  UserDetailsFormValues,
  UserEmailValue,
  UserPhoneValue,
} from "@/modules/user-profile/presentation/components/form-config"
import { toast } from "@/components/ui/use-toast"

export const useProfileActions = (): {
  isLoading: boolean
  createUserDetails: (values: UserDetailsFormValues) => void
  submitUserDetails: (values: UserDetailsFormValues) => void
  submitPassword: (values: PasswordFormValues) => void
  submitEmail: (value: UserEmailValue) => void
  submitPhone: (value: UserPhoneValue) => void
} => {
  const [isLoading, setIsLoading] = useState(false)

  const updateUserDetails = (
    values: UserDetailsFormValues,
    action?: "CREATE" | "UPDATE"
  ): void => {
    setIsLoading(true)
    updateUserDetailAction(values, action)
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

  const createUserDetails = (values: UserDetailsFormValues): void =>
    updateUserDetails(values, "CREATE")

  const submitUserDetails = (values: UserDetailsFormValues): void =>
    updateUserDetails(values, "UPDATE")

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
    createUserDetails,
    submitUserDetails,
    submitEmail,
    submitPhone,
    submitPassword,
  }
}
