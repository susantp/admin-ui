import React, { ReactElement } from "react"

import defaultLayout from "@/modules/auth/presentation/models/default/defaultLayout"

function DefaultLoginFormHead(): ReactElement {
  const {
    meta: { subtitle },
  } = defaultLayout
  return (
    <div className="text-center space-y-2">
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  )
}

export default DefaultLoginFormHead
