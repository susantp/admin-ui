import React, { ReactElement } from "react"

import { Card, CardHeader } from "@/components/ui/card"

export default function NoFeatureAvailable({
  classes,
}: {
  classes: string
}): ReactElement {
  return (
    <Card className={classes}>
      <CardHeader className="space-y-6 text-center">
        <h1 className="text-3xl">This feature is unavailable for you.</h1>
        <p className="text-md">for more information contact support.</p>
      </CardHeader>
    </Card>
  )
}
