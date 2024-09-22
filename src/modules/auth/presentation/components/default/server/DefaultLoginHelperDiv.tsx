import React, { ReactElement } from "react"
import Link from "next/link"

import providerMap from "@/modules/auth/config/auth-providers"
import { authConfig } from "@/modules/auth/domain/auth-config"
import DefaultLoginProviders from "@/modules/auth/presentation/components/default/client/DefaultLoginProviders"
import defaultUserLoginForm from "@/modules/auth/presentation/models/default/defaultUserLoginForm"

export default function DefaultLoginHelperDiv(): ReactElement {
  const { passwordRecovery, registerForm } = authConfig
  const {
    meta: { helperLinkLabel },
  } = defaultUserLoginForm

  return (
    <>
      {providerMap && <DefaultLoginProviders />}

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
