import { IScreen } from "@/src/modules/global/domain/types/global-type"
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { User } from "next-auth"

export const sessionUserAtom = atomWithStorage<User | null>("user", null)

export const userScreensAtom = atomWithStorage<IScreen[] | null>(
  "screens",
  null
)

export const sidebarAtom = atom(false)

export const currentScreen = atom<IScreen | null>(null)
