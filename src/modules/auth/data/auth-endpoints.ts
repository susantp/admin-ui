const projectName = process.env.BACKEND_PROJECT_NAME ?? "poc"

export const authEndpoints = {
  userLogin: `${projectName}/user/login/`,
  userRegister: `${projectName}/user/register/`,
  refreshToken: `${projectName}/refresh-token/`,
  loggedInUser: "logged-in-user/",
  userDetail: "user-detail/",
}
