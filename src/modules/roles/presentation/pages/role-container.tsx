"use client"

import React, { Fragment, useState } from "react";
import { Menu, Transition, Dialog } from '@headlessui/react'
import { EllipsisVerticalIcon, PlusIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { KeyIcon } from '@heroicons/react/24/outline'
import useTempData
  from "@/src/modules/dashboard/data/datasources/dashboard-datasource";
import getHelpers from "@/src/modules/global/domain/utils/helpers";
import { useAtomValue } from "jotai";
import {
  currentScreenAtom,
  sessionUserAtom, userScreensAtom
} from "@/src/modules/global/presentation/state/global-states";
import { User } from "next-auth";
import {
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository";
import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import { useHydrateAtoms } from "jotai/utils";
import { rolesAtom } from "@/src/modules/roles/presentation/state/role-state";
import { fetchRoles } from "@/src/modules/roles/domain/services/role-service";
import { ChevronRightIcon } from "lucide-react";
import Link from 'next/link'

interface IRoleContainerProps {
  roles: IRoleList[]
}
const tabs = [
  { name: 'All', href: '#', current: true },
  { name: 'Development', href: '#', current: false },
  { name: 'Managed Service', href: '#', current: false },
  { name: 'System', href: '#', current: false },
]
const team = [
  {
    name: 'Admin',
    handle: '8',
    href: '#',
    status: 'online',
  },
  {
    name: 'Owner',
    handle: '2',
    href: '#',
    status: 'online',
  },
  {
    name: 'Member',
    handle: '2',
    href: '#',
    status: 'online',
  },
  {
    name: 'Member',
    handle: '2',
    href: '#',
    status: 'online',
  },
  {
    name: 'Member',
    handle: '2',
    href: '#',
    status: 'online',
  },
  {
    name: 'Member',
    handle: '2',
    href: '#',
    status: 'online',
  },
  {
    name: 'Member',
    handle: '2',
    href: '#',
    status: 'online',
  },
  {
    name: 'Member',
    handle: '2',
    href: '#',
    status: 'online',
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function RoleContainer({ roles }: IRoleContainerProps): JSX.Element {
  const [open, setOpen] = useState(false)
  useHydrateAtoms([
    [rolesAtom, roles]
  ])
  const { projects } = useTempData()
  const statuses = {
    active: 'text-green-700 bg-green-50 ring-green-600/20',
    inactive: 'text-red-600 bg-red-50 ring-red-500/10',
    archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
  }
  const sessionUser: User | null = useAtomValue(sessionUserAtom)
  const currentScreen: IScreen | null = useAtomValue(currentScreenAtom)


  return (
    <div className="max-w-full px-4 sm:px-6 md:px-8">
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Role Management
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              Create, add or delete roles
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">

              <Link
              href="roles/create"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
              >
                <PlusIcon
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              New Role
              </Link>
          </div>
        </div>



        <div className=" mt-5 fixed w-[72%] flex h-full flex-col bg-white shadow-xl">
          <div className="p-3">
           
          </div>
          <div className="border-b border-gray-200">
            <div className="px-6">
              <nav className="-mb-px flex space-x-6" x-descriptions="Tab component">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      tab.current
                        ? 'border-teal-500 text-teal-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                    )}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <ul role="list" className="flex-1 divide-y divide-gray-200 overflow-y-auto">
            {team.map((person) => (
              <li key={person.handle}>
                <div className="group relative flex items-center px-5 py-6">
                  <a href={person.href} className="-m-1 block flex-1 p-1">
                    <div className="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true" />
                    <div className="relative flex min-w-0 flex-1 items-center">
                  
                      <div className="ml-4 truncate">
                        <p className="truncate text-sm font-medium text-gray-900">{person.name}</p>
                        <p className="truncate text-sm text-gray-500">{ person.handle + ' Members'}</p>
                      </div>
                    </div>
                  </a>
                  <Menu as="div" className="relative ml-2 inline-block flex-shrink-0 text-left">
                    <Menu.Button className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                      <span className="sr-only">Open options menu</span>
                      <span className="flex h-full w-full items-center justify-center rounded-full">
                        <ChevronRightIcon
                          className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </span>
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-9 top-0 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                View profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Send message
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
