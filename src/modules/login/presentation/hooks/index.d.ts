import { LoginFormValues } from "@/modules/login/config/form-config"

export interface IDefaultLoginHooks {
  isLoading: boolean
  loginUser: (values: LoginFormValues) => void
  getLoginProviderLink: () => void
}
