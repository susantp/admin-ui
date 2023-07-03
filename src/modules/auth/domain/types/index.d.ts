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
export interface InterfaceCredentialsOptions {
  id: string,
  name: string,
  type: "credentials",
}
export interface InterfaceInputField  {
  label: string,
  id: string,
  type: string,
  placeHolder: string
}

export interface InterfaceLogo {
  path: string,
  altText: string,
  width: number,
  height: number
}

export interface InterfacePasswordRecovery {
  label: string,
  path: string
}
interface InterfaceAuthForm {
  formTitle: string,
  formSubtitle: string,
  helperLinkLabel: string,
  path: string,
  actionBtn: {
    label: string
  },
}
export interface InterfaceLoginForm extends InterfaceAuthForm{
  emailField: InterfaceInputField,
  passwordField: InterfaceInputField,
}
export interface InterfaceRegisterForm extends InterfaceAuthForm{
  terms:{
    label: string,
    path: string
  },
  privacy: {
    label: string,
    path: string
  },
  privacyTermsText: string
}
export interface ApiClientParams {
  baseUrl?: string
  accessToken?: string
}
export interface ApiResponse<T> {
  message: string
  data: T
  status: number
  error: string
}
