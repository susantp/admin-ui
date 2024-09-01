import { useState } from "react"
import { useRouter } from "next/navigation"

import { LoginFormValues } from "@/modules/auth/config/form-definitions"
import {
  actionGetLoginProviderLink,
  actionLogin,
  actionLogout,
} from "@/modules/auth/domain/auth-actions"
import { actionDeleteAuthToken } from "@/modules/auth/domain/cookie-service"
import { IDefaultLoginHooks } from "@/modules/auth/presentation/hooks/index"
import { ILogoutParams } from "@/modules/auth/presentation/models/default"

import { toast } from "@/components/ui/use-toast"

export const useAuth = (): IDefaultLoginHooks => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const loginUser = (values: LoginFormValues): void => {
    setIsLoading(true)
    actionLogin(JSON.stringify(values))
      .then(() => {
        toast({
          title: "Sign in success.",
          description: "Signed in successfully.",
        })
        router.replace(process.env.NEXT_REDIRECT_URL ?? "/profile")
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
  const logoutUser = (values: ILogoutParams): void => {
    setIsLoading(true)
    actionLogout(JSON.stringify(values))
      .then((res) => {
        toast({
          title: "Log out successfully.",
          description: res,
        })
        actionDeleteAuthToken()
          .then(() => router.replace("/login"))
          .catch(() => null)
      })
      .catch((e: Error) => {
        toast({
          title: "Sign out failed",
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

  return { isLoading, loginUser, getLoginProviderLink, logoutUser }
}
