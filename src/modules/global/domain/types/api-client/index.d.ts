export interface IClientParams {
  xScreen: string | null,
  method: string,
  body: BodyInit
}
export interface IGetRequestParams {
  requestPath: URL
  requestInit: RequestInit | undefined
}

export interface InterfaceApiClient {
  getRequest: <T>() => Promise<T | null>
  postRequest: <TRequest, TResponse>(payload: BodyInit) => Promise<TResponse | null>
}
