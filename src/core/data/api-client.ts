import { ApiClient } from "@/core/data/index"
import { actionGetAuthToken } from "@/modules/auth/domain/cookie-service"

export const getApiClient = (
  endpoint: URL,
  requestInit: RequestInit = {}
): ApiClient => {
  const makeRequest = async <T>(
    method: string,
    body?: BodyInit
  ): Promise<T> => {
    const headers: Headers = new Headers(requestInit.headers)
    headers.set("Accept", "application/json")
    headers.set("Content-Type", "application/json")
    headers.set(
      "Authorization",
      "Bearer ".concat((await actionGetAuthToken()) ?? "")
    )
    const requestConfig: RequestInit = {
      method,
      headers,
      body: body ?? undefined,
    }
    console.log(requestConfig.headers)
    try {
      const response: Response = await fetch(endpoint, requestConfig)
      return (await response.json()) as T
    } catch (error) {
      if (error instanceof TypeError) {
        throw Error("Could not connect to the server.")
      }
      throw Error("Something went wrong!")
    }
  }

  const get = <T>(): Promise<T> => makeRequest<T>("GET")
  const post = <T>(body: BodyInit): Promise<T> => makeRequest<T>("POST", body)

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
