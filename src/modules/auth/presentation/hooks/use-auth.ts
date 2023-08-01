import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { authConfig } from "@/auth/domain/config/auth-config"
import { LoginFormValues } from "@/auth/presentation/components/form-config"
import { signIn } from "next-auth/react"

import { toast } from "@/components/ui/use-toast"

export const useAuth = (): {
  isLoading: boolean
  loginUser: (values: LoginFormValues) => void
} => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [isLoading, setIsLoading] = useState(false)

  const loginUser = (values: LoginFormValues): void => {
    setIsLoading(true)
    signIn(authConfig.credentialId, {
      redirect: false,
      username: values.username,
      password: values.password,
      callbackUrl: searchParams.get("from") ?? "/",
    })
      .then((res) => {
        if (res?.error) {
          toast({
            title: "Sign in failed",
            description: res.error,
            variant: "destructive",
          })
        }
        toast({
          title: "Success",
          description: "Signed in successfully. Redirecting...",
        })
        router.replace(res?.url ?? "/")
      })
      .catch(() => {})
      .finally(() => setIsLoading(false))
  }

  return { isLoading, loginUser }
}
