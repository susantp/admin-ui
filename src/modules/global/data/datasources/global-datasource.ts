import {authEndpoints} from "@/auth/domain/config/auth-endpoints"
import IGlobalRepository, {
  IFetchUserScreensParams,
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository";
import apiClient from "@/src/modules/global/domain/utils/api-client";
import getHelpers from "@/src/modules/global/domain/utils/helpers";


const globalDatasource = ({accessToken}: IFetchUserScreensParams): IGlobalRepository => {

  const fetchUserScreens = async (): Promise<IScreen[] | null> => {
    "use server"

    if (!accessToken) return null
    const responseScreens: IScreen[] | null = await apiClient({
      token: accessToken,
      requestPath: authEndpoints.userScreens,
    }).get<IScreen[] | null>()
    if(!responseScreens) return null
    return getHelpers().mapScreens(responseScreens)
  }
  return {
    fetchUserScreens
  }
}

export default globalDatasource
