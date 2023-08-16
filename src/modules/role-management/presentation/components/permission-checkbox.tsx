import React from "react"

import { PermissionGrouped } from "@/modules/role-management/domain/types"
import { Checkbox } from "@/components/ui/checkbox"

interface PermissionCheckboxProps {
  permission: PermissionGrouped
  action: string
}

function PermissionCheckbox({
  permission,
  action,
}: PermissionCheckboxProps): React.ReactElement | null {
  const hasAction = permission.permissions.find((p) => p.code === action)

  if (!hasAction) return null

  return (
    <div className="text-center">
      <Checkbox />
    </div>
  )
}

export default PermissionCheckbox
