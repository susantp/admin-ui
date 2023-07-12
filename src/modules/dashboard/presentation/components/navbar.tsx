"use client"

import React from "react"
import useTempData from "@/src/modules/dashboard/data/datasources/dashboard-datasource"
import Breadcrumb from "@/src/modules/dashboard/presentation/components/navbar/breadcrumb"
import ProfileDropdown from "@/src/modules/dashboard/presentation/components/navbar/profile-dropdown"
import UserMenu from "@/src/modules/dashboard/presentation/components/navbar/user-menu"
import { sidebarAtom } from "@/src/modules/global/domain/states/global-atoms"
import { Menu } from "@headlessui/react"
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline"
import { useAtom } from "jotai"

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useAtom(sidebarAtom)
  const { userNavigation } = useTempData()
  return (
    <nav className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 md:hidden"
        onClick={(): void => setOpen(!open)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="flex flex-1 justify-between px-4">
        <Breadcrumb />

        <div className="ml-4 flex items-center md:ml-6">
          {/* Profile dropdown */}
          <ProfileDropdown>
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <UserMenu item={item} key={Math.random()} />
              ))}
            </Menu.Items>
          </ProfileDropdown>
        </div>
      </div>
    </nav>
  )
}
