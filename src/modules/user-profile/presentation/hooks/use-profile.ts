import { useAtomValue } from "jotai"

import { profileAtom } from "@/modules/user-profile/presentation/atoms/profile-atom"

export const useProfile = (): { profile: UserProfile | undefined } => {
  const profile = useAtomValue(profileAtom)

  return { profile }
}
