import React from "react"
import { InterfaceNavigation } from "@/src/modules/dashboard/domain/types/dashboard-data"
import getHelpers from "@/src/utils/helpers"

interface InterfaceNavAnchorProps {
  item: InterfaceNavigation
}
export default function NavAnchor({
  item,
}: InterfaceNavAnchorProps): JSX.Element {
  return (
    <a
      key={item.name}
      href={item.href}
      className={getHelpers().joinClasses(
        item.current
          ? "bg-teal-800 text-white"
          : "text-teal-100 hover:bg-teal-600",
        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
      )}
    >
      <item.icon
        className="mr-4 h-6 w-6 flex-shrink-0 text-teal-300"
        aria-hidden="true"
      />
      {item.name}
    </a>
  )
}
