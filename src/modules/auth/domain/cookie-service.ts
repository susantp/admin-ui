"use server"

import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies"
import { cookies } from "next/headers"

const tokenKey: string = "token"

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/require-await
export const actionSetAuthToken = async (
  token: string
): Promise<ResponseCookies> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cookieOptions: any = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // One week
    path: "/",
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Promise.resolve(cookies().set(tokenKey, token, cookieOptions))
}

export const actionGetAuthToken = async (): Promise<string | undefined> =>
  Promise.resolve(cookies().get(tokenKey)?.value)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/require-await
export const actionDeleteAuthToken = async () =>
  Promise.resolve(cookies().delete(tokenKey))
