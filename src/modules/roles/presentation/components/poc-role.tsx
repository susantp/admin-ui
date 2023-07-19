import React from "react"
import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import UseRoleListAction
  from "@/src/modules/roles/presentation/hooks/use-role-list-action";
import Link from "next/link";

interface IRoleListProps {
  role: IRoleList
  onDelete: () => void
}

export default function PocRole({role, onDelete}: IRoleListProps): JSX.Element {
  const {permittedScreens} = UseRoleListAction(role)
  return (
    <div
      className="group relative flex items-center px-5 py-6 justify-between flex-wrap ">

      <div className="ml-4 ">
        <p className="truncate text-sm font-medium text-gray-900">
          {role.name}
        </p>
        <p className="truncate py-4 text-sm text-gray-500 overflow-hidden">
          Total {permittedScreens.length} Screens permitted.
        </p>
      </div>

      <div className="flex gap-2 justify-between items-center">
        <Link href={`roles/${role.id}`}
              className="primaryButtonStyle">
          Edit
        </Link>
        <button type="button"
                className="dangerButtonStyle"
                onClick={onDelete}>Delete
        </button>
      </div>

    </div>
  )
}
