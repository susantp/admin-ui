import { InterfaceAppPaths } from "@/src/modules/global/domain/types/helpers"
import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

interface InterfaceGetHelpers {
  joinClasses: (...classes: string[]) => string
  formatDate: (input: string | number) => string
  cn: (...inputs: ClassValue[]) => string
  appPaths: InterfaceAppPaths
  mapScreens: (responseScreens: IScreen[] | null) => IScreen[] | null
}

const getHelpers: InterfaceGetHelpers = {
  appPaths: {
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
    screens: {
      path: "/screens",
      label: "Screen Management",
      name: "screens",
      id: "screens",
    },
  },

  cn: (...inputs: ClassValue[]): string => twMerge(clsx(inputs)),

  joinClasses: (...classes: string[]): string =>
    classes.filter(Boolean).join(" "),

  formatDate: (input: string | number): string => {
    const date: Date = new Date(input)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  },
  mapScreens: (responseScreens: IScreen[] | null): IScreen[] | null => {
    if (!responseScreens) return null
    return responseScreens.filter((screen: IScreen): boolean | IScreen => {
      if (!(screen.slug in getHelpers.appPaths)) return false
      return screen
    })
  },
}
export default getHelpers