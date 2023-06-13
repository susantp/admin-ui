"use client"

import React from "react"
import Link from "next/link"
import UserRegisterForm from "@/auth/presentation/components/user-register-form"
import { RecoilRoot } from "recoil"

export default function RegisterPage(): JSX.Element {
  return (
    <div className="flex bg-gray-100 min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-8 w-auto" src="lis.png" alt="Your Company" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-800">
          SOA-POC Registration
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have a account?{" "}
          <a
            href="/register"
            className="font-medium text-teal-600 hover:text-teal-500"
          >
            Login here
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white pt-0.5 pb-11 px-4 shadow sm:rounded-lg sm:px-10">
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
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
