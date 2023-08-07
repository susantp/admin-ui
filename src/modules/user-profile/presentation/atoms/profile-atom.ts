import { atom } from "jotai"

import { UserProfile } from "@/modules/user-profile/domain/types"

export const profileAtom = atom<UserProfile | undefined>(undefined)
