import {InterfaceAppPaths} from "@/src/modules/global/domain/types/global-type"
import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

interface InterfaceGetHelpers {
  joinClasses: (...classes: string[]) => string
  formatDate: (input: string | number) => string
  cn: (...inputs: ClassValue[]) => string
  appPaths: () => InterfaceAppPaths
}

const getHelpers = (): InterfaceGetHelpers => {
  const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))
  const joinClasses = (...classes: string[]): string =>
    classes.filter(Boolean).join(" ")
  const formatDate = (input: string | number): string => {
    const date: Date = new Date(input)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }
  const appPaths = (): InterfaceAppPaths => ({
    home: {path: "/", label: "Home", name: 'home', id: "home"},
    dashboard: {
      path: "/dashboard",
      label: "DashboardContainer",
      name: "dashboard",
      id: "dashboard"
    },
    users: {
      path: "/users",
      label: "User Management",
      name: 'users',
      id: "users"
    },
    roles: {
      path: "/roles",
      label: "Role Management",
      name: 'roles',
      id: "roles"
    },
    pages: {
      path: "/pages",
      label: "Page Management",
      name: 'pages',
      id: "pages"
    },
  })

  return {joinClasses, formatDate, cn, appPaths}
}
export default getHelpers
