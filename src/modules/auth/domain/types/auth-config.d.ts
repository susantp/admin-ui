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

export interface AuthConfig {
  credentialId: string
  pageTitle: string
  logo: InterfaceLogo
  loginForm: InterfaceLoginForm
  passwordRecovery: InterfacePasswordRecovery
  registerForm: InterfaceRegisterForm
}
export interface ITokenParams {
  token: string
}
export interface IDoLoginParams {
  credentials: Record<"username" | "password", string> | undefined
}
