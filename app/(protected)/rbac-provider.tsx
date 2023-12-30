import React, { ReactNode, useMemo } from "react"

import PermissionContext, {
  PermissionContextProps,
} from "@/modules/rbac/domain/permission-context"

interface RBACProviderProps {
  permissions: string[]
  children: ReactNode
}

export default function RBACProvider({
  permissions,
  children,
}: RBACProviderProps): ReactNode {
  const contextValue = useMemo(
    (): PermissionContextProps => ({
      isAllowedTo: (permission) => permissions.includes(permission),
    }),
    [permissions]
  )

  return (
    <PermissionContext.Provider value={contextValue}>
      {children}
    </PermissionContext.Provider>
  )
}
