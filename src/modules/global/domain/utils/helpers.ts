import path from "path"
import { appPaths } from "@/src/modules/global/domain/objects/global"
import {
  IComposeRequestPathParams,
  InterfaceGetHelpers,
} from "@/src/modules/global/domain/types/helpers"
import { IScreen } from "@/src/modules/global/domain/types/repository/global-repository"
import { IPermission } from "@/src/modules/roles/domain/types/endpoints/role-endpoints"
import {
  IRolesMappedResponseData,
  IRolesOriginalResponseData,
} from "@/src/modules/roles/domain/types/repository"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const getHelpers: InterfaceGetHelpers = {
  appPaths,
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
  getUniqueScreensFromPermissionsResponseData: (
    data: IPermission[]
  ): string[] => {
    const uniqueScreensSet: Set<string> = new Set<string>()

    data.forEach((permission: IPermission) => {
      if (permission.screen) {
        uniqueScreensSet.add(permission.screen)
      }
    })
    return Array.from(uniqueScreensSet)
  },
  toTitleCase: (string: string): string =>
    string.charAt(0).toUpperCase() + string.substring(1),
  mapRolesData: (
    apiResponse: IRolesOriginalResponseData
  ): IRolesMappedResponseData => ({
    total: apiResponse.total,
    totalPage: apiResponse.total_page, // Mapping total_page to totalPage
    results: apiResponse.results,
  }),
}
export default getHelpers
