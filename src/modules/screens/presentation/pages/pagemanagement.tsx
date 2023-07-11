"use client"
import { BookOpenIcon, ClipboardDocumentCheckIcon, FolderIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid'
import {
  Bars4Icon,
  CalendarIcon,
  ClockIcon,
  PhotoIcon,
  TableCellsIcon,
  UserGroupIcon,
  ViewColumnsIcon,
} from '@heroicons/react/24/outline'

const items = [
  {
    title: 'Dashboard',
    description: '30 Members',
    icon: Bars4Icon,
    background: 'bg-teal-500',
  },
  {
    title: 'User Management',
    description: '6 Members',
    icon: UsersIcon,
    background: 'bg-yellow-500',
  },
  {
    title: 'Role Management',
    description: '4 Members',
    icon: FolderIcon,
    background: 'bg-green-500',
  },
  {
    title: 'Page Management',
    description: '12 Members',
    icon: ClipboardDocumentCheckIcon,
    background: 'bg-blue-500',
  },
  {
    title: 'Data Access',
    description: '20 Members',
    icon: TableCellsIcon,
    background: 'bg-indigo-500',
  },
  {
    title: 'Reports',
    description: '10 Members',
    icon: BookOpenIcon,
    background: 'bg-purple-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
       <div className="mt-10 px-4 sm:px-6 lg:px-8">

      <h2 className="text-lg font-medium text-gray-900">Page Management</h2>
      <p className="mt-1 text-sm text-gray-500">
        Details about the page management
      </p>
      <ul role="list" className="mt-6 grid grid-cols-1 gap-6 border-t border-b border-gray-200 py-6 sm:grid-cols-2">
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-teal-500 hover:bg-gray-50">
              <div
                className={classNames(
                  item.background,
                  'flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg'
                )}
              >
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <span>{item.title}</span>
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex">
        <a href="#" className="text-sm font-medium text-teal-600 hover:text-teal-500">
          Create a new page
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
    </div>
  )
}
