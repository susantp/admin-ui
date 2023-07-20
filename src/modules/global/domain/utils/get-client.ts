"use server"

import { authOptions } from "@/auth/domain/config/auth-options"
import { IClientParams } from "@/src/modules/global/domain/types/api-client"
import { getServerSession, Session } from "next-auth"

export const validateSession = async (): Promise<Session | null> => {
  const session: Session | null = await getServerSession(authOptions)
  if (!session) return null
  return session
}
export const authenticClient = async ({
  xScreen,
}: IClientParams): Promise<RequestInit | null> => {
  const session: Session | null = await validateSession()
  if (!session) {
    throw new Error("Unauthenticated")
  }
  const {
    user: { access },
  } = session
  const requestInit: RequestInit = {}
  let requestHeaders: HeadersInit = [["Content-Type", "application/json"]]
  if (access) {
    requestHeaders = {
      ...requestHeaders,
      Authorization: `Bearer ${access}`,
    }
  }
  if (xScreen) {
    requestHeaders = {
      ...requestHeaders,
      "X-SCREEN-ID": `${xScreen}`,
    }
  }
  requestInit.headers = { ...requestHeaders }
  return requestInit
}
export const publicClient = (): RequestInit => {
  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  }
  return { ...requestHeaders }
}
