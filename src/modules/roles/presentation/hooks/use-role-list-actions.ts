import getHelpers from "@/src/modules/global/domain/utils/helpers"
import { IRole } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"

interface IUserRoleListAction {
  permittedScreens: string[]
}

export default function UseRoleListActions(role: IRole): IUserRoleListAction {
  const { permissions } = role
  const permittedScreens: string[] =
    getHelpers.getUniqueScreensFromPermissionsResponseData(permissions)

  return { permittedScreens }
}
