"use client"

import { classNames } from "@/src/utils/helpers";
import React, { Fragment, useState, useRef } from "react";
import {
  Bars3BottomLeftIcon, CalendarIcon, ChartBarIcon,
  Cog6ToothIcon, FolderIcon,
  HomeIcon, InboxIcon, UsersIcon, XMarkIcon, MagnifyingGlassIcon, BellIcon
} from "@heroicons/react/24/outline";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { usePathname } from 'next/navigation'
import { ArrowLeftOnRectangleIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/20/solid";
import { Climate_Crisis } from "next/font/google";


export default function Navbar() {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  const [navigation, setNavigation] = useState([
    { name: "Dashboard", href: "dashboard", icon: HomeIcon, current: true },
    { name: "User Management", href: "users", icon: UsersIcon, current: false },
    { name: "Role Management", href: "role", icon: FolderIcon, current: false },
    { name: "Screen", href: "pagemanagement", icon: ClipboardDocumentCheckIcon, current: false },
    { name: "Data Access", href: "#", icon: InboxIcon, current: false },
    { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [pages,] = useState([
    
    { name: "Dashboard", href: "#", current: true },
  ]);
  const [userNavigation,] = useState([
    { name: "Your Profile", href: "/profile" },
    { name: "Settings", href: "#" },
    { name: "Log out", href: "#"},
  ]);

  const pathname = usePathname()

  //Breadcrumb components
  function capitalizeWords(str:string) {
    const withoutLeadingSlash = str.startsWith('/') ? str.substring(1) : str;
    return withoutLeadingSlash.toLowerCase().split('/').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join('/');
  }
  const capitalizedPathname = capitalizeWords(pathname);
  return <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
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
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
              <h3 className="text-white">SOA-POC</h3>
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 pb-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                pathname.includes(item.href)
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
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root><div className="flex flex-1 flex-col md:pl-64">
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
              <li>
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
                     
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                     
                    >
                      Home
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
                      {capitalizedPathname}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
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
          <span title="Logout" className="cursor-pointer rounded-full bg-white p-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-teal-500 focus:ring-offset-2">
            <span className="sr-only">Logout</span>
            <ArrowLeftOnRectangleIcon onClick={() => setOpen(true)} className="h-6 w-6" aria-hidden="true" />
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
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                          <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                              <ArrowLeftOnRectangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                              <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                Log out of your account
                              </Dialog.Title>
                              <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                  Are you sure you want to Log out of your account?
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"

                          >
                            <a href="/login">
                              Logout
                            </a>
                          </button>
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </span>

        </div>

      </div>
    </div>


  </div></div>
}
