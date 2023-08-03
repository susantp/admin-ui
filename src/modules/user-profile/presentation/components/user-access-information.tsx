import React from "react"
import Link from "next/link"

import {
  CalendarIcon,
  FolderIcon,
  LayoutDashboardIcon,
  UserIcon,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"

export default function UserAccessInformation(): React.ReactElement {
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
    <Card>
      <CardHeader>
        <CardDescription>You have access to following screens</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex gap-4 whitespace-nowrap py-2.5 px-4 rounded-md hover:bg-primary-foreground"
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
