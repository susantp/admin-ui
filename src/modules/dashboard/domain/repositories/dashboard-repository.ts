import {ApiResponse} from "@/src/types";
import {authEndpoints} from "@/auth/domain/config/auth-endpoints";
import path from "path";
import {
  InterfaceUserDetail
} from "@/src/modules/dashboard/domain/states/dashboard-atom";

interface InterfaceNewApiClient {
  get: () => Promise<ApiResponse<InterfaceUserDetail>>
}

export const newApiClient = (requestPath: string, token: string | null): InterfaceNewApiClient => {
  const requestUrl: URL = new URL(requestPath)
  const requestInit: RequestInit = {}
  if (token) {
    requestInit.headers = {Authorization: `Bearer ${token}`}
  }
  const handleResponse = async <T>(response: Response): Promise<T> => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }
    const data = (await response.json()) as ApiResponse<T>
    return data.data
  }
  const get = async (): Promise<ApiResponse<InterfaceUserDetail>> => {
    const response = await fetch(requestUrl, requestInit)
    return handleResponse(response)
  }


  return {get}
}

export interface InterfaceDashboardRepo {
  getUserDetail(token: string | undefined) : Promise<ApiResponse<InterfaceUserDetail> | null>
}

export default class DashboardRepository implements InterfaceDashboardRepo {
  private readonly baseUrl: string = "http://192.168.50.239:8000/api/v1/"

  public async getUserDetail(token: string | undefined): Promise<ApiResponse<InterfaceUserDetail> | null> {
    const requestPath = path.join(this.baseUrl, authEndpoints.userDetail)
    if (!token) return null
    return newApiClient(requestPath, token).get()
  }
}


