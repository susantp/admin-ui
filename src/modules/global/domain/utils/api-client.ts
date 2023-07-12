import {
  INewApiClientParams,
  InterfaceNewApiClient
} from "@/src/modules/global/domain/types/api-client";
import path from "path";
import {ApiResponse} from "@/src/types";

const apiClient = ({
                     requestPath,
                     token
                   }: INewApiClientParams): InterfaceNewApiClient => {
  const requestUrl: URL = new URL(path.join("http://192.168.50.239:8000/api/v1/", requestPath))
  const requestInit: RequestInit = {}
  if (token) {
    requestInit.headers = {Authorization: `Bearer ${token}`}
  }
  const handleResponse = async <T>(response: Response): Promise<T | null> => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }
    const data = (await response.json()) as ApiResponse<T>
    if (data.error) return null
    return data.data
  }
  const get = async <T>(): Promise<T | null> => {
    const response: Response = await fetch(requestUrl, requestInit)
    return handleResponse(response)
  }

  return {get}
}

export default apiClient
