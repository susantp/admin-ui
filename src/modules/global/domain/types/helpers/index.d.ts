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
  screens: InterfacePathObject
}
type IconSet = Record<string, { icon: JSX.Element }>
