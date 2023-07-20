import { IRoleList } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"

export interface IRoleService {
  fetchRoles: () => Promise<IRoleList[] | null>
}
export interface IFetchRolesData {
  total: string
  totalPage: string
  results: IRoleList[]
}
export interface IFetchRolesOriginalData {
  total: string
  total_page: string
  results: IRoleList[]
}
