import React, { ReactElement } from "react"
import { cookies } from "next/headers"

import LoginFormHead from "@/modules/auth/presentation/components/default/LoginFormHead"
import LoginHelperDiv from "@/modules/auth/presentation/components/default/LoginHelperDiv"
import UserLoginForm from "@/modules/auth/presentation/components/default/user-login-form"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const LoginPage = (): ReactElement => {
  const cookieSessionKey: any = "session"
  console.log("get cookie", cookies().get(cookieSessionKey)?.value)
  return (
    <Card className="p-8 space-y-6">
      <CardHeader>
        <LoginFormHead />
      </CardHeader>
      <CardContent>
        <UserLoginForm />
      </CardContent>
      <CardFooter className="flex-col space-y-2.5">
        <LoginHelperDiv />
      </CardFooter>
    </Card>
  )
}
export default LoginPage