interface InterfacePathObject {
  id: string
  path: string
  label: string
  name: string
}

export interface InterfaceAppPaths {
  home: InterfacePathObject
  dashboard: InterfacePathObject
  users: InterfacePathObject
  roles: InterfacePathObject
  pages: InterfacePathObject
}

export interface IScreen {
  id: string
  name: string
  path: string | undefined
  permissions: string[]
}
