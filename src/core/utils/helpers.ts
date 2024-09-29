import { v4 } from "uuid"

export function formatDate(input: string | number): string {
  const date: Date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const createUrl = (path: string): URL => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://local-ne.techbizz.local"
  return new URL(baseUrl + path)
}

export const generateUuidv4 = (): string => v4()

export const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase().concat(str.slice(1))

export const tokenKey: string = "token"
export const appHeaders = {
  _token: "",
  setToken: (newToken: string): void => {
    if (newToken && newToken.length > 0) {
      // eslint-disable-next-line no-underscore-dangle
      appHeaders._token = newToken
    }
  },
  all: (): Headers => {
    const headers = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    })
    // eslint-disable-next-line no-underscore-dangle
    if (appHeaders._token.length > 0) {
      // eslint-disable-next-line no-underscore-dangle
      headers.set("Authorization", `Bearer ${appHeaders._token}`)
    }

    return headers
  },
}
export default appHeaders
