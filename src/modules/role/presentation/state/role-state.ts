import { IPermission } from "@/src/modules/role/domain/types/endpoints/role-endpoints"
import { IRolesMappedResponseData } from "@/src/modules/role/domain/types/repository"
import { atom } from "jotai"

export const rolesAtom = atom<IRolesMappedResponseData | null>(null)
export const permissionsAtom = atom<IPermission[] | null>(null)
