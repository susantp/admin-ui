export interface IRole {
  id: string
  name: string
  permissions: IPermission[]
  members: number
}

type TPermission = "CREATE" | "EDIT" | "UPDATE" | "DELETE"

interface IPermission {
  id: string
  code: TPermission
  screen: string
}

interface IGroupedScreenWithPermissions {
  screen: string
  permissions: { id: string; code: string }[]
}

export interface AuthEndpoints {
  userLogin: string
  userRegister: string
  refreshToken: string
  loggedInUser: string
  userDetail: string
  userScreens: string
}

export interface ITopRolesResponseData {
  id: string
  name: string
  members: number
}
