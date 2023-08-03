import { ApiClient, ApiResponse } from "@/core/types"

export const getApiClient = (headers?: HeadersInit): ApiClient => {
  const makeRequest = async (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<ApiResponse> => {
    const response = await fetch(input, init)
    return (await response.json()) as ApiResponse
  }

  const get = async (endpoint: URL): Promise<ApiResponse> =>
    makeRequest(endpoint, {
      headers,
    })

  const post = async <T>(endpoint: URL, data: T): Promise<ApiResponse> =>
    makeRequest(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    })

  const put = async <T>(endpoint: URL, data: T): Promise<ApiResponse> =>
    makeRequest(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    })

  const remove = async (endpoint: URL): Promise<ApiResponse> =>
    makeRequest(endpoint, {
      method: "DELETE",
      headers,
    })

  return { get, post, put, remove }
}
