import React from "react"
import Link from "next/link"
import { authDictionaryImpl } from "@/auth/domain/config/auth-dictionary"
import UserRegisterForm from "@/auth/presentation/components/user-register-form"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function RegisterPage(): JSX.Element {
  const {
    registerForm: {
      formSubtitle,
      formTitle,
      privacy,
      helperLinkLabel,
      privacyTermsText,
      terms,
    },
    loginForm,
  } = authDictionaryImpl
  return (
    <Card className="p-8 space-y-6">
      <CardHeader>
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">{formTitle}</h1>
          <p className="text-sm text-muted-foreground">{formSubtitle}</p>
        </div>
      </CardHeader>
      <CardContent>
        <UserRegisterForm />
      </CardContent>
      <CardFooter className="flex-col space-y-2.5">
        <p className="px-8 text-center text-sm text-muted-foreground">
          {privacyTermsText} <br />
          <Link
            href={terms.path}
            className="hover:text-brand underline underline-offset-4"
          >
            {terms.label}
          </Link>
          {" and "}
          <Link
            href={privacy.path}
            className="hover:text-brand underline underline-offset-4"
          >
            {privacy.label}
          </Link>
          .
        </p>
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href={loginForm.path}
            className="hover:text-brand underline underline-offset-4"
          >
            {helperLinkLabel}
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
