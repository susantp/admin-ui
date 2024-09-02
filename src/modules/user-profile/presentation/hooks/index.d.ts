import { ResetPasswordFormValues } from "@/modules/user-profile/config/password-reset-form-definition"

export interface IUseProfileHooks {
  isLoading: boolean
  passwordReset: (values: ResetPasswordFormValues) => void
}
