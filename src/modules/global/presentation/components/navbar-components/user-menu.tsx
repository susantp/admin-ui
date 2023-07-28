import React, {ReactElement, ReactNode} from "react"
import {
  InterfaceUserNavigation
} from "@/src/modules/dashboard/domain/types/dashboard-type"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import {Menu} from "@headlessui/react"
import Link from "next/link";

interface InterfaceUserMenuProps {
  item: InterfaceUserNavigation
}

export default function UserMenu({item}: InterfaceUserMenuProps): ReactNode {
  return (
    <Menu.Item key={item.name}>
      {({active}): ReactElement =>
        item.action
          ? (
            <button
              type="button"
              onClick={item.action}
              className={getHelpers.joinClasses(
                active ? "bg-gray-100 w-full justify-items-start flex" : "",
                "block px-4 py-2 text-sm text-gray-700"
              )}
            >
              {item.name}
            </button>
          )
          : (
            <Link
              href={item.href}
              className={getHelpers.joinClasses(
                active ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700"
              )}
            >
              {item.name}
            </Link>
          )
      }
    </Menu.Item>
  )
}
