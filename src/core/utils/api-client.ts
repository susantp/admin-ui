import { put } from "@jridgewell/set-array"

import { ApiClient, ApiResponse, ErrorResponse } from "@/core/types"
import { TokenResponse } from "@/modules/auth/domain/types"

export const getApiClient = (
  endpoint: URL,
  requestInit: RequestInit = {}
): ApiClient => {
  const makeRequest = async <T>(
    method: string,
    body?: BodyInit
  ): Promise<ApiResponse<T>> => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...requestInit.headers,
    }
    const requestConfig: RequestInit = {
      method,
      headers,
      body: body ?? undefined,
    }
    try {
      const response: Response = await fetch(endpoint, requestConfig)
      return await response.json()
    } catch (error) {
      if (error instanceof TypeError) {
        throw Error("Could not connect to the server.")
      }
      throw Error("Something went wrong!")
    }
  }

  const get = <T>(): Promise<ApiResponse<T>> => makeRequest<T>("GET")
  const post = <T>(body?: any): Promise<ApiResponse<T>> =>
    makeRequest<T>("POST", body)

  // const put = async <ResponseT>(endpoint: URL, data: T): Promise<ResponseT> =>
  //   makeRequest(endpoint, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       ...headers,
  //     },
  //     body: JSON.stringify(data),
  //   })
  //
  // const remove = async <ResponseT>(endpoint: URL): Promise<ResponseT> =>
  //   makeRequest(endpoint, {
  //     method: "DELETE",
  //     headers,
  //   })

  return { get, post }
}
