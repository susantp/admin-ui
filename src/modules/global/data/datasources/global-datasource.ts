import path from "path"
import { authEndpoints } from "@/auth/domain/config/auth-endpoints"
import IGlobalRepository from "@/src/modules/global/data/repositories/global-repository-impl"
import { IScreen } from "@/src/modules/global/domain/types/global-type"
import { ApiResponse } from "@/src/types"

interface InterfaceNewApiClient {
  get: () => Promise<IScreen[] | null>
}

export const newApiClient = (
  requestPath: string,
  token: string | null
): InterfaceNewApiClient => {
  const requestUrl: URL = new URL(requestPath)
  const requestInit: RequestInit = {}
  if (token) {
    requestInit.headers = { Authorization: `Bearer ${token}` }
  }
  const handleResponse = async <T>(response: Response): Promise<T | null> => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }
    const data = (await response.json()) as ApiResponse<T>
    if (data.error) return null
    return data.data
  }
  const get = async (): Promise<IScreen[] | null> => {
    const response = await fetch(requestUrl, requestInit)
    return handleResponse<Promise<IScreen[]> | null>(response)
  }

  return { get }
}

export class GlobalDatasource implements IGlobalRepository {
  private readonly baseUrl: string = "http://192.168.50.239:8000/api/v1/"

  async fetchUserScreens(
    accessToken: string | undefined
  ): Promise<IScreen[] | null> {
    const requestPath = path.join(this.baseUrl, authEndpoints.userScreens)
    if (!accessToken) return null
    return newApiClient(requestPath, accessToken).get()
  }
}
