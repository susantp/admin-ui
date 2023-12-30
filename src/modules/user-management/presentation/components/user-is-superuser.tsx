import React, { ReactElement, useContext, useEffect, useState } from "react"

import PermissionContext from "@/modules/rbac/domain/permission-context"
import { User } from "@/modules/user-management/domain/types"
import { toggleIsSuperUserAction } from "@/modules/user-management/domain/user-actions"

import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

interface UserIsSuperAdminProps {
  user: User
}

export default function UserIsSuperuser({
  user,
}: UserIsSuperAdminProps): ReactElement {
  const { id: userId, is_superuser: isSuperuser } = user

  const { isAllowedTo } = useContext(PermissionContext)
  const [value, setValue] = useState(isSuperuser)

  useEffect(() => {
    setValue(isSuperuser)
  }, [isSuperuser])

  return (
    <Switch
      checked={value}
      disabled={!isAllowedTo("UPDATE")}
      onCheckedChange={(): void => {
        toggleIsSuperUserAction(userId)
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
