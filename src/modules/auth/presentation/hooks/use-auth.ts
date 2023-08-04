import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { signIn } from "next-auth/react"

import { registerAction } from "@/modules/auth/domain/auth-actions"
import { authConfig } from "@/modules/auth/domain/auth-config"
import {
  LoginFormValues,
  RegisterFormValues,
} from "@/modules/auth/presentation/components/form-config"
import { toast } from "@/components/ui/use-toast"

export const useAuth = (): {
  isLoading: boolean
  loginUser: (values: LoginFormValues) => void
  registerUser: (values: RegisterFormValues) => void
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
        } else {
          toast({
            title: "Sign in success.",
            description: "Signed in successfully.",
          })
          router.replace(res?.url ?? "/")
        }
      })
      .catch(() => {})
      .finally(() => setIsLoading(false))
  }

  const registerUser = (values: RegisterFormValues): void => {
    setIsLoading(true)
    registerAction({
      username: values.username,
      password: values.password,
      email: values.email,
      phone: values.phone,
    })
      .then(() => {
        signIn(authConfig.credentialId, {
          redirect: false,
          username: values.username,
          password: values.password,
        })
          .then((res) => {
            if (res?.error) {
              router.replace("/login")
              return
            }

            toast({
              title: "Registration success",
              description: "You have been successfully registered.",
            })
            router.replace("/profile")
          })
          .catch(() => {})
          .finally(() => setIsLoading(false))
      })
      .catch((error: Error) => {
        toast({
          title: "Registration failed",
          description: error.message,
          variant: "destructive",
        })
        setIsLoading(false)
      })
  }

  return { isLoading, loginUser, registerUser }
}
