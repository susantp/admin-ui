import { LoginFormValues } from "@/modules/auth/config/form-config"

export interface IDefaultLoginHooks {
  isLoading: boolean
  loginUser: (values: LoginFormValues) => void
  logoutUser: (values: { revokeAll: boolean }) => void

  getLoginProviderLink: () => void
}
