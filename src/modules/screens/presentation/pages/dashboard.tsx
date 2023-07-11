"use client"

import React from "react"
import {classNames} from "@/src/utils/helpers"
import {
  BarsArrowUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid"

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
]

const projects = [
  {
    name: "Super Admin",
    initials: "SA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Registered Users",
    initials: "RU",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Members",
    initials: "MB",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Accounts",
    initials: "AC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
]



export default function Dashboard() {

  return <div className=" mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200 pb-5">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Top Groups
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
}