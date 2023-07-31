interface LoggedInUserResponse {
  id: string
  username: string
  email: string
  phone: string
}

type UserDetailResponse = {
  first_name: string
  last_name: string
  address1: string
  designation: string
}

type UserDetailRequest = Partial<UserDetailResponse>
