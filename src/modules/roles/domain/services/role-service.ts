"use server"

import {IClientParams} from "@/src/modules/global/domain/types/api-client"
import {
  IServiceProps
} from "@/src/modules/global/domain/types/repository/global-repository"
import {
  getRequest,
  postRequest
} from "@/src/modules/global/domain/utils/api-client"
import {
  authenticClient
} from "@/src/modules/global/domain/utils/get-authentic-client"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import {roleEndpoints} from "@/src/modules/roles/domain/objects/role-endpoints"
import {
  IPermission, IRole
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import {
  IRolesOriginalResponseData
} from "@/src/modules/roles/domain/types/repository"
import {ICreateRoleServiceProps} from "@/src/modules/roles/domain/types/crud";

export const fetchRoles = async ({
                                   xScreen,
                                 }: IServiceProps): Promise<IRolesOriginalResponseData | null> => {
  if (!xScreen) return null
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id,
  } as IClientParams)
  if (!clientConfig) return null
  const requestPath: string = roleEndpoints.fetchRoles
  const url: URL = getHelpers.composeRequestPath({requestPath})

  const responseRoles: IRolesOriginalResponseData | null | undefined =
    await getRequest<IRolesOriginalResponseData | null>({
      requestPath: url,
      requestInit: clientConfig,
    })
  if (!responseRoles) return null
  return responseRoles
}

export const fetchPermissions = async ({
                                       xScreen,
                                     }: IServiceProps): Promise<IPermission[] | null> => {
  if (!xScreen) return null
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id,
  } as IClientParams)
  if (!clientConfig) return null
  const requestPath: string = roleEndpoints.fetchPermission
  const url: URL = getHelpers.composeRequestPath({requestPath})

  const responsePermissions: IPermission[] = await getRequest<IPermission[]>({
    requestPath: url,
    requestInit: clientConfig,
  })
  if (!responsePermissions) return null
  return responsePermissions
}

export const createRole = async ({
                                   xScreen,
                                   body
                                 }: ICreateRoleServiceProps): Promise<IRole|null> => {
  if (!xScreen) return null
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id
  } as IClientParams)
  if (!clientConfig) return null
  const requestPath: string = roleEndpoints.createRole
  const url: URL = getHelpers.composeRequestPath({requestPath})
  const response:IRole = await postRequest<IRole>({
    requestPath: url,
    body,
    requestInit: clientConfig
  })
  if (!response) return null
  return response
}
