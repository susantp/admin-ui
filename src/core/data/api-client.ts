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
    const authToken: string | undefined = await actionGetAuthToken()
    if (authToken !== undefined) {
      headers.set(
        "Authorization",
        "Bearer ".concat((await actionGetAuthToken()) ?? "")
      )
    }

    const requestConfig: RequestInit = {
      method,
      headers,
      body: body ?? undefined,
    }
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

  const get = <TResponse>(): Promise<TResponse> => makeRequest<TResponse>("GET")
  const post = <TResponse>(body: BodyInit): Promise<TResponse> =>
    makeRequest<TResponse>("POST", body)

  return { get, post }
}
