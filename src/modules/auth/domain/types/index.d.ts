export interface LoginRequest {
  username: string
  password: string
  redirect: boolean | undefined
  callbackUrl?: string | undefined
}

export interface LoginResponse {
  data: TokenResponse
  status: string | number
}

export interface TokenResponse {
  token: string
}

export interface RegisterRequest {
  id?: string
  username: string
  password: string
  email: string
  phone: string
}

export type RegisterResponse = LoginResponse

export interface RefreshTokenRequest {
  refresh: string
  access: string
}

export interface RefreshTokenResponse {
  access: string
}

export interface IEndPointCollection {
  socialLoginProvider: {
    [key: string]: {
      redirectUrl: string
    }
  }
  userLogin: string
  userLogout: string
  userRegister: string
  refreshToken: string
  loggedInUser: string
}
