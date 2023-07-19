import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import getHelpers from "@/src/modules/global/domain/utils/helpers";

interface IUserRoleListAction {
  permittedScreens: string[]
}

export default function UseRoleListAction(role: IRoleList): IUserRoleListAction {
  const {permissions} = role
  const permittedScreens: string[] = getHelpers.getUniqueScreensFromPermissions(permissions)

  return {permittedScreens}
}
