import React from "react"
import { IGroupedScreenWithPermissions } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import { Fingerprint } from "lucide-react"

interface IScreenPermissionBoxProps {
  screenWithPermission: IGroupedScreenWithPermissions
}

export default function ScreenPermissionBox({
  screenWithPermission,
}: IScreenPermissionBoxProps): JSX.Element {
  const { screen, permissions } = screenWithPermission
  return (
    <div className="flex flex-col shadow-xl">
      <div id="screen-title" className="flex p-2 bg-secondary">
        <p className="text-primary font-semibold">{screen}</p>
      </div>

      {permissions.map((item) => (
        <div
          key={item.id}
          id="permissionDiv"
          className="flex gap-x-5 p-3 border-gray-200 border-2"
        >
          <Fingerprint />
          <p id="permission-name" className="flex-1">
            {item.code}
          </p>
          <input type="checkbox" id="p-1" className="flex-none" />
        </div>
      ))}
    </div>
  )
}
