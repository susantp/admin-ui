import React, { ReactElement } from "react"
import Image from "next/image"

import {
  LayoutDashboardIcon,
  ListOrderedIcon,
  ShirtIcon,
  User2Icon,
} from "lucide-react"

import MenuItem from "@/core/presentation/components/MenuItem"

import { Separator } from "@/components/ui/separator"

interface BrandDivProps {
  label: string
}

function BrandDiv({ label }: BrandDivProps): ReactElement {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center space-x-2">
        <Image
          src="/images/yomari_192.png"
          alt="Next.js Logo"
          width={28}
          height={28}
          priority
          className="w-10 p-2 object-contain"
        />

        <div className="gap-y-1 hidden place-content-center md:flex lg:flex md:flex-col lg:flex-col">
          <h1 className="text-2xl font-medium ">{label}</h1>
          <span className="text-accent-foreground text-xs">
            shop.larashops.com
          </span>
        </div>
      </div>
    </div>
  )
}

export function Sidebar(): ReactElement {
  return (
    <div className="space-y-6 py-3">
      <BrandDiv label="Gravity Shop" />
      <Separator />
      <div className="flex flex-col gap-4">
        <MenuItem
          label="Dashboard"
          path="/dashboard"
          icon={<LayoutDashboardIcon />}
        />
        <MenuItem label="Products" path="/products" icon={<ShirtIcon />} />
        <MenuItem label="Orders" path="/orders" icon={<ListOrderedIcon />} />
        <MenuItem label="Profile" path="/profile" icon={<User2Icon />} />
      </div>
    </div>
  )
}
