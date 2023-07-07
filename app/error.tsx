"use client"

// Error components must be Client Components
import React, { useEffect } from "react"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}): JSX.Element {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error])

  return (
    <div className="grid place-items-center h-screen container">
      <div className="flex flex-col place-items-center">
        <h2 className="text-destructive text-2xl mb-5">
          Something went wrong!
        </h2>
        <p className="text-destructive">{error.name}</p>
        <p className="mb-2.5">{error.message}</p>
        <p className="text-gray-400">Stack Trace:</p>
        <p className="text-sm">{error.stack}</p>
        <Button onClick={(): void => reset()} variant="outline">
          Try again
        </Button>
      </div>
    </div>
  )
}
