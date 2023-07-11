import {atom} from "jotai";
import {atomWithStorage} from "jotai/utils";
import {IScreen} from "@/src/modules/global/domain/types/global-type";

export const sessionUserAtom = atomWithStorage('user', {})

export const userScreensAtom = atomWithStorage<IScreen[] | null>('screens', null)

export const sidebarAtom = atom(false)

export const currentScreen = atom<IScreen | null>(null)
