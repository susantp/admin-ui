import React from "react"
import Link from "next/link"
import { PlusIcon } from "@heroicons/react/20/solid"

interface IActionLinkProps {
  path: string
}

export default function ActionLink({ path }: IActionLinkProps): JSX.Element {
  return (
    <Link
      href={path}
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
    >
      <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
      New Role
    </Link>
  )
}
