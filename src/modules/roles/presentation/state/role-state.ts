import { IFetchRolesData } from "@/src/modules/roles/domain/types/repository"
import { atom } from "jotai"

export const rolesAtom = atom<IFetchRolesData | null>(null)
