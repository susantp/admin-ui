import { IEndPointCollection } from "@/modules/auth/domain/types"

const modulePath = "/api/v1/auth"

export const authEndpoints: IEndPointCollection = {
  socialLoginProvider: {
    github: {
      redirectUrl: `${modulePath}/login/social?provider=github`,
    },
  },
  userLogin: `${modulePath}/login/credentials`,
  userLogout: `${modulePath}/logout`,
  userRegister: `${modulePath}/register/`,
  refreshToken: `${modulePath}/refresh-token/`,
  loggedInUser: "logged-in-user/",
}
