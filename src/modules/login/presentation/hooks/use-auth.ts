import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { LoginFormValues } from "@/modules/login/config/form-config"
import {
  actionGetLoginProviderLink,
  actionLogin,
} from "@/modules/login/domain/auth-actions"
import { IDefaultLoginHooks } from "@/modules/login/presentation/hooks/index"

import { toast } from "@/components/ui/use-toast"

export const useAuth = (): IDefaultLoginHooks => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [isLoading, setIsLoading] = useState(false)

  const loginUser = (values: LoginFormValues): void => {
    setIsLoading(true)
    actionLogin(JSON.stringify(values))
      .then((res) => {
        toast({
          title: "Sign in success.",
          description: "Signed in successfully.",
        })

        alert("success login")
        // router.replace(values.callbackurl ?? "/")
      })
      .catch((e: Error) => {
        toast({
          title: "Sign in failed",
          description: e.message,
          variant: "destructive",
        })
      })
      .finally(() => setIsLoading(false))
  }

  const getLoginProviderLink = (): void => {
    setIsLoading(true)
    actionGetLoginProviderLink()
      .then((redirectUrl) => {
        window.open(redirectUrl, "_self")
      })
      .catch((e: Error) => {
        toast({
          title: "Sign in failed",
          description: e.message,
          variant: "destructive",
        })
      })
      .finally(() => setIsLoading(false))
  }

  return { isLoading, loginUser, getLoginProviderLink }
}
