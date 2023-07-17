"use server"

import {authOptions} from "@/auth/domain/config/auth-options"
import {IClientParams,} from "@/src/modules/global/domain/types/api-client"
import {getServerSession, Session} from "next-auth"

export const validateSession = async (): Promise<Session | null> => {

  const session: Session | null = await getServerSession(authOptions)
  if (!session) return null
  return session
}

export const authenticClient = async ({
                                        xScreen, body, method
                                      }: IClientParams): Promise<RequestInit | undefined> => {
  const session: Session | null = await validateSession()
  if (!session) return undefined
  const {
    user: {access},
  } = session
  let requestInit: RequestInit = {method}
  let requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  }
  if (access) {
    requestHeaders = {
      ...requestHeaders,
      "Authorization": `Bearer ${access}`,
    }
  }
  if (xScreen) {
    requestHeaders = {
      ...requestHeaders,
      "X-SCREEN-ID": `${xScreen}`,
    }
  }
  if (body) {
    requestInit = {...requestInit, body}
  }
  requestInit.headers = {...requestHeaders}
  return requestInit
}
export const publicClient = (): RequestInit => {
  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  }
  return {...requestHeaders}
}
