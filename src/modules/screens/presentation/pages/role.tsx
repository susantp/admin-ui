"use client"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon,} from '@heroicons/react/20/solid'
import {  KeyIcon } from '@heroicons/react/24/outline'

const statuses = {
  Active: 'text-green-700 bg-green-50 ring-green-600/20',
  Inactive: 'text-red-600 bg-red-50 ring-red-500/10',
  Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}
const projects = [
  {
    id: 1,
    name: 'Super Admin',
    href: '#',
    status: 'Active',
    createdBy: 'Ishwor Kafle',
    members: '4 Members',
   
  },
  {
    id: 2,
    name: 'Admin',
    href: '#',
    status: 'Active',
    createdBy: 'Mrigesh Shrestha',
    members: '4 Members',

  },
  {
    id: 3,
    name: 'Accounts',
    href: '#',
    status: 'Archived',
    createdBy: 'Smriti Shilpakar',
    members: '2 Members',
    
  },
  {
    id: 4,
    name: 'Human Resources',
    href: '#',
    status: 'Archived',
    createdBy: 'Diwas Thapa',
    members: '5 Members',
   
  },
  {
    id: 5,
    name: 'System',
    href: '#',
    status: 'Inactive',
    createdBy: 'Dipesh Thapa Magar',
    members: '15 Members',

  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
       <div className="mt-10 px-4 sm:px-6 lg:px-8">
       <h2 className="text-lg font-medium text-gray-900">Role Management</h2>
      <p className="mt-1 text-sm text-gray-500">
        Details about the role management
      </p>

    <ul role="list" className=" divide-y divide-gray-100 mt-6 border-t border-b border-gray-200">
      {projects.map((project) => (
        <li key={project.id} className="flex items-center justify-between gap-x-6 py-5">
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm font-semibold leading-6 text-gray-900">{project.name}</p>
              <p
                className={classNames(
                  statuses[project.status],
                  'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                )}
              >
                {project.status}
              </p>
            </div>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
              <p className="whitespace-nowrap">
             {project.members}
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <p className="truncate">Created by {project.createdBy}</p>
            </div>
          </div>
          <div className="flex flex-none items-center gap-x-4">
          <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
      >
        <KeyIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Manage Access
      </button>
            <Menu as="div" className="relative flex-none">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Edit<span className="sr-only">, {project.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Move<span className="sr-only">, {project.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Delete<span className="sr-only">, {project.name}</span>
                      </a>
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