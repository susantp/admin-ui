"use client"

import React, { ReactElement } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useAtomValue, useSetAtom } from "jotai"

import {
  currentScreenAtom,
  userScreensAtom,
} from "@/modules/rbac/presentation/atoms/rbac-atoms"

import { navigationItems } from "@/components/layout/navigation-items"

export default function SidebarMobile(): ReactElement {
  const pathname = usePathname()

  const screens = useAtomValue(userScreensAtom)
  const setCurrentScreen = useSetAtom(currentScreenAtom)

  return (
    <aside className="bg-secondary text-secondary-foreground h-full min-w-[320px]">
      <div className="h-full p-4 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex flex-1 space-x-2 place-items-center">
            <Image
              src="/images/yomari_192.png"
              alt="Next.js Logo"
              width={28}
              height={28}
              priority
              className="w-10 p-2 object-contain"
            />

            <h1 className="text-2xl font-medium">SOA POC</h1>
          </div>

          <ul className="space-y-2">
            <h6 className="p-2 text-muted-foreground uppercase tracking-widest text-sm font-medium">
              Main Menu
            </h6>
            {screens.map((screen) => {
              if (screen.permissions.length === 0) return null

              const item =
                navigationItems.find((nav) => nav.name === screen.name) ??
                navigationItems[0]

              return (
                <li key={screen.id}>
                  <Link
                    href={item.slug}
                    onClick={(): void => setCurrentScreen(screen)}
                    className={`flex p-2.5 gap-4 hover:bg-primary-foreground rounded-md place-items-center whitespace-nowrap ${
                      pathname === item.slug &&
                      "bg-primary-foreground text-primary"
                    }`}
                  >
                    {item.icon}
                    {screen.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </aside>
  )
}
