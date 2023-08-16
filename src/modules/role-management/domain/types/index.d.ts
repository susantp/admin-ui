export interface Permission {
  id: string
  code: string
  screen: string
}

export interface Role {
  id: string
  name: string
  members: number
  permissions: Permission[]
}

export interface PermissionGrouped {
  screen: string
  permissions: { id: string; code: string }[]
}

export interface RoleGrouped {
  id: string
  name: string
  members: number
  permissions: PermissionGrouped[]
}
