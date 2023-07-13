import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HomeIcon } from "@heroicons/react/24/outline"

export default function Breadcrumb(): JSX.Element {
  const pathname = usePathname()
  const label = pathname.charAt(1).toUpperCase() + pathname.substring(2)
  return (
    <div className="flex flex-1">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-4">
          <li>
            <div>
              <Link
                href="/dashboard-container"
                className="text-gray-400 hover:text-gray-500"
              >
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </li>
          <li key="dashboard">
            <div className="flex items-center w-max">
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            </div>
          </li>
          <li>
            <Link
              href={pathname}
              className="text-sm font-medium text-gray-500 hover:text-gray-700"
              aria-current
            >
              {label}
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  )
}
