import { atom } from "jotai"

import { Role } from "@/modules/role-management/domain/types"

export const roleAtom = atom<Role[]>([])
