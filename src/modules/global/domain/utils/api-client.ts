import {
  ApiResponse,
  IGetRequestParams,
  IPostRequestParams,
} from "@/src/modules/global/domain/types/api-client"

const handleResponse = async <T>(response: Response): Promise<T> => {
  const apiResponse: ApiResponse<T> = (await response.json()) as ApiResponse<T>
  if (!response.ok) {
    throw new Error(`${apiResponse.message}`)
  }
  return apiResponse.data
}
const postRequest = async <TResponse>({
  requestPath,
  requestInit,
  body,
}: IPostRequestParams): Promise<TResponse> => {
  const init = { ...requestInit, method: "POST", body }
  const response: Response = await fetch(requestPath, init)

  return handleResponse(response)
}

const getRequest = async <T>({
  requestPath,
  requestInit,
}: IGetRequestParams): Promise<T> => {
  const response: Response = await fetch(requestPath, requestInit)
  return handleResponse(response)
}

export { getRequest, postRequest, handleResponse }
