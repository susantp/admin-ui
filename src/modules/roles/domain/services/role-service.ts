"use server"

import {authenticClient} from "@/src/modules/global/domain/utils/get-client";
import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import {roleEndpoints} from "@/src/modules/roles/domain/objects/role-endpoints";
import getHelpers from "@/src/modules/global/domain/utils/helpers";
import {getRequest} from "@/src/modules/global/domain/utils/api-client";
import {IClientParams} from "@/src/modules/global/domain/types/api-client";



export interface IFetchRolesData{
  total: string
  totalPage: string
  results: IRoleList[]
}
export const fetchRoles = async (): Promise<IFetchRolesData | null> => {

  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: "efc830e6-2030-4057-bd10-6e715ae1352c"
  } as IClientParams)
  if(!clientConfig) return null
  const requestPath: string = roleEndpoints.fetchRoles
  const url: URL = getHelpers.composeRequestPath({requestPath});

  const responseRoles: IFetchRolesData | null | undefined = await getRequest<IFetchRolesData | null>({
    requestPath: url,
    requestInit: clientConfig
  })
  if (!responseRoles) return null
  return responseRoles
}


