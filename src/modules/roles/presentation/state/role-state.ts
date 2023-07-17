import {atom} from "jotai";
import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";

export const rolesAtom = atom<IRoleList[] | null>(null)
