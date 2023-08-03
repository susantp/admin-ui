import { getAuthenticatedApiClient } from "@/src/core/utils/authentic-client"
import { createUrl } from "@/src/core/utils/helpers"
import { UserScreen } from "@/src/modules/rbac/domain/types"

export const fetchUserScreensService = async (): Promise<UserScreen[]> => {
  const apiClient = await getAuthenticatedApiClient()

  const response = await apiClient.get(
    createUrl("admin/logged-in-user-screens/")
  )

  return response.data as UserScreen[]
}
