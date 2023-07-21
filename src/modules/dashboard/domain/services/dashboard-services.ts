"use server"

import { IClientParams } from "@/src/modules/global/domain/types/api-client"
import { IServiceProps } from "@/src/modules/global/domain/types/repository/global-repository"
import { getRequest } from "@/src/modules/global/domain/utils/api-client"
import { authenticClient } from "@/src/modules/global/domain/utils/get-authentic-client"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import { roleEndpoints } from "@/src/modules/roles/domain/objects/role-endpoints"
import { ITopRolesResponseData } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"

export const fetchTopRoles = async ({
  xScreen,
}: IServiceProps): Promise<ITopRolesResponseData[] | null> => {
  if (!xScreen)
    throw new Error(
      "This request requires a screen ID, which has not been set yet."
    )
  const { id } = xScreen
  const clientConfig: RequestInit | null = await authenticClient({
    xScreen: id,
  } as IClientParams)
  if (!clientConfig) return null
  const requestPath: string = roleEndpoints.fetchTopRoles
  const url: URL = getHelpers.composeRequestPath({ requestPath })

  const responseRoles: ITopRolesResponseData[] | null | undefined =
    await getRequest<ITopRolesResponseData[] | null>({
      requestPath: url,
      requestInit: clientConfig,
    })
  if (!responseRoles) return null
  return responseRoles
}
