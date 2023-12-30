export interface IClientParams {
  xScreen: string | null
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

export interface IDeleteRequestParams{
  requestPath: URL
  requestInit: RequestInit
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

export interface INoContentApiResponse{
  message: string
  success: boolean
}
