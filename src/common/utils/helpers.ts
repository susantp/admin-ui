import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { v4 } from "uuid"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date: Date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const createUrl = (endpoint: string): URL => {
  const baseUrl = process.env.BACKEND_BASE_URL ?? "/api/"
  return new URL(baseUrl + endpoint)
}

export const generateUuidv4 = (): string => v4()
