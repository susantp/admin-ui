export interface ApiResponse<TData, TMetaData> {
  data: TData
  metaData: TMetaData
}

export interface IData<TPayload> {
  message: string
  payload: TPayload
}

export interface IMetaData {
  error: string
  errorCode: string | number
  executionTime: number
}

export interface ICredentialsLoginPayload {
  token: string
}

export interface IRedirectPayload {
  redirectUrl: string
}

export interface ApiClient {
  get: <ResponseT>() => Promise<ResponseT>
  post: <ResponseT>(body: BodyInit) => Promise<ResponseT>
  put?: <ResponseT>(body: BodyInit) => Promise<ResponseT>
  remove?: <ResponseT>() => Promise<ResponseT>
}
