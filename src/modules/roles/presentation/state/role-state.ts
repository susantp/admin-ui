import { IFetchRolesData } from "@/src/modules/roles/domain/services/role-service"
import { IRoleList } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import { atom } from "jotai"

export const rolesAtom = atom<IFetchRolesData | null>(null)
