import {authEndpoints} from "@/auth/domain/config/auth-endpoints"
import {InterfaceApiClient} from "@/src/modules/global/domain/types/api-client"
import IGlobalService, {
  IScreen,
} from "@/src/modules/global/domain/types/repository/global-repository"
import getClient from "@/src/modules/global/domain/utils/get-client"
import getHelpers from "@/src/modules/global/domain/utils/helpers"

const globalService: IGlobalService = {
  fetchUserScreens: async (): Promise<IScreen[] | null> => {
    const client: InterfaceApiClient | null = await getClient.authentic({
      requestPath: authEndpoints.userScreens,
      xScreen: null,
    })
    const responseScreens: IScreen[] | null | undefined = await client?.getRequest<
      IScreen[] | null
    >()
    if (!responseScreens || !client) return null
    return getHelpers.mapScreens(responseScreens)
  },
}

export default globalService
