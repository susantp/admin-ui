"use client"

import React from "react";
import PocContainer
  from "@/src/modules/global/presentation/components/poc-container";
import Section from "@/src/modules/dashboard/presentation/components/section";
import {useHydrateAtoms} from "jotai/utils";
import {rolesAtom} from "@/src/modules/roles/presentation/state/role-state";

import Link from "next/link";
import {PlusIcon} from "@heroicons/react/20/solid";
import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import {useAtomValue} from "jotai";
import {
  IFetchRolesData
} from "@/src/modules/roles/domain/services/role-service";

interface IActionLinkProps {
  path: string
}

interface IRoleListProps{
  role: IRoleList
}
interface IRoleContainerProps {
  rolesData: IFetchRolesData
}
function ActionLink({path}: IActionLinkProps): JSX.Element {
  return <Link
    href={path}
    className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
  >
    <PlusIcon
      className="-ml-1 mr-3 h-5 w-5"
      aria-hidden="true"
    />
    New Role
  </Link>
}
function RoleList({role}:IRoleListProps): JSX.Element {
  return (
    <li>
      <div className="group relative flex items-center px-5 py-6">

        <div className="absolute inset-0 group-hover:bg-gray-50"
             aria-hidden="true"/>
        <div className="relative flex min-w-0 flex-1 items-center">
          <div className="ml-4 truncate"><p
            className="truncate text-sm font-medium text-gray-900">{role.name}</p>
            <p className="truncate text-sm text-gray-500">8 Members</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function RoleContainer({rolesData}: IRoleContainerProps): JSX.Element {
  const {total, totalPage, results} = rolesData
  useHydrateAtoms([
    [rolesAtom, results]
  ])
  const roleArray: IRoleList[] | null = useAtomValue(rolesAtom)
  return (
    <PocContainer>
      <Section label="Role Management"
               subLabel="Create, edit or delete roles"
               actionEl={<ActionLink path="/roles/create"/>}>
        <div
          className=" mt-5 flex h-full flex-col bg-white shadow-xl">
          <ul
            className="flex-1 divide-y divide-gray-200 overflow-y-auto">
            {roleArray && roleArray.length > 0 && roleArray.map(role => <RoleList role={role} key={role.id} /> )}
          </ul>
        </div>
      </Section>
    </PocContainer>
  )
}
