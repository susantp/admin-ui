import {
  InterfaceCredentialsOptions,
  InterfaceLoginForm,
  InterfaceLogo,
  InterfacePasswordRecovery,
  InterfaceRegisterForm,
} from "@/auth/domain/types/index"

export interface AuthDictionary {
  pageTitle: string
  credentialConfigOptions: InterfaceCredentialsOptions
  logo: InterfaceLogo
  loginForm: InterfaceLoginForm
  passwordRecovery: InterfacePasswordRecovery
  registerForm: InterfaceRegisterForm
}
