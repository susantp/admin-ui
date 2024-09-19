import { useState } from "react"
import {
  redirect,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation"

import { ApiResponse, IData, IMetaData, IRedirectPayload } from "@/core/data"
import ErrorCodes from "@/core/data/errorCodes"
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
  const urlParams = useSearchParams()
  const loginUser = (values: LoginFormValues): void => {
    setIsLoading(true)
    actionLogin(values)
      .then(() => {
        toast({
          title: "Success",
          variant: "default",
        })
        router.replace(
          urlParams.get("from") ??
            process.env.NEXT_PUBLIC_REDIRECT_URL ??
            "/dashboard"
        )
      })
      .catch(() => {
        toast({
          title: "Failure",
          variant: "destructive",
          description: ErrorCodes.ERROR_AUTH,
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
