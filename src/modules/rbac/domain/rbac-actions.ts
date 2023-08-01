import { fetchUserScreensService } from "@/src/modules/rbac/data/rbac-service"
import { UserScreen } from "@/src/modules/rbac/domain/types"

export const fetchUserScreensAction = (): Promise<UserScreen[]> =>
  fetchUserScreensService()
