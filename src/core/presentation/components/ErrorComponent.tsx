import React, { ReactElement } from "react"
import Link from "next/link"

import { ErrorPageProps } from "@/core/presentation/components/index"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function ErrorComponent({
  error,
  reset,
}: ErrorPageProps): ReactElement {
  const errorMessage = "Sometime a simple refresh can solve the issue."
  let actionButton = (
    <Button className="text-secondary dark:text-primary-foreground p-6 text-lg">
      Call Support
    </Button>
  )
  if (error.message === "Unauthorized") {
    actionButton = (
      <Link
        className="text-secondary-dark:text-primary-foreground p-6 text-lg"
        href="/logout"
      >
        Logout
      </Link>
    )
  }
  return (
    <div className="flex h-screen justify-center items-center w-full">
      <Card className="text-center bg-secondary">
        <CardHeader title="Error">
          <h1 className="text-3xl text-red-700">
            Oops, Sorry! Something unusual happened.
          </h1>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-md">{errorMessage}</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="text-secondary dark:text-primary-foreground p-6 text-lg">
            {actionButton}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
