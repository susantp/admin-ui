"use client"

import React from "react"
import Link from "next/link"
import Section from "@/src/modules/dashboard/presentation/components/section"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import PocContainer from "@/src/modules/global/presentation/components/poc-container"
import PocLoader from "@/src/modules/global/presentation/components/poc-loader"
import ScreenPermissionBox from "@/src/modules/roles/presentation/components/screen-permission-box"
import useCreateRoleContainerActions from "@/src/modules/roles/presentation/hooks/use-create-role-container-actions"

import { Input } from "@/components/ui/input"

interface IScreenPermissionWrapperProps {
  children: React.ReactNode
}

function ScreenPermissionWrapper({
  children,
}: IScreenPermissionWrapperProps): React.ReactNode {
  return (
    <div
      id="screen-permission-wrapper"
      className="flex flex-col w-full sm:px-6 gap-y-4"
    >
      <div
        id="wrapper-title"
        className="bg-primary text-white py-6 px-4 sm:px-6 items-center flex"
      >
        <h2 className="text-lg">Manage Permissions</h2>
      </div>

      {children}
    </div>
  )
}

export default function CreateRoleContainer(): React.ReactNode {
  const { loading, groupedData } = useCreateRoleContainerActions()

  if (loading || !groupedData || !groupedData.length) return <PocLoader />

  return (
    <PocContainer>
      <Section label="" subLabel={null} actionEl={null}>
        <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
          <div className="h-0 flex-1 overflow-y-auto">
            <div id="form-title" className="bg-teal-700 py-6 px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-medium text-white">Add new role</h1>
              </div>
              <div className="mt-1">
                <p className="text-sm text-white">
                  Get started by filling in the information below to create a
                  new role.
                </p>
              </div>
            </div>
            <div className="divide-y divide-gray-200 px-4 sm:px-6">
              <div className="space-y-6 pb-5 pt-6">
                <div>
                  <p className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </p>
                  <div className="mt-2">
                    <Input type="text" name="project-name" id="role-name" />
                  </div>
                </div>
              </div>
            </div>

            <ScreenPermissionWrapper>
              <div
                id="screens"
                className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6"
              >
                {groupedData.map((screen) => (
                  <ScreenPermissionBox
                    key={Math.random()}
                    screenWithPermission={screen}
                  />
                ))}
              </div>
            </ScreenPermissionWrapper>
          </div>

          <div className="flex flex-shrink-0 justify-end px-4 py-4 mt-6">
            <Link
              href={getHelpers.appPaths.roles.path}
              type="button"
              className="dangerButtonStyle"
            >
              Cancel
            </Link>
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
  )
}
