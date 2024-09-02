import { useState } from "react"

import { ResetPasswordFormValues } from "@/modules/user-profile/config/password-reset-form-definition"
import { actionResetPassword } from "@/modules/user-profile/domain/actions"
import { IUseProfileHooks } from "@/modules/user-profile/presentation/hooks/index"

import { toast } from "@/components/ui/use-toast"

export const useProfile = (): IUseProfileHooks => {
  const [isLoading, setIsLoading] = useState(false)
  const passwordReset = (values: ResetPasswordFormValues): void => {
    setIsLoading(true)
    actionResetPassword(JSON.stringify(values))
      .then((message: string) => {
        toast({
          title: "Password reset successfully",
          description: message,
          variant: "default",
        })
      })
      .catch((e: Error) => {
        toast({
          title: "Password reset unsuccessful",
          variant: "destructive",
        })
      })
      .finally(() => setIsLoading(false))
  }
  return { passwordReset, isLoading }
}
