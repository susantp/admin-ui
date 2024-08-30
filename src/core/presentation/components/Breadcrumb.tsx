"use client"

import React, { ReactElement } from "react"
import { usePathname } from "next/navigation"

import { HomeIcon } from "lucide-react"

export default function Breadcrumb(): ReactElement {
  const pathname = usePathname()
  return (
    <div className="flex place-items-center space-x-1">
      <HomeIcon className="w-4 h-4" />
      {pathname
        .split("/")
        .map(
          (item, i) => i !== 0 && <span key={`path-${i + 1.5}`}>/ {item}</span>
        )}
    </div>
  )
}
