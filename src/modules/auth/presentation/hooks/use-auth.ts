import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { signIn } from "next-auth/react"

import { actionLogin, actionRegister } from "@/modules/auth/domain/auth-actions"
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
    actionLogin(JSON.stringify(values))
      .then((res) => {
        toast({
          title: "Sign in success.",
          description: "Signed in successfully.",
        })

        alert("success login")
        // router.replace(values.callbackurl ?? "/")
      })
      .catch((e) => {
        toast({
          title: "Sign in failed",
          description: e.message,
          variant: "destructive",
        })
      })
      .finally(() => setIsLoading(false))
  }

  const registerUser = (values: RegisterFormValues): void => {
    setIsLoading(true)
    actionRegister({
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
            router.replace("/")
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
