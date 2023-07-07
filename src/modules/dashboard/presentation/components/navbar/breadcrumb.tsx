import React from "react"
import { InterfacePage } from "@/src/modules/dashboard/domain/types/dashboard-data"

interface InterfaceBreadcrumbProps {
  page: InterfacePage
}

export default function Breadcrumb({
  page,
}: InterfaceBreadcrumbProps): JSX.Element {
  return (
    <li key={page.name}>
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

        <a
          href={page.href}
          className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
          aria-current={page.current ? "page" : undefined}
        >
          {page.name}
        </a>
      </div>
    </li>
  )
}
