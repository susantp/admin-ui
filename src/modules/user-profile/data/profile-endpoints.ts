const projectName = process.env.BACKEND_PROJECT_NAME

export const profileEndpoints = {
  getLoggedInUser: "logged-in-user/",
  postChangeEmail: "change-email/",
  postChangePhone: "change-phone/",
  postChangePassword: `${projectName}/change-password/`,
  getUserDetail: `user-detail/`,
  postUserDetail: `user-detail/`,
  putUserDetail: `user-detail/`,
}
