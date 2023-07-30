export interface Permission {
  screen: string
  permissions: { id: string; code: string }[]
}

export interface Role {
  id: string
  name: string
  members: number
  permissions: Permission[]
}
