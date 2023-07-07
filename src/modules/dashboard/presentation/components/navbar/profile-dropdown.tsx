import React, { Fragment } from "react"
import { InterfaceUserNavigation } from "@/src/modules/dashboard/domain/types/dashboard-type"
import UserMenu from "@/src/modules/dashboard/presentation/components/navbar/user-menu"
import { Menu, Transition } from "@headlessui/react"
import { Cog6ToothIcon } from "@heroicons/react/24/outline"

interface InterfaceProfileDropdownProps {
  userNavigation: InterfaceUserNavigation[]
}
export default function ProfileDropdown({
  userNavigation,
}: InterfaceProfileDropdownProps): JSX.Element {
  return (
    <Menu as="div" className="relative ml-3 invisible lg:visible">
      <div>
        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm ">
          <>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Ishwor Kafle
              </p>
              <p className="text-xs font-semibold text-teal-500 group-hover:text-gray-700">
                Super Admin
              </p>
            </div>
            <span className="rounded-full bg-white p-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-teal-500 focus:ring-offset-2">
              <span className="sr-only">View notifications</span>
              <Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />
            </span>
          </>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <UserMenu item={item} key={Math.random()} />
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
