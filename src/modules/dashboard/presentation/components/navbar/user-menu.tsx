import React from "react"
import { InterfaceUserNavigation } from "@/src/modules/dashboard/domain/types/dashboard-type"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import { Menu } from "@headlessui/react"

interface InterfaceUserMenuProps {
  item: InterfaceUserNavigation
}

export default function UserMenu({
  item,
}: InterfaceUserMenuProps): JSX.Element {
  return (
    <Menu.Item key={item.name}>
      {({ active }): JSX.Element => (
        <a
          href={item.href}
          className={getHelpers.joinClasses(
            active ? "bg-gray-100" : "",
            "block px-4 py-2 text-sm text-gray-700"
          )}
        >
          {item.name}
        </a>
      )}
    </Menu.Item>
  )
}
