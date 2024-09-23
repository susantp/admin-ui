import { LoginFormValues } from "@/modules/auth/config/form-definitions"

export interface IUseAuthHooks {
  isLoading: boolean
  loginUser: (values: LoginFormValues) => void
  logoutUser: () => void

  getLoginProviderLink: () => void
}
