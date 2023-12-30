import React from "react"
import {
  BarsArrowUpIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid"

export default function PocTableTools(): JSX.Element {
  return (
    <div className="flex justify-end" id="table-tools">
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
          <label htmlFor="desktop-search-candidate">
            <input
              type="text"
              name="desktop-search-candidate"
              id="desktop-search-candidate"
              className="hidden w-full h-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-teal-500 focus:ring-teal-500 sm:block sm:text-sm"
              placeholder="Search users"
            />
          </label>
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
  )
}
