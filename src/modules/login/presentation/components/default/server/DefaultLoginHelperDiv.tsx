import React, { ReactElement } from "react"
import Link from "next/link"

import { authConfig } from "@/modules/login/domain/auth-config"
import DefaultLoginProviders from "@/modules/login/presentation/components/default/client/DefaultLoginProviders"
import defaultUserLoginForm from "@/modules/login/presentation/models/default/defaultUserLoginForm"

export default function DefaultLoginHelperDiv(): ReactElement {
  const { passwordRecovery, registerForm } = authConfig
  const {
    meta: { helperLinkLabel },
  } = defaultUserLoginForm

  return (
    <>
      <DefaultLoginProviders />

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