"use client"

// Error components must be Client Components
import React, { ReactElement, useEffect } from "react"

import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

interface ErrorPageProps {
  error: Error
  reset: () => void
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps): ReactElement {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error])

  return (
    <div className="grid place-items-center h-screen container">
      <div className="flex flex-col place-items-center space-y-4">
        <h2 className="text-destructive text-2xl">Something went wrong!</h2>
        <p>We are very sorry for the inconvenience.</p>
        <div className="flex gap-2">
          <Button onClick={(): void => reset()} variant="outline">
            Try again
          </Button>
          <Button
            onClick={async (): Promise<void> => signOut()}
            variant="secondary"
          >
            Sign out
          </Button>
        </div>
      </div>
    </div>
  )
}
