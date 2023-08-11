import { fetchUserScreensService } from "@/modules/rbac/data/rbac-service"
import { UserScreen } from "@/modules/rbac/domain/types"

export const fetchUserScreensAction = (): Promise<UserScreen[]> =>
  fetchUserScreensService()
