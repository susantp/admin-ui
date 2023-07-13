import path from "path"
import {
  IApiClientParams,
  InterfaceApiClient,
} from "@/src/modules/global/domain/types/api-client"
import { ApiResponse } from "@/src/types"

const apiClient = ({
  xScreen,
  requestPath,
  token,
}: IApiClientParams): InterfaceApiClient => {
  const apiBaseUrl: string | undefined = process.env.BACKEND_BASE_URL
  if (!apiBaseUrl) throw Error("Please validate all environment variables.")
  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  }
  const requestInit: RequestInit = { ...requestHeaders }

  const url: URL = new URL(path.join(apiBaseUrl, requestPath))

  if (token) {
    requestInit.headers = {
      ...requestHeaders,
      Authorization: `Bearer ${token}`,
    }
  }
  if (xScreen) {
    requestInit.headers = { ...requestHeaders, "X-SCREEN-ID": `${xScreen}` }
  }
  console.log("request to: ", requestPath, "\nrequest from Screen: ", xScreen)
  const handleResponse = async <T>(response: Response): Promise<T | null> => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }
    const data = (await response.json()) as ApiResponse<T>
    if (data.error) return null
    return data.data
  }
  const get = async <T>(): Promise<T | null> => {
    const response: Response = await fetch(url, requestInit)
    return handleResponse(response)
  }

  // const post = async <TRequest TResponse>({body}):Promise<TResponse>=>{
  //   const response: Response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       ...this.authorization,
  //     },
  //     body: JSON.stringify(data),
  //   })
  //
  //   return this.handleResponse(response)
  // }

  return { get }
}

export default apiClient
