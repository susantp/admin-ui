import React, { ReactElement, useContext, useEffect, useState } from "react"

import { useAtomValue } from "jotai"

import PermissionContext from "@/modules/rbac/domain/permission-context"
import { roleAtom } from "@/modules/role-management/presentation/atoms/role-atom"
import { User } from "@/modules/user-management/domain/types"
import { addRoleAction } from "@/modules/user-management/domain/user-actions"

import { toast } from "@/components/ui/use-toast"
import { Combobox, Option } from "@/components/combobox"

interface UserRolesDropdownProps {
  user: User
}

export default function UserRolesDropdown({
  user,
}: UserRolesDropdownProps): ReactElement {
  const { isAllowedTo } = useContext(PermissionContext)
  const roles = useAtomValue(roleAtom)

  const roleOptions = roles.map(
    (r) => ({ value: r.id, label: r.name }) as Option
  )
  const [role, setRole] = useState<Option>()

  useEffect(() => {
    const selected = roleOptions.find((r) => r.label === user.roles[0])
    setRole(selected)
  }, [user])

  if (!isAllowedTo("UPDATE")) return <span>{user.roles.toString()}</span>

  return (
    <Combobox
      selected={role}
      options={roleOptions}
      onSelectedChange={(value): void => {
        addRoleAction({
          user_id: user.id,
          role_id: value.value,
        })
          .then(() => {
            setRole(value)
            toast({
              title: "Success",
              description: "User role update successfully.",
            })
          })
          .catch(() =>
            toast({
              title: "Updated failed",
              description: "Something went wrong.",
              variant: "destructive",
            })
          )
      }}
    />
  )
}
