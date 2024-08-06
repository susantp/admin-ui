export interface ApiResponse<T> {
  data: T
  status: number
}

export interface ErrorResponse {
  error: string
}

export interface ApiClient {
  get: <ResponseT>(endpoint: URL) => Promise<ResponseT>
  post: <ResponseT>() => Promise<ResponseT>
  put: <RequestT, ResponseT>(
    endpoint: URL,
    data: RequestT
  ) => Promise<ResponseT>
  remove: <ResponseT>(endpoint: URL) => Promise<ResponseT>
}

export interface AuthenticClientHeaders {
  "x-screen-id": string | null
}
