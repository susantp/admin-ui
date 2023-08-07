import React, { ReactElement } from "react"

import { Loader2Icon } from "lucide-react"

export default function Loading(): ReactElement {
  return (
    <div className="grid h-full place-items-center justify-items-center">
      <Loader2Icon className="animate-spin" />
    </div>
  )
}
