import { ITokenParams } from "@/auth/domain/types/auth-config"

export const publicClient = (): RequestInit => {
  const requestInit: RequestInit = {}
  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  }
  requestInit.headers = { ...requestHeaders }
  return requestInit
}

export const getClientForUserDetailAndLoggedInUser = ({
  token,
}: ITokenParams): RequestInit => {
  const requestInit: RequestInit = {}
  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }

  requestInit.headers = { ...requestHeaders }
  return requestInit
}
