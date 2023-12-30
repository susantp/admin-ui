export interface IUpdateEmailResponse {
  email: string
}

export interface IUpdatePhoneResponse {
  phone: string
}

export interface IUpdatePasswordResponse {
  "email": string
  "otp": string
  "new_password": string
}
