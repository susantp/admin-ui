import React, { useEffect } from "react"
import { fetchAllPermissions } from "@/src/modules/role-management/domain/service/role-service"
import { Permission } from "@/src/modules/role-management/domain/types"

export const useRoles = (): { permissions: Permission[] } => {
  const [permissions, setPermissions] = React.useState<Permission[]>([])

  useEffect(() => {
    fetchAllPermissions()
      .then((data) => setPermissions(data.results))
      .catch(() => {})
  }, [])

  return { permissions }
}
