import React from "react"
import Link from "next/link"
import UserLoginForm from "@/auth/presentation/components/user-login-form"

export default function LoginPage(): JSX.Element {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to sign in to your account
          </p>
        </div>
        <UserLoginForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Register
          </Link>
        </p>
      </div>
    </div>
  )
}
