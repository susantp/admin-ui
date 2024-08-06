import React from "react"
import Link from "next/link"

import { GithubIcon } from "lucide-react"

import { authConfig } from "@/modules/auth/domain/auth-config"

import { Button } from "@/components/ui/button"

const LoginHelperDiv = () => {
  const {
    passwordRecovery,
    registerForm,
    loginForm: { helperLinkLabel },
  } = authConfig
  return (
    <>
      <Button>
        <GithubIcon size="24" />
        <p className="px-3">Login with Github</p>
      </Button>

      <p className="px-8 text-center text-sm text-muted-foreground">
        <Link
          href={passwordRecovery.path}
          className="hover:text-brand underline underline-offset-4"
        >
          {passwordRecovery.label}
        </Link>
      </p>

      <p className="px-8 text-center text-sm text-muted-foreground">
        Don't have an account?
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
export default LoginHelperDiv
