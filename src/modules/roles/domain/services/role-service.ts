"use server"

import { IClientParams } from "@/src/modules/global/domain/types/api-client"
import { getRequest } from "@/src/modules/global/domain/utils/api-client"
import { authenticClient } from "@/src/modules/global/domain/utils/get-client"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import { roleEndpoints } from "@/src/modules/roles/domain/objects/role-endpoints"
import { IFetchRolesOriginalData } from "@/src/modules/roles/domain/types/repository"

export const fetchRoles = async (): Promise<IFetchRolesOriginalData | null> => {
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: "efc830e6-2030-4057-bd10-6e715ae1352c",
  } as IClientParams)
  if (!clientConfig) return null
  const requestPath: string = roleEndpoints.fetchRoles
  const url: URL = getHelpers.composeRequestPath({ requestPath })

  const responseRoles: IFetchRolesOriginalData | null | undefined =
    await getRequest<IFetchRolesOriginalData | null>({
      requestPath: url,
      requestInit: clientConfig,
    })
  if (!responseRoles) return null
  return responseRoles
}
