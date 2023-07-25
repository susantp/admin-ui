import React, {ReactNode} from "react"

import { Input } from "@/components/ui/input"

interface ICreateEditUserFormProps {
  onClose: () => void
}
export default function CreateEditUserForm({
  onClose,
}: ICreateEditUserFormProps): ReactNode {
  return (
    <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
      <div className="flex flex-1 flex-col justify-between">
        <div className="divide-y divide-gray-200 px-4 sm:px-6">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <p className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </p>
              <div className="mt-2">
                <Input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <p className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </p>
              <div className="mt-2">
                <Input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <p className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </p>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-full">
              <p className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </p>
              <div className="mt-2">
                <Input
                  id="username"
                  name="username"
                  type="username"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <p className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </p>
              <div className="mt-2">
                <Input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <p className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </p>
              <div className="mt-2">
                <Input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="department"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Department
                <div className="mt-2">
                  <select
                    id="department"
                    name="department"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Development Services</option>
                    <option>BI Line</option>
                    <option>HR Department</option>
                  </select>
                </div>
              </label>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="designation"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Designation
                <div className="mt-2">
                  <select
                    id="designation"
                    name="designation"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Software Engineer</option>
                    <option>Senior Software Engineer</option>
                    <option>Principle Software Engineer</option>
                  </select>
                </div>
              </label>
            </div>

            <fieldset className="sm:col-span-full">
              <legend className="text-sm font-medium text-gray-900">
                Role
              </legend>
              <div className="mt-3 space-y-5">
                <div className="relative flex items-start">
                  <div className="absolute flex h-5 items-center">
                    <Input
                      id="privacy-public"
                      name="privacy"
                      aria-describedby="privacy-public-description"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
                      defaultChecked
                    />
                  </div>
                  <div className="pl-7 text-sm">
                    <p className="font-medium text-gray-900">Super Admin</p>
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
                      <Input
                        id="privacy-private-to-project"
                        name="privacy"
                        aria-describedby="privacy-private-to-project-description"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
                      />
                    </div>
                    <div className="pl-7 text-sm">
                      <p className="font-medium text-gray-900">Admin</p>
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
                      <Input
                        id="privacy-private"
                        name="privacy"
                        aria-describedby="privacy-private-to-project-description"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-500"
                      />
                    </div>
                    <div className="pl-7 text-sm">
                      <p className="font-medium text-gray-900">Member</p>
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
      <div className="flex flex-shrink-0 justify-end px-4 py-4 mt-6">
        <button
          type="button"
          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          onClick={(): void => onClose()}
        >
          Cancel
        </button>
        <input
          type="submit"
          defaultValue="Submit"
          className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        />
      </div>
    </form>
  )
}
