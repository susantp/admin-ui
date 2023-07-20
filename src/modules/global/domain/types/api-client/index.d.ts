export interface IClientParams {
  xScreen: string | null
  token: string | undefined
}
export interface IGetRequestParams {
  requestPath: URL
  requestInit: RequestInit
}
export interface IPostRequestParams {
  requestPath: URL
  requestInit: RequestInit
  body: BodyInit
}
export interface InterfaceApiClient {
  getRequest: <T>() => Promise<T | null>
  postRequest: <TResponse>(payload: BodyInit) => Promise<TResponse | null>
}

export interface ApiClientParams {
  baseUrl?: string
  accessToken?: string
}

export interface ApiResponse<T> {
  message: string
  data: T
  status: number
  error: string
}
