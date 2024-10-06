import { Dispatch, SetStateAction, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"

import { AxiosError, AxiosResponse } from "axios"
import useSWR from "swr"

import axios from "@/core/lib/axios"
import { endpoints } from "@/modules/auth/config/endpoints"
import { IUseAuth } from "@/modules/auth/presentation/hooks/index"
import { IUser } from "@/modules/user-profile/presentation/models/default"

interface IUseAuthProps {
  middleware: string
  redirectIfAuthenticated?: string
}

interface IProps {
  email?: string
  password?: string
  password_confirmation?: string
  name?: string
  setErrors: Dispatch<SetStateAction<never[]>>
  setStatus: Dispatch<SetStateAction<boolean>>
}

export const useAuth = ({
  middleware,
  redirectIfAuthenticated,
}: IUseAuthProps): IUseAuth => {
  const router = useRouter()
  const params = useParams()

  const {
    data: user,
    error,
    mutate,
  } = useSWR<IUser, Error>("/api/user", () =>
    axios
      .get("/api/user")
      .then((res) => res?.data)
      .catch((resError: AxiosError) => {
        if (resError?.status !== 409) throw error

        router.push("/verify-email")
      })
  )

  const csrf = (): Promise<AxiosResponse> => axios.get(endpoints.getCsrfCookie)

  const register = async ({ setErrors, ...props }: IProps): Promise<void> => {
    await csrf()

    setErrors([])

    axios
      .post("/register", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const login = async ({
    setErrors,
    setStatus,
    ...props
  }: IProps): Promise<void> => {
    await csrf()
    setErrors([])
    setStatus(false)

    axios
      .post(endpoints.login, props)
      .then(() => mutate())
      .catch((error) => {
        if (error?.response?.metaData.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const forgotPassword = async ({ setErrors, setStatus, email }: IProps) => {
    await csrf()

    setErrors([])
    setStatus(false)

    axios
      .post("/forgot-password", { email })
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post("/reset-password", { token: params.token, ...props })
      .then((response) =>
        router.push(`/login?reset=${btoa(response.data.status)}`)
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const resendEmailVerification = ({ setStatus }) => {
    axios
      .post("/email/verification-notification")
      .then((response) => setStatus(response.data.status))
  }

  const logout = async () => {
    if (!error) {
      await axios.post("/logout").then(() => mutate())
    }

    window.location.pathname = "/login"
  }

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated)
    if (window.location.pathname === "/verify-email" && user?.email_verified_at)
      router.push(redirectIfAuthenticated)
    if (middleware === "auth" && error) logout()
  }, [user, error])

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  }
}
