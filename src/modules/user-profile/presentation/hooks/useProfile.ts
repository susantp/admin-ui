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
      .then((response) => {
        if (response.metaData.error.length > 0) {
          toast({
            title: response.metaData.error,
            description: "Password reset failed",
            variant: "destructive",
          })
          return
        }
        toast({
          title: "Password reset successfully",
          variant: "default",
        })
      })
      .catch(() => {
        toast({
          title: "Password reset unsuccessful",
          variant: "destructive",
        })
      })
      .finally(() => setIsLoading(false))
  }
  return { passwordReset, isLoading }
}
