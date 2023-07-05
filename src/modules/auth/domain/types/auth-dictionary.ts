import {
  InterfaceLoginForm,
  InterfaceLogo,
  InterfacePasswordRecovery,
  InterfaceRegisterForm,
} from "@/auth/domain/types/auth-endpoints"

export interface AuthDictionary {
  pageTitle: string
  logo: InterfaceLogo
  loginForm: InterfaceLoginForm
  passwordRecovery: InterfacePasswordRecovery
  registerForm: InterfaceRegisterForm
}
