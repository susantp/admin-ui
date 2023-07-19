"use server"

import {authEndpoints} from "@/auth/domain/config/auth-endpoints"
import {
  IScreen,
} from "@/src/modules/global/domain/types/repository/global-repository"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import {getRequest} from "@/src/modules/global/domain/utils/api-client";
import {IClientParams} from "@/src/modules/global/domain/types/api-client";
import {authenticClient} from "@/src/modules/global/domain/utils/get-client";

const fetchUserScreens = async (): Promise<IScreen[] | null> => {
  const requestInit: RequestInit | null = await authenticClient({
    xScreen: null,
  } as IClientParams)
  if (!requestInit) return null
  const {userScreens} = authEndpoints
  const requestPath: URL = getHelpers.composeRequestPath({requestPath: userScreens});
  const responseScreens: IScreen[] | null | undefined = await getRequest<
    IScreen[] | null
  >({requestPath, requestInit})
  if (!responseScreens) return null
  return getHelpers.mapScreens(responseScreens)
}


export {fetchUserScreens}
