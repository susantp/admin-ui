import { getAuthenticatedApiClient } from "@/core/utils/authentic-client"
import { createUrl } from "@/core/utils/helpers"
import { screenEndpoints } from "@/modules/screen-management/data/screen-endpoints"
import { Screen } from "@/modules/screen-management/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

export const fetchAllScreensService = async (
  screenId: string
): Promise<DataResponse<Screen>> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": screenId,
  })

  const url = createUrl(screenEndpoints.getScreens)

  const response = await apiClient.get(url)

  if (response.status !== 200) throw Error("Something went wrong!")

  const screens = response.data as Screen[]

  return {
    total: screens.length,
    total_page: 1,
    results: screens,
  }
}

export const postScreenService = async (
  screenId: string,
  data: Partial<Screen>
): Promise<void> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": screenId,
  })

  const response = await apiClient.post(
    createUrl(screenEndpoints.postScreen),
    data
  )

  if (response.status !== 200) throw Error("Something went wrong!")
}

export const putScreenService = async (
  xScreenId: string,
  screenId: string,
  data: Partial<Screen>
): Promise<void> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": xScreenId,
  })

  const response = await apiClient.put(
    createUrl(screenEndpoints.putScreen(screenId)),
    data
  )

  if (response.status !== 200) throw Error("Something went wrong!")
}

export const deleteScreenService = async (
  xScreenId: string,
  screenId: string
): Promise<void> => {
  const apiClient = await getAuthenticatedApiClient({
    "x-screen-id": xScreenId,
  })

  const response = await apiClient.remove(
    createUrl(screenEndpoints.deleteScreen(screenId))
  )

  if (response.status !== 200) throw Error("Something went wrong!")
}