"use client"

import React, { ReactElement } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/core/utils/helpers"

interface MenuItemProps {
  label: string
  path: string
  icon: React.ReactElement
}

export default function MenuItem({
  label,
  path,
  icon,
}: MenuItemProps): ReactElement {
  const pathname = usePathname()
  return (
    <Link
      href={path}
      className={cn(
        "flex p-2.5 gap-4 whitespace-nowrap text-primary-foreground bg-primary rounded-md ",
        pathname.split("/")[1].includes(path.split("/")[1])
          ? "bg-secondary text-secondary-foreground"
          : ""
      )}
    >
      {icon}
      <span className="hidden md:block lg:block">{label}</span>
    </Link>
  )
}
