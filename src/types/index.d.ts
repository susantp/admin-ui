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
