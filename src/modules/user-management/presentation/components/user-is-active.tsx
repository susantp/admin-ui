import React, { ReactElement, useContext, useEffect, useState } from "react"

import PermissionContext from "@/modules/rbac/domain/permission-context"
import { User } from "@/modules/user-management/domain/types"
import { toggleIsActiveAction } from "@/modules/user-management/domain/user-actions"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

interface UserIsActiveProps {
  user: User
}

export default function UserIsActive({
  user,
}: UserIsActiveProps): ReactElement {
  const { id: userId, is_active: isActive } = user

  const { isAllowedTo } = useContext(PermissionContext)
  const [value, setValue] = useState(isActive)

  useEffect(() => {
    setValue(isActive)
  }, [isActive])

  if (!isAllowedTo("UPDATE"))
    return (
      <span>
        {value ? (
          <Badge>Active</Badge>
        ) : (
          <Badge variant="destructive">Inactive</Badge>
        )}
      </span>
    )

  return (
    <Switch
      checked={value}
      onCheckedChange={(): void => {
        toggleIsActiveAction(userId)
          .then(() => {
            setValue((prevState) => !prevState)
            toast({
              title: "Success",
              description: "User status updated successfully",
            })
          })
          .catch(() =>
            toast({
              title: "Update failed",
              description: "Something went wrong.",
              variant: "destructive",
            })
          )
      }}
    />
  )
}
