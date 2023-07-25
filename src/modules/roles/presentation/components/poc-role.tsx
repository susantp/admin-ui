import React from "react"
import Link from "next/link"
import { appPaths } from "@/src/modules/global/domain/objects/global"
import { IRole } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import UseRoleListActions from "@/src/modules/roles/presentation/hooks/use-role-list-actions"
import { Layers } from "lucide-react"

interface IRoleListProps {
  role: IRole
  onDelete: () => void
}

export default function PocRole({
  role,
  onDelete,
}: IRoleListProps): React.ReactNode {
  const { permittedScreens } = UseRoleListActions(role)
  return (
    <div className="group relative flex items-center px-5 py-6 justify-between flex-wrap ">
      <div className="ml-4 ">
        <p className="truncate text-sm font-medium text-gray-900">
          {role.name}
        </p>
        <div className="truncate inline-flex gap-x-3 items-center py-4 text-sm text-gray-500 overflow-hidden">
          <Layers /> {permittedScreens.length} Screens permitted.
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center">
        <Link
          href={appPaths.editRole.path(role.id)}
          className="primaryButtonStyle"
        >
          Edit
        </Link>
        <button type="button" className="dangerButtonStyle" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}
