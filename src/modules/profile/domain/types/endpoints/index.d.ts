export interface IProfileEndpoints {
  putEmail: string
  putPhone: string
  postPassword: string
}
export interface IPasswordUpdateBody{
  "email": string,
  "otp": string,
  "new_password": string
}
