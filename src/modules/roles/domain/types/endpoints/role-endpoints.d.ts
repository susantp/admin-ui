export interface IRoleList {
  id: string
  name: string
  permissions: IPermissionEndpointResponse[]
}

type TPermission = "CREATE" | "EDIT" | "UPDATE" | "DELETE"

interface IPermissionEndpointResponse {
  id: string
  code: TPermission
  screen: string
}
