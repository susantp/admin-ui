export interface UserDetail {
  first_name: string
  last_name: string
  address1: string
  designation: string
}

export interface User {
  id: string
  username: string
  email: string
  phone: string
  is_active: boolean
  is_user: boolean
  is_superuser: boolean
  created_at: string
  updated_at: string
  roles: string[]
  detail: UserDetail
}
