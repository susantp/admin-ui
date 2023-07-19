import React from "react"
import { IRoleList } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"

interface IRoleListProps {
  role: IRoleList
}

export default function RoleList({ role }: IRoleListProps): JSX.Element {
  return (
    <li>
      <div className="group relative flex items-center px-5 py-6">
        <div
          className="absolute inset-0 group-hover:bg-gray-50"
          aria-hidden="true"
        />
        <div className="relative flex min-w-0 flex-1 items-center">
          <div className="ml-4 truncate">
            <p className="truncate text-sm font-medium text-gray-900">
              {role.name}
            </p>
            <p className="truncate text-sm text-gray-500">8 Members</p>
          </div>
        </div>
      </div>
    </li>
  )
}
