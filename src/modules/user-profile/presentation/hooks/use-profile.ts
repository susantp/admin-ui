import { useAtomValue } from "jotai"

import { UserProfile } from "@/modules/user-profile/domain/types"
import { profileAtom } from "@/modules/user-profile/presentation/atoms/profile-atom"

export const useProfile = (): { profile: UserProfile | undefined } => {
  const profile = useAtomValue(profileAtom)

  return { profile }
}
