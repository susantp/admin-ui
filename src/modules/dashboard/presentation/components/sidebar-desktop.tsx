"use client"

import React from "react"
import {usePathname} from "next/navigation"
import useTempData
  from "@/src/modules/dashboard/data/datasources/dashboard-datasource"
import getHelpers from "@/src/utils/helpers"
import {useAtomValue} from "jotai";
import {userScreensAtom} from "@/src/modules/global/domain/states/global-atoms";
import {IUserScreens} from "@/src/modules/global/domain/types/global-type";

export default function SidebarDesktop(): JSX.Element {
  const {navigation} = useTempData()
  const screens: IUserScreens | null = useAtomValue(userScreensAtom)
  const pathname = usePathname()
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex flex-grow flex-col overflow-y-auto bg-teal-700 pt-5">
        <div className="flex flex-shrink-0 items-center px-4">
          <h3 className="text-white font-bold text-2xl">SOA-POC</h3>
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {navigation.map(item => (
              <a
                key={item.name}
                href={`/${item.href}`}
                className={getHelpers().joinClasses(
                  pathname.includes(item.href)
                    ? "bg-teal-800 text-white"
                    : "text-white hover:bg-teal-600",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <item.icon
                  className="mr-3 h-6 w-6 flex-shrink-0 text-white-300"
                  aria-hidden="true"
                />
                {item.name} d
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
