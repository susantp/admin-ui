import { IRoleList } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"

export interface IRolesMappedResponseData {
  total: string
  totalPage: string
  results: IRoleList[]
}
export interface IRolesOriginalResponseData {
  total: string
  total_page: string
  results: IRoleList[]
}
