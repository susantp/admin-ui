import {
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository";
import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon
} from "@heroicons/react/24/outline";
import {InterfaceAppPaths} from "@/src/modules/global/domain/types/helpers";

interface InterfaceGetHelpers {
  joinClasses: (...classes: string[]) => string
  formatDate: (input: string | number) => string
  cn: (...inputs: ClassValue[]) => string
  appPaths: () => InterfaceAppPaths
  mapScreens: (responseScreens: IScreen[] | null) => IScreen[] | null
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
    home: {
      path: "/home",
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
  })

  const mapScreens = (responseScreens: IScreen[] | null): IScreen[] | null => {
    if (!responseScreens) return null
    return responseScreens.filter((screen: IScreen) => {
      if (!(screen.slug in appPaths())) return false
      return screen
    })
  }
  return {joinClasses, formatDate, cn, appPaths, mapScreens}
}
export default getHelpers
