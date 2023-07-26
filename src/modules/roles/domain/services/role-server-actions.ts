"use server"

import {
  IServiceProps
} from "@/src/modules/global/domain/types/repository/global-repository"
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/src/modules/global/domain/utils/api-client"
import {
  authenticClient
} from "@/src/modules/global/domain/utils/get-authentic-client"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import {roleEndpoints} from "@/src/modules/roles/domain/objects/role-endpoints"
import {
  IPermission,
  IRole,
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import {
  IRolesOriginalResponseData
} from "@/src/modules/roles/domain/types/repository"

import {
  INoContentApiResponse
} from "@/src/modules/global/domain/types/api-client";
import {
  ICreateRoleServiceProps,
  IDeleteRoleProps,
  IFetchRoleProps,
  IUpdateRoleProps,
} from "../types/service"

const {
  getRoles,
  postRole,
  putRole,
  deleteRole,
  getRole,
  getPermissions
} = roleEndpoints
const {composeRequestPath} = getHelpers

export const fetchRoles = async ({
                                   xScreen,
                                 }: IServiceProps): Promise<IRolesOriginalResponseData | null> => {
  if (!xScreen) return null
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id,
  })
  if (!clientConfig) return null
  const requestPath: string = getRoles
  const url: URL = composeRequestPath({requestPath})

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
    xScreen: id,
  })
  if (!clientConfig) return null
  const requestPath: string = getPermissions
  const url: URL = composeRequestPath({requestPath})

  const responsePermissions: IPermission[] = await getRequest<IPermission[]>({
    requestPath: url,
    requestInit: clientConfig,
  })
  if (!responsePermissions) return null
  return responsePermissions
}

export const createRole = async ({
                                   xScreen,
                                   body,
                                 }: ICreateRoleServiceProps): Promise<IRole | null> => {
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id,
  })
  if (!clientConfig) return null
  const requestPath: string = postRole
  const url: URL = composeRequestPath({requestPath})
  try {
    return await postRequest<IRole>({
      requestPath: url,
      body,
      requestInit: clientConfig,
    })

  } catch (e) {
    return null
  }
}

export const fetchRole = async ({
                                  roleId,
                                  xScreen,
                                }: IFetchRoleProps): Promise<null | IRole> => {
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id,
  })
  if (!clientConfig) return null
  const requestPath: string = getRole.replace("{id}", roleId)
  const url: URL = composeRequestPath({requestPath})
  try {
    return await getRequest<IRole>({
      requestPath: url,
      requestInit: clientConfig,
    })
  } catch (e) {
    return null
  }

}

export const updateRole = async ({
                                   roleId,
                                   xScreen,
                                   body,
                                 }: IUpdateRoleProps): Promise<IRole | null> => {
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id,
  })
  if (!clientConfig) return null
  const requestPath: string = putRole.replace("{id}", roleId)
  const url: URL = composeRequestPath({requestPath})
  try {
    return await putRequest<IRole>({
      requestPath: url,
      requestInit: clientConfig,
      body,
    })
  } catch (error) {
    return null
  }
}

export const removeRole = async ({
                                   roleId,
                                   xScreen
                                 }: IDeleteRoleProps): Promise<null | INoContentApiResponse> => {
  const {id} = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id,
  })
  if (!clientConfig) return null
  const requestPath: string = deleteRole.replace("{id}", roleId)
  const url: URL = composeRequestPath({requestPath})
  try {
    return await deleteRequest<INoContentApiResponse>({
      requestPath: url,
      requestInit: clientConfig,
    })
  } catch (e) {
    return null
  }
}
