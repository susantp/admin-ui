import { LoginFormValues } from "@/modules/auth/config/form-definitions"
import { IUser } from "@/modules/user-profile/presentation/models/default"

export interface IUseAuthHooks {
  isLoading: boolean
  loginUser: (values: LoginFormValues) => void
  logoutUser: () => void

  getLoginProviderLink: () => void
}

export interface IUseAuth {
  user: IUser | undefined
  register: () => Promise<void>
  login: ({ email, password, setErrors, setStatus }: IProps) => void
  forgotPassword: () => void
  resetPassword: () => void
  resendEmailVerification: () => void
  logout: () => void
}
