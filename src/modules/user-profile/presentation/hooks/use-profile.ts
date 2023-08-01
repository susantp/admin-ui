import { useEffect, useState } from "react"
import { fetchUserProfileAction } from "@/profile/domain/profile-actions"

export const useProfile = (): {
  profile: UserProfile | undefined
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

  return { profile }
}
