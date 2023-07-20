import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import { HomeIcon } from "@heroicons/react/24/outline"

export default function Breadcrumb(): JSX.Element {
  const pathname = usePathname()
  const paths: string[] = pathname.split("/")
  return (
    <div className="flex flex-1">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-4">
          <li>
            <div>
              <Link
                href={getHelpers.appPaths.home.path}
                className="text-gray-400 hover:text-gray-500"
              >
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </li>
          <li>
            {paths.map((path, index) => {
              if (index === 1) {
                return (
                  <Link
                    key={Math.random()}
                    href={`/${path}`}
                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current
                  >
                    {getHelpers.toTitleCase(path)}
                  </Link>
                )
              }
              return ` / ${path}`
            })}
          </li>
        </ol>
      </nav>
    </div>
  )
}
