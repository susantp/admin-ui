import { useState } from "react"

import { useSetAtom } from "jotai"
import { signOut } from "next-auth/react"

import {
  updateEmailAction,
  updatePasswordAction,
  updatePhoneAction,
  updateUserDetailAction,
} from "@/modules/user-profile/domain/profile-actions"
import { profileAtom } from "@/modules/user-profile/presentation/atoms/profile-atom"
import {
  PasswordFormValues,
  UserDetailsFormValues,
  UserEmailValue,
  UserPhoneValue,
} from "@/modules/user-profile/presentation/components/form-config"

import { toast } from "@/components/ui/use-toast"

export const useProfileActions = (): {
  isLoading: boolean
  submitUserDetails: (
    values: UserDetailsFormValues,
    newProfile: boolean
  ) => void
  submitPassword: (values: PasswordFormValues) => void
  submitEmail: (value: UserEmailValue) => void
  submitPhone: (value: UserPhoneValue) => void
} => {
  const setProfile = useSetAtom(profileAtom)
  const [isLoading, setIsLoading] = useState(false)

  const submitUserDetails = (
    values: UserDetailsFormValues,
    newProfile: boolean
  ): void => {
    setIsLoading(true)
    updateUserDetailAction(values, newProfile ? "CREATE" : "UPDATE")
      .then(() => {
        toast({
          title: "Success",
          description: "User details updated successfully.",
        })
        setProfile((prev) => {
          if (!prev) return prev
          return {
            ...prev,
            firstName: values.firstName,
            lastName: values.lastName,
            address: values.address,
          }
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
      .then(() => {
        toast({
          title: "Success",
          description: "Email updated successfully.",
        })
        setProfile((prev) => {
          if (prev)
            return {
              ...prev,
              email: value.email,
            }
          return prev
        })
      })
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
      .then(() => {
        toast({
          title: "Success",
          description: "Phone updated successfully.",
        })
        setProfile((prev) => {
          if (prev)
            return {
              ...prev,
              phone: value.phone,
            }
          return prev
        })
      })
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
