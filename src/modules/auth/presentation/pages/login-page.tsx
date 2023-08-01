import React, { ReactElement } from "react"
import Link from "next/link"
import { authConfig } from "@/auth/domain/config/auth-config"
import UserLoginForm from "@/auth/presentation/components/user-login-form"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function LoginPage(): ReactElement {
  const {
    loginForm: { formTitle, formSubtitle, helperLinkLabel },
    registerForm,
    passwordRecovery,
  } = authConfig
  return (
    <Card className="p-8 space-y-6">
      <CardHeader>
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">{formTitle}</h1>
          <p className="text-sm text-muted-foreground">{formSubtitle}</p>
        </div>
      </CardHeader>
      <CardContent>
        <UserLoginForm />
      </CardContent>
      <CardFooter className="flex-col space-y-2.5">
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href={passwordRecovery.path}
            className="hover:text-brand underline underline-offset-4"
          >
            {passwordRecovery.label}
          </Link>
        </p>
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href={registerForm.path}
            className="hover:text-brand underline underline-offset-4"
          >
            {helperLinkLabel}
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
