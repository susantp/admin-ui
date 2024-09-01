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
    process.env.BACKEND_BASE_URL ?? "http://local-ne.techbizz.local"
  return new URL(baseUrl + path)
}

export const generateUuidv4 = (): string => v4()

export const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase().concat(str.slice(1))
