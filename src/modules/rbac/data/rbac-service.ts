import { getAuthenticatedApiClient } from "@/core/utils/authentic-client"
import { createUrl } from "@/core/utils/helpers"
import { UserScreen } from "@/modules/rbac/domain/types"

export const fetchUserScreensService = async (): Promise<UserScreen[]> => {
  const apiClient = await getAuthenticatedApiClient()

  const response = await apiClient.get(
    createUrl("admin/logged-in-user-screens/")
  )

  return response.data as UserScreen[]
}
