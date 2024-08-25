export interface ApiResponse {
  data: {
    message: string
    payload: object
  }
  metaData: {
    error: string
    errorCode: string | number
  }
}

export interface ErrorResponse {
  error: string
}

export interface ApiClient {
  get: <ResponseT>() => Promise<ResponseT>
  post: <ResponseT>(body: BodyInit) => Promise<ResponseT>
  put?: <ResponseT>(body: BodyInit) => Promise<ResponseT>
  remove?: <ResponseT>() => Promise<ResponseT>
}

export interface AuthenticClientHeaders {
  "x-screen-id": string | null
}
