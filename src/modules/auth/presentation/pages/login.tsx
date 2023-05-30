"use client"

import React from "react"
import Link from "next/link"
import UserLoginForm from "@/src/modules/auth/presentation/components/user-login-form"
import { RecoilRoot } from "recoil"

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
        <RecoilRoot>
          <UserLoginForm />
        </RecoilRoot>
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Register
          </Link>
          {/* <button onClick={() => methodDoesNotExist()}>Break the world</button>; */}
        </p>
      </div>
    </div>
  )
}
