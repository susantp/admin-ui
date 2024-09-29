import React, { ReactElement } from "react"
import Link from "next/link"

import { authConfig } from "@/modules/auth/domain/auth-config"
import defaultUserLoginForm from "@/modules/auth/presentation/models/default/defaultUserLoginForm"

export default function DefaultLoginHelperDiv(): ReactElement {
  const { passwordRecovery, registerForm } = authConfig
  const {
    meta: { helperLinkLabel },
  } = defaultUserLoginForm

  return (
    <>
      <p className="px-8 text-center text-sm text-muted-foreground">
        <Link
          href={passwordRecovery.path}
          className="hover:text-brand underline underline-offset-4"
        >
          {passwordRecovery.label}
        </Link>
      </p>

      <p className="px-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?
        <Link
          href={registerForm.path}
          className="hover:text-brand underline underline-offset-4 px-1"
        >
          {helperLinkLabel}
        </Link>
      </p>
    </>
  )
}
