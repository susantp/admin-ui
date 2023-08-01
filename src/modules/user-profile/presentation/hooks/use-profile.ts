import { useEffect, useState } from "react"
import {
  fetchUserProfileAction,
  updateUserDetailAction,
} from "@/profile/domain/profile-actions"
import { UserDetailsFormValues } from "@/profile/presentation/components/form-config"

import { toast } from "@/components/ui/use-toast"

export const useProfile = (): {
  profile: UserProfile | undefined
  submitUserDetails: (values: UserDetailsFormValues) => void
} => {
  const [profile, setProfile] = useState<UserProfile>()

  useEffect(() => {
    fetchUserProfileAction()
      .then((res) => {
        setProfile(res)
      })
      .catch(() => {
        console.log("Could not fetch User Profile")
      })
  }, [])

  const submitUserDetails = (values: UserDetailsFormValues): void => {
    updateUserDetailAction(values)
      .then((res) => {
        setProfile((prevState) => {
          if (prevState) {
            return { ...prevState, ...res }
          }
          return undefined
        })
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
  }

  return { profile, submitUserDetails }
}
