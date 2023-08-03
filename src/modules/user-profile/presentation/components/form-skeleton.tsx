import React from "react"

import { generateUuidv4 } from "@/src/common/utils/helpers"

import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function FormSkeleton(): React.ReactElement {
  return (
    <Card className="p-4 space-y-6">
      {Array.from({ length: 3 }).map(() => (
        <div className="space-y-2" key={generateUuidv4()}>
          <Skeleton className="w-1/3 h-4" />
          <Skeleton className="w-full h-8" />
        </div>
      ))}
      <Skeleton className="w-1/3 h-8" />
    </Card>
  )
}
