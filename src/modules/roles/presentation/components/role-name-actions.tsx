"use client"

import Link from "next/link";
import getHelpers from "@/src/modules/global/domain/utils/helpers";
import React from "react";

interface IRoleFormActions {
  isSubmitting: boolean
}

export default function RoleFormActions({isSubmitting}: IRoleFormActions): React.ReactNode {
  return <div
    className="flex flex-shrink-0 justify-end border border-t-gray-200 px-4 py-4 mt-6">
    <Link
      href={getHelpers.appPaths.roles.path}
      type="button"
      className="dangerButtonStyle"
    >
      Cancel
    </Link>
    <input
      value={isSubmitting ? "Please wait..." : "Submit"}
      type="submit"
      className="cursor-pointer ml-4 inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
    />
  </div>
}
