import React, { ReactElement } from "react"

import defaultLayout from "@/modules/auth/presentation/models/default/defaultLayout"

function DefaultLoginFormHead(): ReactElement {
  const {
    meta: { title, subtitle },
  } = defaultLayout
  return (
    <div className="text-center space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  )
}

export default DefaultLoginFormHead
