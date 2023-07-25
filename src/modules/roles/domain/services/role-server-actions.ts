"use server"

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
  IPermission,
  IRole
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import {
  IRolesOriginalResponseData
} from "@/src/modules/roles/domain/types/repository"
import {ICreateRoleServiceProps, IGetRoleProps} from "../types/service";

const {getRoles, postRole, getRole, getPermissions} = roleEndpoints

export const fetchRoles = async ({
                                   xScreen,
                                 }: IServiceProps): Promise<IRolesOriginalResponseData | null> => {
  if (!xScreen) return null
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id
  })
  if (!clientConfig) return null
  const requestPath: string = getRoles
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
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id
  })
  if (!clientConfig) return null
  const requestPath: string = getPermissions
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
                                 }: ICreateRoleServiceProps): Promise<IRole | null> => {
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id
  })
  if (!clientConfig) return null
  const requestPath: string = postRole
  const url: URL = getHelpers.composeRequestPath({requestPath})
  const response: IRole = await postRequest<IRole>({
    requestPath: url,
    body,
    requestInit: clientConfig
  })
  if (!response) return null
  return response
}

export const fetchRole = async ({
                                  roleId,
                                  xScreen
                                }: IGetRoleProps): Promise<null | IRole> => {
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id
  })
  if (!clientConfig) return null
  const requestPath: string = getRole.replace("[id]", roleId)
  const url: URL = getHelpers.composeRequestPath({requestPath})
  const response: IRole = await getRequest<IRole>({
    requestPath: url,
    requestInit: clientConfig,
  })
  if (!response) return null
  return response
}
