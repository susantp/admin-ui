import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  CalendarIcon,
  ChevronsLeftRight,
  FolderIcon,
  LayoutDashboardIcon,
  UserIcon,
} from "lucide-react"

import { ModeToggle } from "@/components/mode-toggle"
import { UserCard } from "@/components/user-card"

export function Sidebar(): JSX.Element {
  const pathname = usePathname()

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
    <aside className="relative p-2 w-80 text-accent-foreground">
      <button
        className="absolute top-8 -right-1.5 bg-glass rounded-full p-1 cursor-pointer"
        type="button"
      >
        <ChevronsLeftRight className="w-4 h-4" />
      </button>
      <div className="h-full bg-accent rounded-md p-2 flex flex-col justify-between">
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
            {navigation.map((item) => (
              <li key={item.name}>
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
            ))}
          </ul>
        </div>

        <UserCard />
      </div>
    </aside>
  )
}
