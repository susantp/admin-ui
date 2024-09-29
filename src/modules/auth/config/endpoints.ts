import { IEndPointCollection } from "@/modules/auth/domain/types"

const modulePath = "/api/v1/auth"

export const endpoints: IEndPointCollection = {
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
  authCheck: `${modulePath}/check/`,
  getCsrfCookie: "/sanctum/csrf-cookie",
  login: `${modulePath}/vendor/login/credentials`,
}
