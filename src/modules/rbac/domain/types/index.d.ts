export interface UserScreen {
  id: string
  name: string
  slug: string
  members: number
  permissions: []
}

type AllowedPermissions = "CREATE" | "READ" | "UPDATE" | "DELETE"
