import {atom} from "jotai";
import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";

export const roles = atom<IRoleList | null>(null)
