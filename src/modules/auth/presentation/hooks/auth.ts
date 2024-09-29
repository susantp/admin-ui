import { useEffect } from "react"
import { useParams, useRouter } from "next/navigation"

import { AxiosError } from "axios"
import useSWR from "swr"

import axios from "@/core/lib/axios"
import { endpoints } from "@/modules/auth/config/endpoints"

interface IUseAuthProps {
  middleware: string
  redirectIfAuthenticated?: string
}

export const useAuth = ({
  middleware,
  redirectIfAuthenticated,
}: IUseAuthProps) => {
  const router = useRouter()
  const params = useParams()

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    axios
      .get("/api/user")
      .then((res) => res?.data)
      .catch((resError: AxiosError) => {
        if (resError?.status !== 409) throw error

        router.push("/verify-email")
      })
  )

  const csrf = () => axios.get(endpoints.getCsrfCookie)

  const register = async ({ setErrors, ...props }) => {
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

  const login = async ({ setErrors, setStatus, ...props }) => {
    await csrf()
    setErrors([])
    setStatus(null)

    axios
      .post(endpoints.login, props)
      .then(() => mutate())
      .catch((error) => {
        if (error?.response?.metaData.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const forgotPassword = async ({ setErrors, setStatus, email }) => {
    await csrf()

    setErrors([])
    setStatus(null)

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
