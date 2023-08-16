export interface LoggedInUserResponse {
  id: string
  username: string
  email: string
  phone: string
  is_superuser: boolean
}

export type UserDetailResponse = {
  first_name: string
  last_name: string
  address1: string
  designation: string
}

export type UserDetailRequest = Partial<UserDetailResponse>

export interface PasswordUpdateRequest {
  old_password: string
  new_password: string
}
