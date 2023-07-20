import React from "react"
import Link from "next/link"
import { PlusIcon } from "@heroicons/react/20/solid"

interface IActionLinkProps {
  path: string
}

export default function ActionLink({ path }: IActionLinkProps): JSX.Element {
  return (
    <Link href={path} className="primaryButtonStyle">
      <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
      New Role
    </Link>
  )
}
