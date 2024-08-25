const modulePath = "/api/v1/auth"

export const authEndpoints = {
  socialLoginProvider: {
    github: {
      redirectUrl: `${modulePath}/login/social?provider=github`,
    },
  },
  userLogin: `${modulePath}/login/credentials`,
  userRegister: `${modulePath}/register/`,
  refreshToken: `${modulePath}/refresh-token/`,
  loggedInUser: "logged-in-user/",
  userDetail: "user-detail/",
}