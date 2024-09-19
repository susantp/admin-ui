import React, { ReactElement, Suspense } from "react"

import DefaultUserLoginForm from "@/modules/auth/presentation/components/default/client/DefaultUserLoginForm"
import DefaultLoginFormHead from "@/modules/auth/presentation/components/default/server/DefaultLoginFormHead"
import DefaultLoginHelperDiv from "@/modules/auth/presentation/components/default/server/DefaultLoginHelperDiv"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

function DefaultLoginPage(): ReactElement {
  return (
    <Suspense>
      <Card className="p-8 space-y-6">
        <CardHeader>
          <DefaultLoginFormHead />
        </CardHeader>
        <CardContent>
          <DefaultUserLoginForm />
        </CardContent>
        <CardFooter className="flex-col space-y-2.5">
          <DefaultLoginHelperDiv />
        </CardFooter>
      </Card>
    </Suspense>
  )
}

export default DefaultLoginPage
