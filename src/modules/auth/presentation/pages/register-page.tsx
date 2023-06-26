import React from "react"
import Link from "next/link"
import UserRegisterForm from "@/auth/presentation/components/user-register-form"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function RegisterPage(): JSX.Element {
  return (
    <Card className="p-8 space-y-6">
      <CardHeader>
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create a account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <UserRegisterForm />
      </CardContent>
      <CardFooter className="flex-col space-y-2.5">
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our <br />
          <Link
            href="/terms"
            className="hover:text-brand underline underline-offset-4"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="hover:text-brand underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/login"
            className="hover:text-brand underline underline-offset-4"
          >
            Already have an account? Log In
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
