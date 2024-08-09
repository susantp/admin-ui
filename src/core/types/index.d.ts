export interface ApiResponse<T> {
  data: T
  status: string
}

export interface ErrorResponse {
  error: string
}

export interface ApiClient {
  get: <ResponseT>() => Promise<ApiResponse<ResponseT>>
  post: <ResponseT>(body: BodyInit) => Promise<ApiResponse<ResponseT>>
  put?: <RequestT, ResponseT>(
    endpoint: URL,
    data: RequestT
  ) => Promise<ResponseT>
  remove?: <ResponseT>(endpoint: URL) => Promise<ResponseT>
}

export interface AuthenticClientHeaders {
  "x-screen-id": string | null
}
