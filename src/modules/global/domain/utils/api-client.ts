import {
  ApiResponse,
  IGetRequestParams,
  IPostRequestParams,
} from "@/src/modules/global/domain/types/api-client"

const handleResponse = async <T>(response: Response): Promise<T > => {
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }
  const data: ApiResponse<T> = (await response.json()) as ApiResponse<T>
  if (data.error) throw new Error("response data has error")
  return data.data
}
const postRequest = async <TRequest, TResponse>({
                                                  requestPath,
                                                  requestInit,
                                                  body
                                                }: IPostRequestParams): Promise<TResponse | null> => {
  const init = {...requestInit, method: "POST", body}
  const response: Response = await fetch(requestPath, init)

  return handleResponse(response)
}

const getRequest = async <T>({
                               requestPath,
                               requestInit
                             }: IGetRequestParams): Promise<T | null> => {
  const response: Response = await fetch(requestPath, requestInit)
  return handleResponse(response)
}

export {getRequest, postRequest, handleResponse}
