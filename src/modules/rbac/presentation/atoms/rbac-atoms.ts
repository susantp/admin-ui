import { UserScreen } from "@/src/modules/rbac/domain/types"
import { atom } from "jotai"

export const userScreensAtom = atom<UserScreen[]>([])

export const currentScreenAtom = atom<UserScreen | undefined>(undefined)
