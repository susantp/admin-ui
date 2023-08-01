"use client"

import React, { ReactElement } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { userScreensAtom } from "@/src/modules/rbac/presentation/atoms/rbac-atoms"
import { useAtomValue } from "jotai"
import {
  CalendarIcon,
  FolderIcon,
  LayoutDashboardIcon,
  UserIcon,
} from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"
import { UserCard } from "@/components/user-card"

export function Sidebar(): ReactElement {
  const pathname = usePathname()

  const screens = useAtomValue(userScreensAtom)

  const navigation = [
    {
      name: "Dashboard",
      href: "/",
      icon: <LayoutDashboardIcon className="w-5 h-5" />,
    },
    {
      name: "User Management",
      href: "/users",
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      name: "Role Management",
      href: "/roles",
      icon: <FolderIcon className="w-5 h-5" />,
    },
    {
      name: "Screen Management",
      href: "/screens",
      icon: <CalendarIcon className="w-5 h-5" />,
    },
  ]

  return (
    <aside className="w-80 bg-accent rounded-md text-accent-foreground">
      <div className="h-full  p-2 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-2.5">
            <Image
              src="/images/yomari_192.png"
              alt="Next.js Logo"
              width={28}
              height={28}
              priority
            />

            <h1 className="text-2xl font-semibold">SOA POC</h1>

            <ModeToggle />
          </div>

          <ul className="flex flex-col space-y-2">
            <h6 className="px-4 text-muted-foreground font-medium uppercase text-sm tracking-widest">
              Main Menu
            </h6>
            {screens.map((screen) => {
              const item =
                navigation.find((x) => x.name === screen.name) ?? navigation[0]

              if (screen.permissions.length === 0) return null

              return (
                <li key={screen.id}>
                  <Link
                    href={item.href}
                    className={`flex gap-4 whitespace-nowrap py-2.5 px-4 rounded-md hover:bg-primary-foreground ${
                      pathname === item.href ? "bg-primary-foreground" : ""
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <UserCard />
      </div>
    </aside>
  )
}
