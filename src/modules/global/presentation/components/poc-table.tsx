import React from "react";
import {
  InterfacePeople
} from "@/src/modules/dashboard/domain/types/dashboard-type";
import Image from "next/image";

interface InterfaceTableProps{
  people: InterfacePeople[]
}
export default function PocTable({people}: InterfaceTableProps): JSX.Element {
  return <div className="" id="poc-table-wrapper">
  <table className="min-w-full divide-y divide-gray-300 table-auto">
    <thead className="bg-gray-50">
    <tr>
      <th
        scope="col"
        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 "
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
        <td
          className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0">
              <Image width={40} height={40}
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
        <td
          className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <div className="text-gray-900">{person.title}</div>
          <div className="text-gray-500">
            {person.department}
          </div>
        </td>
        <td
          className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span
                              className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              Active
                            </span>
        </td>
        <td
          className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {person.role}
        </td>
        <td
          className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <button
            type="button"
            className="text-teal-600 hover:text-teal-900"
          >
            Edit
            <span className="sr-only">, {person.name}</span>
          </button>
        </td>
      </tr>
    ))}
    </tbody>
  </table>
</div>
}
