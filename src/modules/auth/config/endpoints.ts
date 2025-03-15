import { IEndPointCollection } from "@/modules/auth/domain/types"





const modulePath = "/api/v1/auth"

export const endpoints: IEndPointCollection = {
  socialLoginProvider: {
    github: {
      redirectUrl: `${modulePath}/login/social?provider=github`,
    },
  },
  refreshToken: `${modulePath}/refresh-token/`,
  loggedInUser: "/api/user",
  authCheck: `${modulePath}/check/`,
  getCsrfCookie: "/sanctum/csrf-cookie",
  login: `${modulePath}/vendor/login`,
  logout: `${modulePath}/vendor/logout`,
}
