"use client"

import React, {useState} from "react";
import {classNames} from "@/src/utils/helpers"
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon
} from "@heroicons/react/24/outline";

import {usePathname, useRouter} from 'next/navigation'
export default function SidebarDesktop() {
  const [navigation,] = useState([
    {name: "Dashboard", href: "dashboard", icon: HomeIcon, current: true},
    {name: "User Management", href: "users", icon: UsersIcon, current: false},
    {name: "Role Management", href: "#", icon: FolderIcon, current: false},
    {name: "Page Management", href: "#", icon: CalendarIcon, current: false},
    {name: "Data Access", href: "#", icon: InboxIcon, current: false},
    {name: "Reports", href: "#", icon: ChartBarIcon, current: false},
  ]);
  const pathname = usePathname()
  console.log(pathname)
  return <div
    className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
    {/* Sidebar component, swap this element with another sidebar if you like */}
    <div
      className="flex flex-grow flex-col overflow-y-auto bg-teal-700 pt-5">
      <div className="flex flex-shrink-0 items-center px-4">
        <h3 className="text-white font-bold text-2xl">SOA-POC</h3>
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <nav className="flex-1 space-y-1 px-2 pb-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-teal-800 text-white"
                  : "text-white hover:bg-teal-600",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0 text-white-300"
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </div>
}
