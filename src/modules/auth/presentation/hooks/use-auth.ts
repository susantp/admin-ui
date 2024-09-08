import { useState } from "react"
import { useRouter } from "next/navigation"

import {
  ApiResponse,
  ICredentialsLoginPayload,
  IData,
  IMetaData,
  IRedirectPayload,
} from "@/core/data"
import { LoginFormValues } from "@/modules/auth/config/form-definitions"
import {
  actionGetLoginProviderLink,
  actionLogin,
  actionLogout,
} from "@/modules/auth/domain/actions"
import { IUseAuthHooks } from "@/modules/auth/presentation/hooks/index"
import { ILogoutParams } from "@/modules/auth/presentation/models/default"

import { toast } from "@/components/ui/use-toast"

export const useAuth = (): IUseAuthHooks => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const loginUser = (values: LoginFormValues): void => {
    setIsLoading(true)
    actionLogin(JSON.stringify(values))
      .then(
        (response: ApiResponse<IData<ICredentialsLoginPayload>, IMetaData>) => {
          if (response.metaData.error.length > 0) {
            toast({
              title: "Sign in failed",
              variant: "destructive",
              description: response.metaData.error,
            })
            return
          }
          toast({
            title: response.data.message,
            variant: "default",
            description: "Sign in successfully.",
          })
          router.replace(process.env.NEXT_REDIRECT_URL ?? "/dashboard")
        }
      )
      .catch(() => {
        toast({
          title: "Sign in failed",
          variant: "destructive",
          description: "Please contact support",
        })
      })
      .finally(() => setIsLoading(false))
  }
  const logoutUser = (values: ILogoutParams): void => {
    setIsLoading(true)
    actionLogout(JSON.stringify(values))
      .then(() => {
        toast({
          title: "Log out successfully.",
        })
      })
      .catch(() => {})
      .finally(() => setIsLoading(false))
  }
  const getLoginProviderLink = (): void => {
    setIsLoading(true)
    actionGetLoginProviderLink()
      .then((response: ApiResponse<IData<IRedirectPayload>, IMetaData>) => {
        if ("redirectUrl" in response.data.payload) {
          const { redirectUrl } = response.data.payload
          window.open(redirectUrl, "_self")
          return
        }
        toast({
          title: "Sign in failed",
          variant: "destructive",
          description: response.metaData.error,
        })
      })
      .catch(() => {
        toast({
          title: "Sign in failed",
          variant: "destructive",
          description: "please contact support",
        })
      })
      .finally(() => setIsLoading(false))
  }

  return { isLoading, loginUser, getLoginProviderLink, logoutUser }
}
