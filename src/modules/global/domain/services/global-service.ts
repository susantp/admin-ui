"use server"

import {authEndpoints} from "@/auth/domain/config/auth-endpoints"
import {
  IScreen,
} from "@/src/modules/global/domain/types/repository/global-repository"
import {authenticClient} from "@/src/modules/global/domain/utils/get-client"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import {getRequest} from "@/src/modules/global/domain/utils/api-client";
import {IClientParams} from "@/src/modules/global/domain/types/api-client";
import {useAtomValue} from "jotai";
import {
  currentScreenAtom
} from "@/src/modules/global/presentation/state/global-states";

const fetchUserScreens = async (): Promise<IScreen[] | null> => {
  const requestInit: RequestInit | undefined = await authenticClient({
    xScreen: null,
    method: "GET",
  } as IClientParams)
  const requestPath: string = authEndpoints.userScreens
  const url: URL = getHelpers.composeRequestPath({requestPath});
  const responseScreens: IScreen[] | null | undefined = await getRequest<
    IScreen[] | null
  >({requestPath: url, requestInit})
  if (!responseScreens) return null
  return getHelpers.mapScreens(responseScreens)
}



export {fetchUserScreens}
