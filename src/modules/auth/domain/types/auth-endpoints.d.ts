export interface UserLoginRequest {
  username: string
  password: string
}

export interface UserLoginResponse {
  access: string
  refresh: string
}

export interface UserRegisterRequest {
  id?: string
  username: string
  password: string
  email: string
  phone: string
}

export type UserRegisterResponse = UserLoginResponse

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

export interface InterfaceInputField {
  label: string
  id: string
  type: string
  placeHolder: string
}

export interface InterfaceLogo {
  path: string
  altText: string
  width: number
  height: number
}

export interface InterfacePasswordRecovery {
  label: string
  path: string
}

interface InterfaceAuthForm {
  formTitle: string
  formSubtitle: string
  helperLinkLabel: string
  path: string
  actionBtn: {
    label: string
  }
}

export interface InterfaceLoginForm extends InterfaceAuthForm {
  emailField: InterfaceInputField
  passwordField: InterfaceInputField
}

export interface InterfaceRegisterForm extends InterfaceAuthForm {
  terms: {
    label: string
    path: string
  }
  privacy: {
    label: string
    path: string
  }
  privacyTermsText: string
}
