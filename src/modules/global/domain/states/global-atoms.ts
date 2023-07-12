import { IScreen} from "@/src/modules/global/domain/types/repository/global-repository";
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { User } from "next-auth"

export const sessionUserAtom = atomWithStorage<User | null>("user", null)

export const userScreensAtom = atomWithStorage<IScreen[] | null>(
  "screens",
  null
)

export const sidebarAtom = atom(false)

export const currentScreenAtom = atom<IScreen | null>(null)
