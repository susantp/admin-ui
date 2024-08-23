import { cookies } from "next/headers"
import { NextRequest } from "next/server"

const tokenKey: string = "token"

export const setAuthToken = (token: any) => {
  const cookieOptions: any = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // One week
    path: "/",
  }
  cookies().set(tokenKey, token, cookieOptions)
}
export const getAuthToken = (request?: NextRequest) => {
  return cookies().get(tokenKey)
}
export const deleteAuthToken = () => {
  return cookies().delete(tokenKey)
}
