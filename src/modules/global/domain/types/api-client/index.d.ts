export interface INewApiClientParams {
  requestPath: string
  token: string | null
}

export interface InterfaceNewApiClient {
  get: <T>() => Promise<T | null>
}
