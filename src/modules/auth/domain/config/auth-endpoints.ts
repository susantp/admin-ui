import getHelpers from "@/src/modules/global/domain/utils/helpers";

const projectName = getHelpers.getBackendProjectName()

interface AuthEndpoints {
  userLogin: string
  userRegister: string
  refreshToken: string
  loggedInUser: string
  userDetail: string
  userScreens: string
}

export const authEndpoints: AuthEndpoints = {
  userLogin: `${projectName}/user/login/`,
  userRegister: `${projectName}/user/login/`,
  refreshToken: `${projectName}/refresh-token/`,
  loggedInUser: "logged-in-user/",
  userDetail: "user-detail/",
  userScreens: "admin/logged-in-user-screens/",
}
