import { atom } from "jotai"

import { UserScreen } from "@/modules/rbac/domain/types"

export const userScreensAtom = atom<UserScreen[]>([])

export const currentScreenAtom = atom<UserScreen | undefined>(undefined)
