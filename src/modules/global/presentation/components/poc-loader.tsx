import React, { ReactNode } from "react"
import { Loader2 } from "lucide-react"

export default function PocLoader(): ReactNode {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loader2 size={48} color="red" />
    </div>
  )
}
