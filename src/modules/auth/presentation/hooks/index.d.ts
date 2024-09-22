import { LoginFormValues } from "@/modules/auth/config/form-definitions"
import { ILogoutParams } from "@/modules/auth/presentation/models/default"

export interface IUseAuthHooks {
  isLoading: boolean
  loginUser: (values: LoginFormValues) => void
  logoutUser: (values: ILogoutParams) => void

  getLoginProviderLink: () => void
}
