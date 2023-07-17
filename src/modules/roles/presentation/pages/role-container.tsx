"use client"

import React, {Fragment} from "react";
import {Menu, Transition} from '@headlessui/react'
import {EllipsisVerticalIcon, PlusIcon} from '@heroicons/react/20/solid'
import {KeyIcon} from '@heroicons/react/24/outline'
import useTempData
  from "@/src/modules/dashboard/data/datasources/dashboard-datasource";
import getHelpers from "@/src/modules/global/domain/utils/helpers";
import {useAtomValue} from "jotai";
import {
  currentScreenAtom,
  sessionUserAtom, userScreensAtom
} from "@/src/modules/global/presentation/state/global-states";
import {User} from "next-auth";
import {
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository";
import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import {useHydrateAtoms} from "jotai/utils";
import {rolesAtom} from "@/src/modules/roles/presentation/state/role-state";
import {fetchRoles} from "@/src/modules/roles/domain/services/role-service";

interface IRoleContainerProps {
  roles: IRoleList[]
}

export default function RoleContainer({roles}: IRoleContainerProps): JSX.Element {
  useHydrateAtoms([
    [rolesAtom, roles]
  ])
  const {projects} = useTempData()
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
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"

            >
              <PlusIcon
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Add Role

            </button>
          </div>
        </div>

        <ul
          className=" divide-y divide-gray-100 mt-6 border-t border-b border-gray-200">
          {projects.map((project) => (
            <li key={project.id}
                className="flex items-center justify-between gap-x-6 py-5">
              <div className="min-w-0">
                <div className="flex items-start gap-x-3">
                  <p
                    className="text-sm font-semibold leading-6 text-gray-900">{project.name}</p>
                  <p
                    className={getHelpers.joinClasses(
                      statuses[project.status],
                      'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                    )}
                  >
                    {project.status}
                  </p>
                </div>
                <div
                  className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                  <p className="whitespace-nowrap">
                    {project.members}
                  </p>
                  <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                    <circle cx={1} cy={1} r={1}/>
                  </svg>
                  <p className="truncate">Created by {project.createdBy}</p>
                </div>
              </div>
              <div className="flex flex-none items-center gap-x-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  <KeyIcon className="-ml-0.5 h-5 w-5" aria-hidden="true"/>
                  Manage Access
                </button>
                <Menu as="div" className="relative flex-none">
                  <Menu.Button
                    className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon className="h-5 w-5"
                                          aria-hidden="true"/>
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
                    <Menu.Items
                      className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <Menu.Item>
                        {({active}): JSX.Element => (
                          <p
                            className={getHelpers.joinClasses(
                              active ? 'bg-gray-50' : '',
                              'block px-3 py-1 taext-sm leading-6 text-gray-900'
                            )}
                          >
                            Edit<span
                            className="sr-only">, {project.name}</span>
                          </p>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({active}): JSX.Element => (
                          <p
                            className={getHelpers.joinClasses(
                              active ? 'bg-gray-50' : '',
                              'block px-3 py-1 text-sm leading-6 text-gray-900'
                            )}
                          >
                            Move<span
                            className="sr-only">, {project.name}</span>
                          </p>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({active}): JSX.Element => (
                          <p
                            className={getHelpers.joinClasses(
                              active ? 'bg-gray-50' : '',
                              'block px-3 py-1 text-sm leading-6 text-gray-900'
                            )}
                          >
                            Delete<span
                            className="sr-only">, {project.name}</span>
                          </p>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
