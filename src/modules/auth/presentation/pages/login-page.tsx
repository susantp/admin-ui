import React from "react"
import Link from "next/link"
import UserLoginForm from "@/auth/presentation/components/user-login-form"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function LoginPage(): JSX.Element {
  return (
    <Card className="p-8 space-y-6">
      <CardHeader>
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to sign in to your account
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <UserLoginForm />
      </CardContent>
      <CardFooter className="flex-col space-y-2.5">
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Forgot your password?
          </Link>
        </p>
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
