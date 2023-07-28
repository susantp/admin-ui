import { ApiClient, ApiResponse } from "@/src/common/types"

export const handleResponse = async (
  response: Response
): Promise<ApiResponse> => {
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return (await response.json()) as ApiResponse
}

export const getApiClient = (headers?: HeadersInit): ApiClient => {
  const get = async (endpoint: URL): Promise<ApiResponse> => {
    const response = await fetch(endpoint, {
      headers,
    })

    return handleResponse(response)
  }

  const post = async <T>(endpoint: URL, data: T): Promise<ApiResponse> => {
    const response: Response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    })

    return handleResponse(response)
  }

  const put = async <T>(endpoint: URL, data: T): Promise<ApiResponse> => {
    const response: Response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    })

    return handleResponse(response)
  }

  const remove = async (endpoint: URL): Promise<ApiResponse> => {
    const response: Response = await fetch(endpoint, {
      method: "DELETE",
      headers,
    })

    return handleResponse(response)
  }

  return { get, post, put, remove }
}
