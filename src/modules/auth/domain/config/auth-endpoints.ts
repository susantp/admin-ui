import getHelpers from "@/src/modules/global/domain/utils/helpers"
import { AuthEndpoints } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"

const projectName = getHelpers.getBackendProjectName()

export const authEndpoints: AuthEndpoints = {
  userLogin: `${projectName}/user/login/`,
  userRegister: `${projectName}/user/login/`,
  refreshToken: `${projectName}/refresh-token/`,
  loggedInUser: "logged-in-user/",
  userDetail: "user-detail/",
  userScreens: "admin/logged-in-user-screens/",
}
