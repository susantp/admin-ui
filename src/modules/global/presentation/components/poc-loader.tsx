import React from "react"
import { Loader2 } from "lucide-react"

export default function PocLoader(): JSX.Element {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader2 size={48} color="red" />
    </div>
  )
}
