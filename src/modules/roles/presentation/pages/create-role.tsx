"use client"

import React, {Fragment, useState} from "react";
import {Menu, Transition, Dialog} from '@headlessui/react'
import {
  EllipsisVerticalIcon,
  PlusIcon,
  XMarkIcon
} from '@heroicons/react/20/solid'
import {KeyIcon} from '@heroicons/react/24/outline'
import useTempData
  from "@/src/modules/dashboard/data/datasources/dashboard-datasource";
import getHelpers from "@/src/modules/global/domain/utils/helpers";
import {useAtomValue} from "jotai";
import {
  currentScreenAtom,
  sessionUserAtom, userScreensAtom
} from "@/src/modules/global/presentation/state/global-states";
import {User} from "next-auth";
import {
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository";
import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import {useHydrateAtoms} from "jotai/utils";
import {rolesAtom} from "@/src/modules/roles/presentation/state/role-state";
import {fetchRoles} from "@/src/modules/roles/domain/services/role-service";
import {ChevronRightIcon} from "lucide-react";
import Section from "@/src/modules/dashboard/presentation/components/section";
import PocContainer
  from "@/src/modules/global/presentation/components/poc-container";

export default function CreateRole(): JSX.Element {
  return <PocContainer>
    <Section label="" subLabel={null} actionEl={null}>
      <form
        className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
        <div className="h-0 flex-1 overflow-y-auto">
          <div className="bg-teal-700 py-6 px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium text-white">Add new role</div>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="rounded-md bg-teal-700 text-gray-100 hover:text-white focus:outline-none "
                >
                  <span className="sr-only">Close panel</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                </button>
              </div>
            </div>
            <div className="mt-1">
              <p className="text-sm text-white">
                Get started by filling in the information below to create a new
                role.
              </p>
            </div>
          </div>
          <div className="divide-y divide-gray-200 px-4 sm:px-6">
            <div className="space-y-6 pb-5 pt-6">
              <div>
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Role name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="project-name"
                    id="project-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
            <textarea
              id="description"
              name="description"
              rows={4}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              defaultValue={''}
            />
                </div>
              </div>

              <fieldset>
                <legend
                  className="text-sm font-medium leading-6 text-gray-900">Privacy
                </legend>
                <div className="mt-2 space-y-4">
                  <div className="relative flex items-start">
                    <div className="absolute flex h-6 items-center">
                      <input
                        id="privacy-public"
                        name="privacy"
                        aria-describedby="privacy-public-description"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-600"
                        defaultChecked
                      />
                    </div>
                    <div className="pl-7 text-sm leading-6">
                      <label htmlFor="privacy-public"
                             className="font-medium text-gray-900">
                        Super Admin
                      </label>
                      <p id="privacy-public-description"
                         className="text-gray-500">
                        Everyone within this project.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative flex items-start">
                      <div className="absolute flex h-6 items-center">
                        <input
                          id="privacy-private-to-project"
                          name="privacy"
                          aria-describedby="privacy-private-to-project-description"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-600"
                        />
                      </div>
                      <div className="pl-7 text-sm leading-6">
                        <label htmlFor="privacy-private-to-project"
                               className="font-medium text-gray-900">
                          Admin
                        </label>
                        <p id="privacy-private-to-project-description"
                           className="text-gray-500">
                          Only limited screens would be able to access.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative flex items-start">
                      <div className="absolute flex h-6 items-center">
                        <input
                          id="privacy-private"
                          name="privacy"
                          aria-describedby="privacy-private-to-project-description"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-teal-600 focus:ring-teal-600"
                        />
                      </div>
                      <div className="pl-7 text-sm leading-6">
                        <label htmlFor="privacy-private"
                               className="font-medium text-gray-900">
                          Member
                        </label>
                        <p id="privacy-private-description"
                           className="text-gray-500">
                          Custom access
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
            type="submit"
            className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </form>
    </Section>
  </PocContainer>
}
