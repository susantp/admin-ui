export interface ApiResponse {
  message: string
  data: T
  status: number
  error: string
}

export interface ApiClient {
  get: (endpoint: URL) => Promise<ApiResponse>
  post: <T>(endpoint: URL, data: T) => Promise<ApiResponse>
  put: <T>(endpoint: URL, data: T) => Promise<ApiResponse>
  remove: (endpoint: URL) => Promise<ApiResponse>
}

export interface AuthenticClientHeaders {
  "x-screen-id": string | null
}
