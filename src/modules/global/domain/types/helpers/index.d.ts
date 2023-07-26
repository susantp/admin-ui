import React from "react"
import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import { IPermission } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import {
  IRolesMappedResponseData,
  IRolesOriginalResponseData,
} from "@/src/modules/roles/domain/types/repository"
import { ClassValue } from "clsx/clsx"

interface InterfacePathBase {
  id: string
  label: string
  name: string
}

interface InterfaceStaticPath extends InterfacePathBase {
  path: string
}

interface InterfaceDynamicPath extends InterfacePathBase {
  path: (id: string | number) => string
}

export interface InterfaceAppPaths {
  home: InterfaceStaticPath
  dashboard: InterfaceStaticPath
  users: InterfaceStaticPath
  roles: InterfaceStaticPath
  editRole: InterfaceDynamicPath
  createRole: InterfaceDynamicPath
  screens: InterfaceStaticPath
  profile: InterfaceStaticPath
}

type IconSet = Record<string, { icon: React.ReactNode }>

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
