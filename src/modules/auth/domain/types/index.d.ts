export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  access: string
  refresh: string
}

export interface RegisterRequest {
  id?: string
  username: string
  password: string
  email: string
  phone: string
}

export type RegisterResponse = LoginResponse

export interface LoggedInUserResponse {
  id: string
  email: string
  phone: string
  username: string
}

export interface UserDetailResponse {
  first_name: string
  last_name: string
  address1: string
}

export interface RefreshTokenRequest {
  refresh: string
  access: string
}

export interface RefreshTokenResponse {
  access: string
}
