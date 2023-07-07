import React from "react"
import { InterfaceProject } from "@/src/modules/dashboard/domain/types/dashboard-type"
import getHelpers from "@/src/utils/helpers"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"

interface InterfaceInfoBoxProps {
  project: InterfaceProject
}

export default function InfoBox({
  project,
}: InterfaceInfoBoxProps): JSX.Element {
  return (
    <div
      id="info-box"
      key={project.name}
      className="col-span-1 flex rounded-md shadow-sm"
    >
      <div
        className={getHelpers().joinClasses(
          project.bgColor,
          "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
        )}
      >
        {project.initials}
      </div>
      <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
        <div className="flex-1 truncate px-4 py-2 text-sm">
          <a
            href={project.href}
            className="font-medium text-gray-900 hover:text-gray-600"
          >
            {project.name}
          </a>
          <p className="text-gray-500">{project.members} Members</p>
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
