"use client"

import React, { Fragment, useState, useRef } from "react"
import { Dialog, Menu, Transition } from "@headlessui/react"
import {
  BarsArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/20/solid"
import {
  Bars3BottomLeftIcon,
  CheckIcon,
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
  { name: "Dashboard", href: "dashboard", icon: HomeIcon, current: false },
  { name: "User Management", href: "#", icon: UsersIcon, current: true },
  { name: "Role Management", href: "#", icon: FolderIcon, current: false },
  { name: "Page Management", href: "#", icon: CalendarIcon, current: false },
  { name: "Data Access", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
]
const pages = [
  { name: "User Management", href: "#", current: false },
  { name: "User List", href: "#", current: true },
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
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

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
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-100 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              <form className="flex w-full md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>

                <nav className="flex" aria-label="Breadcrumb">
                  <ol role="list" className="flex items-center space-x-4">
                    <li>
                      <div>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <UsersIcon
                            className="h-5 w-5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Home</span>
                        </a>
                      </div>
                    </li>
                    {pages.map((page) => (
                      <li key={page.name}>
                        <div className="flex items-center">
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
              <Menu as="div" className="relative ml-3  invisible lg:visible">
                <div>
                  <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm ">
                    <>
                      <div className="ml-3 ">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          Ishwor Kafle
                        </p>
                        <p className="text-xs font-semibold text-teal-500 group-hover:text-gray-700">
                          Super Admin
                        </p>
                      </div>
                      <span className="rounded-full bg-white p-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-teal-100 focus:ring-offset-2">
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
            <div className="py-10">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                      User Listing
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                      A list of all the users in the system including their
                      name, title, email and role.
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 sm:w-auto"
                      onClick={() => setOpen(true)}
                    >
                      <PlusIcon
                        className="-ml-1 mr-3 h-5 w-5"
                        aria-hidden="true"
                      />
                      Add user
                      <Transition.Root show={open} as={Fragment}>
                        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                          </Transition.Child>

                          <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-0">
                                
                                    {/* Header */}
                                    <div className="bg-teal-600 px-4 py-6 sm:px-6">
                                      <div className="flex items-start justify-between space-x-3">
                                        <div className="space-y-1">
                                          <Dialog.Title className="text-lg font-medium text-white">Add new user</Dialog.Title>
                                          <p className="text-sm text-white">
                                            Fill up the information below to add new users.
                                          </p>
                                        </div>
                                        <div className="flex h-7 items-center">
                                          <button
                                            type="button"
                                            className="text-gray-300 hover:text-gray-100"
                                            onClick={() => setOpen(false)}
                                          >
                                            <span className="sr-only">Close panel</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                          </button>
                                        </div>
                                      </div>
                                    </div>


                                    <div className="bg-white pt-0.5 pb-11 px-4 sm:rounded-lg sm:px-10">
                                      <form className="space-y-6" action="#" method="POST">
                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                          <div className="sm:col-span-3">
                                            <label
                                              htmlFor="first-name"
                                              className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                              First name
                                            </label>
                                            <div className="mt-2">
                                              <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                              />
                                            </div>
                                          </div>

                                          <div className="sm:col-span-3">
                                            <label
                                              htmlFor="last-name"
                                              className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                              Last name
                                            </label>
                                            <div className="mt-2">
                                              <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                              />
                                            </div>
                                          </div>

                                          <div className="sm:col-span-full">
                                            <label
                                              htmlFor="email"
                                              className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                              Email address
                                            </label>
                                            <div className="mt-2">
                                              <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                              />
                                            </div>
                                          </div>
                                          <div className="sm:col-span-3">
                                            <label
                                              htmlFor="first-name"
                                              className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                              Password
                                            </label>
                                            <div className="mt-2">
                                              <input
                                                type="password"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                              />
                                            </div>
                                          </div>

                                          <div className="sm:col-span-3">
                                            <label
                                              htmlFor="last-name"
                                              className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                              Confirm Password
                                            </label>
                                            <div className="mt-2">
                                              <input
                                                type="password"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                              />
                                            </div>
                                          </div>

                                          <div className="sm:col-span-3">
                                            <label
                                              htmlFor="country"
                                              className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                              Department
                                            </label>
                                            <div className="mt-2">
                                              <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                              >
                                                <option>Development Services</option>
                                                <option>BI Line</option>
                                                <option>HR Department</option>
                                              </select>
                                            </div>
                                          </div>
                                          <div className="sm:col-span-3">
                                            <label
                                              htmlFor="country"
                                              className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                              Designation
                                            </label>
                                            <div className="mt-2">
                                              <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                              >
                                                <option>Software Engineer</option>
                                                <option>Senior Software Engineer</option>
                                                <option>Principle Software Engineer</option>
                                              </select>
                                            </div>
                                          </div>

                                          <fieldset className="sm:col-span-full">
                                            <legend className="text-sm font-medium text-gray-900">
                                              Role
                                            </legend>
                                            <div className="mt-3 space-y-5">
                                              <div className="relative flex items-start">
                                                <div className="absolute flex h-5 items-center">
                                                  <input
                                                    id="privacy-public"
                                                    name="privacy"
                                                    aria-describedby="privacy-public-description"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-100"
                                                    defaultChecked
                                                  />
                                                </div>
                                                <div className="pl-7 text-sm">
                                                  <label
                                                    htmlFor="privacy-public"
                                                    className="font-medium text-gray-900"
                                                  >
                                                    Super Admin
                                                  </label>
                                                  <p
                                                    id="privacy-public-description"
                                                    className="text-gray-500"
                                                  >
                                                    Every access within the project
                                                  </p>
                                                </div>
                                              </div>
                                              <div>
                                                <div className="relative flex items-start">
                                                  <div className="absolute flex h-5 items-center">
                                                    <input
                                                      id="privacy-private-to-project"
                                                      name="privacy"
                                                      aria-describedby="privacy-private-to-project-description"
                                                      type="radio"
                                                      className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-100"
                                                    />
                                                  </div>
                                                  <div className="pl-7 text-sm">
                                                    <label
                                                      htmlFor="privacy-private-to-project"
                                                      className="font-medium text-gray-900"
                                                    >
                                                      Admin
                                                    </label>
                                                    <p
                                                      id="privacy-private-to-project-description"
                                                      className="text-gray-500"
                                                    >
                                                      All view/edit access
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <div className="relative flex items-start">
                                                  <div className="absolute flex h-5 items-center">
                                                    <input
                                                      id="privacy-private"
                                                      name="privacy"
                                                      aria-describedby="privacy-private-to-project-description"
                                                      type="radio"
                                                      className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-100"
                                                    />
                                                  </div>
                                                  <div className="pl-7 text-sm">
                                                    <label
                                                      htmlFor="privacy-private"
                                                      className="font-medium text-gray-900"
                                                    >
                                                      Member
                                                    </label>
                                                    <p
                                                      id="privacy-private-description"
                                                      className="text-gray-500"
                                                    >
                                                      View only access
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </fieldset>
                                        </div>
                                        <div>
                                          <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 "
                                          >
                                            Add user
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                 


                                </Dialog.Panel>
                              </Transition.Child>
                            </div>
                          </div>
                        </Dialog>
                      </Transition.Root>
                    </button>
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
        </main>
      </div>
    </div>
  )
}
