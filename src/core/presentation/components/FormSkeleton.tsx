import React from "react"

import { generateUuidv4 } from "@/core/utils/helpers"

import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function FormSkeleton({
  classes,
}: {
  classes: string
}): React.ReactElement {
  return (
    <Card className={classes}>
      {Array.from({ length: 3 }).map(() => (
        <div className="space-y-2 " key={generateUuidv4()}>
          <Skeleton className="w-1/3 h-4 bg-primary-foreground" />
          <Skeleton className="w-full h-8 bg-primary-foreground" />
        </div>
      ))}
      <Skeleton className="w-1/3 h-8 bg-primary-foreground" />
    </Card>
  )
}
