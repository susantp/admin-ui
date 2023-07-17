import path from "path"
import {
  IApiClientParams,
  InterfaceApiClient,
} from "@/src/modules/global/domain/types/api-client"
import {ApiResponse} from "@/src/types"
import getHelpers from "@/src/modules/global/domain/utils/helpers";

const apiClient = ({
                     xScreen,
                     requestPath,
                     token,
                   }: IApiClientParams): InterfaceApiClient => {
  const apiBaseUrl: string = getHelpers.getBackendProjectName()
  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  }
  const requestInit: RequestInit = {...requestHeaders}

  const url: URL = new URL(path.join(apiBaseUrl, requestPath))
  console.log(url)

  if (token) {
    requestInit.headers = {
      ...requestHeaders,
      Authorization: `Bearer ${token}`,
    }
  }
  if (xScreen) {
    requestInit.headers = {...requestHeaders, "X-SCREEN-ID": `${xScreen}`}
  }
  // console.log("request to: ", requestPath, "\nrequest from Screen: ", xScreen)
  const handleResponse = async <T>(response: Response): Promise<T | null> => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }
    const data: ApiResponse<T> = (await response.json()) as ApiResponse<T>
    if (data.error) return null
    return data.data
  }
  const getRequest = async <T>(): Promise<T | null> => {
    const response: Response = await fetch(url, requestInit)
    return handleResponse(response)
  }

  const postRequest = async <TRequest, TResponse>(payload: BodyInit): Promise<TResponse | null> => {
    const requestObject: RequestInit = {
      ...requestInit,
      body: JSON.stringify(payload),
      method: "POST"
    }
    const response: Response = await fetch(url, requestObject)

    return handleResponse(response)
  }

  return {getRequest, postRequest}
}

export default apiClient
