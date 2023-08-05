"use client"

import React, { ReactElement, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useAtomValue, useSetAtom } from "jotai"
import {
  CalendarIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  FolderIcon,
  LayoutDashboardIcon,
  UserIcon,
} from "lucide-react"

import {
  currentScreenAtom,
  userScreensAtom,
} from "@/modules/rbac/presentation/atoms/rbac-atoms"
import { Button } from "@/components/ui/button"

export function Sidebar(): ReactElement {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const pathname = usePathname()

  const screens = useAtomValue(userScreensAtom)
  const setCurrentScreen = useSetAtom(currentScreenAtom)

  const navigation = [
    {
      name: "Dashboard",
      slug: "/",
      icon: <LayoutDashboardIcon className="w-5 h-5" />,
    },
    {
      name: "User Management",
      slug: "/users",
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      name: "Role Management",
      slug: "/roles",
      icon: <FolderIcon className="w-5 h-5" />,
    },
    {
      name: "Screen Management",
      slug: "/screens",
      icon: <CalendarIcon className="w-5 h-5" />,
    },
  ]

  return (
    <aside
      className={`${
        isCollapsed || "w-80"
      } rounded-md bg-secondary text-secondary-foreground`}
    >
      <div className="h-full p-2 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex flex-1 space-x-2 place-items-center">
            <Image
              src="/images/yomari_192.png"
              alt="Next.js Logo"
              width={28}
              height={28}
              priority
              className="w-10 h-10 object-contain"
            />

            <h1 className="text-2xl font-medium" hidden={isCollapsed}>
              SOA POC
            </h1>
          </div>

          <ul className="space-y-2">
            <h6
              className="p-2 text-muted-foreground uppercase tracking-widest text-sm font-medium"
              hidden={isCollapsed}
            >
              Main Menu
            </h6>
            {screens.map((screen) => {
              if (screen.permissions.length === 0) return null

              const item =
                navigation.find((nav) => nav.name === screen.name) ??
                navigation[0]

              return (
                <li key={screen.id}>
                  <Link
                    href={item.slug}
                    onClick={(): void => setCurrentScreen(screen)}
                    className={`flex p-2.5 gap-4 hover:bg-background/50 rounded-md place-items-center whitespace-nowrap ${
                      pathname === item.slug && "bg-background/50"
                    }`}
                  >
                    {item.icon}
                    {isCollapsed || screen.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <Button
          variant="ghost"
          className="w-10 h-10 px-0 text-center"
          onClick={(): void => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronsRightIcon /> : <ChevronsLeftIcon />}
        </Button>
      </div>
    </aside>
  )
}
