import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChartIcon,
  CalendarIcon,
  ChevronsLeftRight,
  FolderIcon,
  LayoutDashboardIcon,
  UserIcon,
} from "lucide-react"

import { UserCard } from "@/components/user-card"

export function Sidebar() {
  const pathname = usePathname()

  const navigation = [
    { name: "Dashboard", href: "/", icon: <LayoutDashboardIcon /> },
    { name: "User Management", href: "/users", icon: <UserIcon /> },
    { name: "Role Management", href: "/roles", icon: <FolderIcon /> },
    { name: "Page Management", href: "/pages", icon: <CalendarIcon /> },
    { name: "Reports", href: "/reports", icon: <BarChartIcon /> },
  ]

  return (
    <aside className="relative p-2 w-96">
      <button
        className="absolute top-8 -right-1.5 bg-glass rounded-full p-1 cursor-pointer"
        type="button"
      >
        <ChevronsLeftRight className="w-4 h-4" />
      </button>
      <div className="h-full bg-primary rounded-md p-2 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-2.5">
            <Image
              src="/images/yomari_192.png"
              alt="Next.js Logo"
              width={28}
              height={28}
              priority
            />

            <h3 className="text-2xl font-semibold">SOA POC</h3>
          </div>

          <ul className="flex flex-col space-y-2">
            {" "}
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex gap-4 whitespace-nowrap p-2.5 rounded-md ${
                    pathname === item.href ? "bg-glass" : ""
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
