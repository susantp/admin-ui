import { createContext } from "react"
import { AllowedPermissions } from "@/src/modules/rbac/domain/types"

export interface PermissionContextProps {
  isAllowedTo: (permission: AllowedPermissions) => boolean
}

const defaultBehavior: PermissionContextProps = {
  isAllowedTo: (): boolean => false,
}

const PermissionContext = createContext<PermissionContextProps>(defaultBehavior)

export default PermissionContext
