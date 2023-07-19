import path from "path"
import {
  IComposeRequestPathParams,
  InterfaceAppPaths,
} from "@/src/modules/global/domain/types/helpers"
import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

interface InterfaceGetHelpers {
  joinClasses: (...classes: string[]) => string
  formatDate: (input: string | number) => string
  cn: (...inputs: ClassValue[]) => string
  appPaths: InterfaceAppPaths
  mapScreens: (responseScreens: IScreen[] | null) => IScreen[] | null
  getBackendProjectName: () => string
  getBackendBaseUrl: () => string
  getAppUrl: () => string
  composeRequestPath: ({ requestPath }: IComposeRequestPathParams) => URL
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

  getBackendProjectName: (): string => {
    const projectName: string | undefined = process.env.BACKEND_PROJECT_NAME
    return typeof projectName === "string" ? projectName : "poc"
  },

  getBackendBaseUrl: (): string => {
    const baseUrl: string | undefined = process.env.BACKEND_BASE_URL
    return typeof baseUrl === "string"
      ? baseUrl
      : "http://192.168.50.239:8000/api/v1/"
  },
  composeRequestPath: ({ requestPath }: IComposeRequestPathParams): URL => {
    const apiBaseUrl: string = getHelpers.getBackendBaseUrl()
    return new URL(path.join(apiBaseUrl, requestPath))
  },
  getAppUrl: (): string => {
    const appUrl: undefined | string = process.env.NEXT_PUBLIC_APP_URL
    return typeof appUrl === "string" ? appUrl : "http://localhost:3000"
  },
}
export default getHelpers
