"use client"

import React from "react"
import Link from "next/link"
import UserRegisterForm from "@/auth/presentation/components/user-register-form"
import { RecoilRoot } from "recoil"

export default function RegisterPage(): JSX.Element {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create a account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details below to create your account
          </p>
        </div>
        <RecoilRoot>
          <UserRegisterForm />
        </RecoilRoot>
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
      </div>
    </div>
  )
}
