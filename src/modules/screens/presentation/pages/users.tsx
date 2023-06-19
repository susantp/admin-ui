"use client"

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon, XMarkIcon
} from "@heroicons/react/20/solid";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Users() {
  const [open, setOpen] = useState(false)
  const [people, setPeople] = useState([
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
      email: "ishwor.kafle1@lisnepal.com.np",
      role: "Super Admin",
      image: "http://login.lisnepal.com.np/uploads/409/Ishwor.jpg",
    },
    {
      name: "Anish Byanjankar",
      title: "Principle Software Engineer",
      department: "Development Service",
      email: "anish.byanjankar1@lisnepal.com.np",
      role: "Admin",
      image: "http://login.lisnepal.com.np/uploads/259/Anish.png",
    },
    {
      name: "Rubin Maharjan",
      title: "Senior Software Engineer",
      department: "Development Service",
      email: "rubin.maharjan1@lisnepal.com.np",
      role: "Member",
      image: "http://login.lisnepal.com.np/uploads/636/Ruben.jpg",
    },
    {
      name: "Susanta Paudel",
      title: "Senior Software Engineer",
      department: "Development Service",
      email: "susanta.paudel1@lisnepal.com.np",
      role: "Member",
      image: "http://login.lisnepal.com.np/uploads/777/sp.jpg",
    },
    // add more people...
  ]);
  return <div>
    <div className="py-10 md:px-8">
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
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
              onClick={() => setOpen(true)}
            >
              <PlusIcon
                className="-ml-1 mr-3 h-5 w-5"
                aria-hidden="true"
              />
              Add user
              <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg  text-left transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                          <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                            <div className="h-0 flex-1 overflow-y-auto">
                              <div className="bg-teal-700 py-6 px-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                  <Dialog.Title className="text-lg font-medium text-white">Add new user</Dialog.Title>
                                  <div className="ml-3 flex h-7 items-center">
                                    <button
                                      type="button"
                                      className="rounded-md bg-teal-700 text-gray-100 hover:text-white focus:outline-none "
                                      onClick={() => setOpen(false)}
                                    >
                                      <span className="sr-only">Close panel</span>
                                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                  </div>
                                </div>
                                <div className="mt-1">
                                  <p className="text-sm text-white">
                                    Get started by filling in the information below to create a new user.
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col justify-between">
                                <div className="divide-y divide-gray-200 px-4 sm:px-6">
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
                                              className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
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
                                                className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
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
                                                className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
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

                                </div>
                              </div>
                            </div>
                            <div className="flex flex-shrink-0 justify-end px-4 py-4 mt-6">
                              <button
                                type="button"
                                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                                onClick={() => setOpen(false)}
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                              >
                                Save
                              </button>
                            </div>
                          </form>
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
}