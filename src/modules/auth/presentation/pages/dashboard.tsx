"use client"

import React, { Fragment, useState } from "react"
import { Dialog, Menu, Transition } from "@headlessui/react"
import {
  BarsArrowUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid"
import {
  Bars3BottomLeftIcon,
  CalendarIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "User Management", href: "users", icon: UsersIcon, current: false },
  { name: "Role Management", href: "#", icon: FolderIcon, current: false },
  { name: "Page Management", href: "#", icon: CalendarIcon, current: false },
  { name: "Data Access", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
]
const pages = [
  { name: "Home", href: "#", current: false },
  { name: "Dashboard", href: "#", current: true },
]

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
]
const people = [
  {
    name: "Ishwor Kafle",
    title: "Principle Software Engineer",
    department: "Development Service",
    email: "ishwor.kafle@lisnepal.com.np",
    role: "Super Admin",
    image: "http://login.lisnepal.com.np/uploads/409/Ishwor.jpg",
  },
  {
    name: "Anish Byanjankar",
    title: "Principle Software Engineer",
    department: "Development Service",
    email: "anish.byanjankar@lisnepal.com.np",
    role: "Admin",
    image: "http://login.lisnepal.com.np/uploads/259/Anish.png",
  },
  {
    name: "Rubin Maharjan",
    title: "Senior Software Engineer",
    department: "Development Service",
    email: "rubin.maharjan@lisnepal.com.np",
    role: "Member",
    image: "http://login.lisnepal.com.np/uploads/636/Ruben.jpg",
  },
  {
    name: "Susanta Paudel",
    title: "Senior Software Engineer",
    department: "Development Service",
    email: "susanta.paudel@lisnepal.com.np",
    role: "Member",
    image: "http://login.lisnepal.com.np/uploads/777/sp.jpg",
  },
  {
    name: "Ishwor Kafle",
    title: "Principle Software Engineer",
    department: "Development Service",
    email: "ishwor.kafle@lisnepal.com.np",
    role: "Super Admin",
    image: "http://login.lisnepal.com.np/uploads/409/Ishwor.jpg",
  },
  {
    name: "Anish Byanjankar",
    title: "Principle Software Engineer",
    department: "Development Service",
    email: "anish.byanjankar@lisnepal.com.np",
    role: "Admin",
    image: "http://login.lisnepal.com.np/uploads/259/Anish.png",
  },
  {
    name: "Rubin Maharjan",
    title: "Senior Software Engineer",
    department: "Development Service",
    email: "rubin.maharjan@lisnepal.com.np",
    role: "Member",
    image: "http://login.lisnepal.com.np/uploads/636/Ruben.jpg",
  },
  {
    name: "Susanta Paudel",
    title: "Senior Software Engineer",
    department: "Development Service",
    email: "susanta.paudel@lisnepal.com.np",
    role: "Member",
    image: "http://login.lisnepal.com.np/uploads/777/sp.jpg",
  },
  // add more people...
]

const projects = [
  {
    name: "Dashboard",
    initials: "DB",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "User Management",
    initials: "UM",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Role Management",
    initials: "RM",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Page Management",
    initials: "PM",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-teal-700 pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  <h3 className="text-white">SOA-POC</h3>
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
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
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto bg-teal-700 pt-5">
          <div className="flex flex-shrink-0 items-center px-4">
            <h3 className="text-white font-bold text-2xl">SOA-POC</h3>
          </div>
          <div className="mt-5 flex flex-1 flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-teal-800 text-white"
                      : "text-white hover:bg-teal-600",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className="mr-3 h-6 w-6 flex-shrink-0 text-white-300"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              <form className="flex w-full md:ml-0" action="#" method="GET">
                <label className="sr-only">Search</label>

                <nav className="flex" aria-label="Breadcrumb">
                  <ol role="list" className="flex items-center space-x-4">
                    <li>
                      <div>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <HomeIcon
                            className="h-5 w-5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Home</span>
                        </a>
                      </div>
                    </li>
                    {pages.map((page) => (
                      <li key={page.name}>
                        <div className="flex items-center w-max">
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                          </svg>

                          <a
                            href={page.href}
                            className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                            aria-current={page.current ? "page" : undefined}
                          >
                            {page.name}
                          </a>
                        </div>
                      </li>
                    ))}
                  </ol>
                </nav>
              </form>
            </div>

            <div className="ml-4 flex items-center md:ml-6">
              {/* Profile dropdown */}
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
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <main>
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <div className="mt-10 px-4 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Most viewed pages
                  </h3>
                </div>

                <ul
                  role="list"
                  className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2"
                >
                  {projects.map((project) => (
                    <li
                      key={project.name}
                      className="col-span-1 flex rounded-md shadow-sm"
                    >
                      <div
                        className={classNames(
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
                          <p className="text-gray-500">
                            {project.members} Members
                          </p>
                        </div>
                        <div className="flex-shrink-0 pr-2">
                          <button
                            type="button"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                          >
                            <span className="sr-only">Open options</span>
                            <EllipsisVerticalIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-10">
                <div className="px-4 sm:px-6 lg:px-8">
                  <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Active Users
                    </h3>
                    <div className="mt-3 sm:mt-0 sm:ml-4">
                      <label className="sr-only">Search</label>
                      <label className="sr-only">Search</label>
                      <div className="flex rounded-md shadow-sm">
                        <div className="relative flex-grow focus-within:z-10">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            type="text"
                            name="mobile-search-candidate"
                            id="mobile-search-candidate"
                            className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-teal-500 focus:ring-teal-500 sm:hidden"
                            placeholder="Search"
                          />
                          <input
                            type="text"
                            name="desktop-search-candidate"
                            id="desktop-search-candidate"
                            className="hidden w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-teal-500 focus:ring-teal-500 sm:block sm:text-sm"
                            placeholder="Search users"
                          />
                        </div>
                        <button
                          type="button"
                          className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        >
                          <BarsArrowUpIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2">Sort</span>
                          <ChevronDownIcon
                            className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                >
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Title
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Status
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Role
                                </th>
                                <th
                                  scope="col"
                                  className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                                >
                                  <span className="sr-only">Edit</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              {people.map((person) => (
                                <tr key={person.email}>
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                    <div className="flex items-center">
                                      <div className="h-10 w-10 flex-shrink-0">
                                        <img
                                          className="h-10 w-10 rounded-full"
                                          src={person.image}
                                          alt=""
                                        />
                                      </div>
                                      <div className="ml-4">
                                        <div className="font-medium text-gray-900">
                                          {person.name}
                                        </div>
                                        <div className="text-gray-500">
                                          {person.email}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    <div className="text-gray-900">
                                      {person.title}
                                    </div>
                                    <div className="text-gray-500">
                                      {person.department}
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                      Active
                                    </span>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.role}
                                  </td>
                                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a
                                      href="#"
                                      className="text-teal-600 hover:text-teal-900"
                                    >
                                      Edit
                                      <span className="sr-only">
                                        , {person.name}
                                      </span>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between  bg-white px-4 py-3 sm:px-6">
                  <div className="flex flex-1 justify-between sm:hidden">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Next
                    </a>
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">10</span> of{" "}
                        <span className="font-medium">38</span> results
                      </p>
                    </div>
                    <div>
                      <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                      >
                        <a
                          href="#"
                          className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >
                          <span className="sr-only">Previous</span>
                          <ChevronLeftIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </a>
                        {/* Current: "z-10 bg-teal-50 border-teal-500 text-teal-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                        <a
                          href="#"
                          aria-current="page"
                          className="relative z-10 inline-flex items-center border border-teal-500 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-600 focus:z-20"
                        >
                          1
                        </a>
                        <a
                          href="#"
                          className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >
                          2
                        </a>
                        <a
                          href="#"
                          className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                        >
                          3
                        </a>
                        <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                          ...
                        </span>
                        <a
                          href="#"
                          className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                        >
                          8
                        </a>
                        <a
                          href="#"
                          className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >
                          9
                        </a>
                        <a
                          href="#"
                          className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >
                          10
                        </a>
                        <a
                          href="#"
                          className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >
                          <span className="sr-only">Next</span>
                          <ChevronRightIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
