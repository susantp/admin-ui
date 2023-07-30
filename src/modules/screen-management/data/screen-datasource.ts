import { screenEndpoints } from "@/screens/data/screen-endpoints"
import { ScreenDatasource } from "@/screens/data/types"
import { Screen } from "@/screens/domain/types"
import { getAuthenticatedApiClient } from "@/src/common/utils/authentic-client"
import { createUrl } from "@/src/common/utils/helpers"

import { DataResponse } from "@/components/data-table/data-response"

export const screenDatasource: ScreenDatasource = {
  async fetchAllScreens(): Promise<DataResponse<Screen>> {
    const apiClient = await getAuthenticatedApiClient()

    const url = createUrl(screenEndpoints.getScreens)

    const response = await apiClient.get(url)

    return {
      total: 4,
      total_page: 1,
      results: response.data as Screen[],
    }
  },
}
