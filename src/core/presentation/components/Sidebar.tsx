import React, { ReactElement } from "react"
import Image from "next/image"
import Link from "next/link"

import { LayoutDashboardIcon } from "lucide-react"

function BrandDiv(): ReactElement {
  return (
    <div className="flex space-x-2 justify-center md:justify-start">
      <Image
        src="/images/yomari_192.png"
        alt="Next.js Logo"
        width={28}
        height={28}
        priority
        className="w-10 p-2 object-contain"
      />

      <h1 className="text-2xl font-medium hidden place-content-center md:block lg:block">
        SOA POC
      </h1>
    </div>
  )
}

function MenuItem({
  label,
  path,
  icon,
}: {
  label: string
  path: string
  icon: ReactElement
}): ReactElement {
  return (
    <Link
      href={path}
      className="flex p-2.5 gap-4 whitespace-nowrap text-primary bg-primary-background rounded-md hover:bg-primary-foreground "
    >
      {icon}
      <span className="hidden md:block lg:block">{label}</span>
    </Link>
  )
}

export function Sidebar(): ReactElement {
  return (
    <aside className="w-16 md:w-64 rounded-md bg-secondary text-secondary-foreground">
      <div className="space-y-6">
        <BrandDiv />
        <div className="flex flex-col">
          <MenuItem label="Dashboard" path="/" icon={<LayoutDashboardIcon />} />
          <MenuItem
            label="Products"
            path="/products"
            icon={<LayoutDashboardIcon />}
          />
          <MenuItem
            label="Orders"
            path="/orders"
            icon={<LayoutDashboardIcon />}
          />
        </div>
      </div>
    </aside>
  )
}
