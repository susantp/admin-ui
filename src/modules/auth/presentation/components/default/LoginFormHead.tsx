import React from "react"

import { authConfig } from "@/modules/auth/domain/auth-config"

const LoginFormHead = () => {
  const {
    loginForm: { formTitle, formSubtitle },
  } = authConfig
  return (
    <div className="text-center space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight">{formTitle}</h1>
      <p className="text-sm text-muted-foreground">{formSubtitle}</p>
    </div>
  )
}
export default LoginFormHead
