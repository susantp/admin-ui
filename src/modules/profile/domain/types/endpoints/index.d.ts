export interface IProfileEndpoints {
  putEmail: string
  putPhone: string
  postPassword: string
  getUserDetail: string
}

export interface IPasswordUpdateBody {
  "email": string,
  "otp": string,
  "new_password": string
}

export interface IUserDetailResponse {
  "first_name": string
  "last_name": string
  "address1": string
  "designation": string
}

export interface IUserDetailResponseCamelCase{
  firstName: string
  lastName: string
  address1: string
  designation: string
}
