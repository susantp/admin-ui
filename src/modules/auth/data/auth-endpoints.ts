const projectName = process.env.BACKEND_PROJECT_NAME ?? "auth-management"

export const authEndpoints = {
  userLogin: `${projectName}/login/`,
  userRegister: `${projectName}/register/`,
  refreshToken: `${projectName}/refresh-token/`,
  loggedInUser: "logged-in-user/",
  userDetail: "user-detail/",
}
