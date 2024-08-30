import React from "react"

import {
  CalendarIcon,
  FolderIcon,
  LayoutDashboardIcon,
  UserIcon,
} from "lucide-react"

export const navigationItems = [
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
