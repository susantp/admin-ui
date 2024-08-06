import { ApiClient, ApiResponse } from "@/core/types"

export const getApiClient = (
  endpoint: URL,
  request: RequestInit
): ApiClient => {
  const makeRequest = async <ResponseT>(
    request: RequestInit
  ): Promise<ResponseT> => {
    console.log(request)
    try {
      const response: Response = await fetch(endpoint, request)
      return (await response.json()) as ResponseT
    } catch (error) {
      if (error instanceof TypeError) {
        throw Error("Could not connect to the server.")
      }
      throw Error("Something went wrong!")
    }
  }

  const get = async <ResponseT>(): Promise<ResponseT> =>
    makeRequest({ ...request })

  const post = async <ResponseT>(): Promise<ResponseT> => {
    return makeRequest<ApiResponse<ResponseT>>({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      ...request,
    })
  }

  const put = async <ResponseT>(endpoint: URL, data: T): Promise<ResponseT> =>
    makeRequest(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    })

  const remove = async <ResponseT>(endpoint: URL): Promise<ResponseT> =>
    makeRequest(endpoint, {
      method: "DELETE",
      headers,
    })

  return { get, post, put, remove }
}
