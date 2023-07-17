export interface Permission {
  id: string
  code: string
  screen: string
}

export interface Role {
  id: string
  name: string
  permissions: Permission[]
}
