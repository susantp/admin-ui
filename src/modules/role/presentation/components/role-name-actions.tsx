"use client"

import React from "react"
import Link from "next/link"
import getHelpers from "@/src/modules/global/domain/utils/helpers"

interface IRoleFormActions {
  isSubmitting: boolean
  slug: string | null
}

export default function RoleFormActions({
  isSubmitting,
  slug,
}: IRoleFormActions): React.ReactNode {
  let submitValue: string = slug ? "Update" : "Submit"
  submitValue = isSubmitting ? "Please wait..." : submitValue
  return (
    <div className="flex flex-shrink-0 justify-end border border-t-gray-200 px-4 py-4 mt-6">
      <Link
        href={getHelpers.appPaths.roles.path}
        type="button"
        className="dangerButtonStyle"
      >
        Cancel
      </Link>
      <input
        value={submitValue}
        type="submit"
        className="cursor-pointer ml-4 inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      />
    </div>
  )
}
