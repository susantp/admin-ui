import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import { IPermission } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import {
  IRolesMappedResponseData,
  IRolesOriginalResponseData,
} from "@/src/modules/roles/domain/types/repository"
import { ClassValue } from "clsx/clsx"

interface InterfacePathObject {
  id: string
  path: string
  label: string
  name: string
}

export interface InterfaceAppPaths {
  home: InterfacePathObject
  dashboard: InterfacePathObject
  users: InterfacePathObject
  roles: InterfacePathObject
  screens: InterfacePathObject
}
type IconSet = Record<string, { icon: JSX.Element }>

export interface IComposeRequestPathParams {
  requestPath: string
}

export interface InterfaceGetHelpers {
  joinClasses: (...classes: string[]) => string
  formatDate: (input: string | number) => string
  cn: (...inputs: ClassValue[]) => string
  appPaths: InterfaceAppPaths
  mapScreens: (responseScreens: IScreen[] | null) => IScreen[] | null
  getBackendProjectName: () => string
  getBackendBaseUrl: () => string
  getAppUrl: () => string
  composeRequestPath: ({ requestPath }: IComposeRequestPathParams) => URL
  getUniqueScreensFromPermissionsResponseData: (data: IPermission[]) => string[]
  toTitleCase: (data: string) => string
  mapRolesData: (
    apiResponse: IRolesOriginalResponseData
  ) => IRolesMappedResponseData
}
