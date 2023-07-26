import { InterfaceAppPaths } from "@/src/modules/global/domain/types/helpers"

export const appPaths: InterfaceAppPaths = {
  profile:{
    path: "/profile",
    label: "Profile",
    name: "profile",
    id: "profile",
  },
  home: {
    path: "/",
    label: "Home",
    name: "home",
    id: "home",
  },
  dashboard: {
    path: "/dashboard",
    label: "Dashboard",
    name: "dashboard",
    id: "dashboard",
  },
  users: {
    path: "/users",
    label: "User Management",
    name: "users",
    id: "users",
  },
  roles: {
    path: "/roles",
    label: "Role Management",
    name: "roles",
    id: "roles",
  },
  createRole: {
    path: (): string => `${appPaths.roles.path}/create`,
    label: "Create Role",
    name: "roles",
    id: "create-role",
  },
  editRole: {
    path: (id: number | string): string => `${appPaths.roles.path}/${id}/edit`,
    label: "Edit Role",
    name: "roles",
    id: "edit-role",
  },
  screens: {
    path: "/screens",
    label: "Screen Management",
    name: "screens",
    id: "screens",
  },
}
