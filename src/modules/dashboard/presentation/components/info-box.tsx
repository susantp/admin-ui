import React, {ReactNode} from "react"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import { ITopRolesResponseData } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"

interface InterfaceInfoBoxProps {
  role: ITopRolesResponseData
}

export default function InfoBox({ role }: InterfaceInfoBoxProps): ReactNode {
  const { name, members } = role
  const initials: string = (
    name.charAt(0) + name.charAt(name.length - 1)
  ).toUpperCase()
  return (
    <div
      id="info-box"
      key={name}
      className="col-span-1 flex rounded-md shadow-sm"
    >
      <div
        className={getHelpers.joinClasses(
          "bg-green-600",
          "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
        )}
      >
        {initials}
      </div>
      <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
        <div className="flex-1 truncate px-4 py-2 text-sm">
          <p className="font-medium text-gray-900 hover:text-gray-600">
            {name}
          </p>
          <p className="text-gray-500">{members} Members</p>
        </div>
        <div className="flex-shrink-0 pr-2">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <span className="sr-only">Open options</span>
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
