import { useEffect, useState } from "react"
import {
  fetchUserProfileAction,
  updateUserDetailAction,
} from "@/profile/domain/profile-actions"
import { UserDetailsFormValues } from "@/profile/presentation/components/form-config"

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
      .then((res) =>
        setProfile((prevState) => {
          if (prevState) {
            return { ...prevState, ...res }
          }
          return undefined
        })
      )
      .catch(() => console.log("Could not update user details"))
  }

  return { profile, submitUserDetails }
}
