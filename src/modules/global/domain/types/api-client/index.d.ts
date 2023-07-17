import {Session} from "next-auth"

interface IClientParams {
  xScreen: string | null
  requestPath: string
}

export type IGetAuthClientParams = IClientParams
export type IGetPublicClientParams = IClientParams

export interface IApiClientParams extends IClientParams {
  token: string | null
}

export interface IGetClient {
  validateSession: () => Promise<Session | null>
  authentic: ({
                requestPath,
                xScreen,
              }: IGetAuthClientParams) => Promise<InterfaceApiClient | null>
  public: ({requestUrl}: IGetPublicClientParams) => InterfaceApiClient
}

export interface InterfaceApiClient {
  getRequest: <T>() => Promise<T | null>
  postRequest: <TRequest, TResponse>(payload: BodyInit) => Promise<TResponse | null>
}
