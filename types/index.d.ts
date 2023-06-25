export interface ApiResponse<T> {
  message: string
  data: T
  status: number
  error: string
}

export interface AuthResponse {
  access: string
  refresh: string
}

export interface UserResponse {
  id: string
  email: string
  phone: string
  username: string
}

export interface UserDetailsResponse {
  first_name: string
  last_name: string
  address1: string
}
