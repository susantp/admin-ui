"use server"

import {authenticClient} from "@/src/modules/global/domain/utils/get-client";
import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import {roleEndpoints} from "@/src/modules/roles/domain/objects/role-endpoints";
import getHelpers from "@/src/modules/global/domain/utils/helpers";
import {getRequest} from "@/src/modules/global/domain/utils/api-client";
import {IClientParams} from "@/src/modules/global/domain/types/api-client";


export const fetchRoles = async (): Promise<IRoleList[] | null> => {

  const clientConfig: RequestInit | undefined = await authenticClient({
    xScreen: "efc830e6-2030-4057-bd10-6e715ae1352c",
    method: "get"
  } as IClientParams)
  const requestPath: string = roleEndpoints.fetchRoles
  const url: URL = getHelpers.composeRequestPath({requestPath});

  const responseRoles: IRoleList[] | null | undefined = await getRequest<IRoleList[] | null>({
    requestPath: url,
    requestInit: clientConfig
  })
  if (!responseRoles) return null
  return responseRoles
}


