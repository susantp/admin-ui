"use client"

import React, { ReactElement } from "react"

import { ErrorPageProps } from "@/core/presentation/components"
import ErrorComponent from "@/core/presentation/components/ErrorComponent"

export function ErrorPage({ error, reset }: ErrorPageProps): ReactElement {
  return <ErrorComponent error={error} reset={reset} />
}

export default ErrorPage
