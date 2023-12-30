import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";


export interface IRoleService {
  fetchRoles: () => Promise<IRoleList[] | null>
}
