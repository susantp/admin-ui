import {atom} from "jotai";
import {atomWithStorage} from "jotai/utils";
import {IUserScreens} from "@/src/modules/global/domain/types/global-type";

export const sessionUserAtom = atomWithStorage('user', {})

export const userScreensAtom = atomWithStorage<IUserScreens | null>('screens', null)
