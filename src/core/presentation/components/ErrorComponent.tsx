import React, { ReactElement } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function ErrorComponent(): ReactElement {
  const errorMessage = "Sometime a simple refresh can solve the issue."

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
        <CardFooter className="flex flex-col justify-center gap-y-2">
          <Button className="text-secondary dark:text-primary-foreground p-6 text-lg hover:bg-accent">
            Call Support
          </Button>
          <Link
            className="text-secondary dark:text-primary-foreground hover:bg-red-600 hover:text-white p-6 text-lg"
            href="/logout"
          >
            Logout
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
