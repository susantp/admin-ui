import {
  ApiResponse,
  IDeleteRequestParams,
  IGetRequestParams,
  INoContentApiResponse,
  IPostRequestParams,
} from "@/src/modules/global/domain/types/api-client"

const handleResponse = async <T>(response: Response): Promise<T> => {
  // Check if status is 204 (No Content), then return noContentObject object as T
  if (!response.ok) {
    throw new Error(`server fired. ${response.statusText}`)
  }
  if (response.status === 204) {
    const noContentObject: INoContentApiResponse = {
      message: "Successfully Deleted.",
      success: true,
    }
    return noContentObject as T
  }
  if(response.status >= 400){
    throw new Error(`${response.statusText}`)
  }
  // If status is not 204, assume content exists and parse it
  const apiResponse: ApiResponse<T> = (await response.json()) as ApiResponse<T>

  return apiResponse.data
}

const getRequest = async <T>({
  requestPath,
  requestInit,
}: IGetRequestParams): Promise<T> => {
  const response: Response = await fetch(requestPath, requestInit)
  return handleResponse(response)
}

const postRequest = async <TResponse>({
  requestPath,
  requestInit,
  body,
}: IPostRequestParams): Promise<TResponse> => {
  const init: RequestInit = { ...requestInit, method: "POST", body }
  const response: Response = await fetch(requestPath, init)

  return handleResponse(response)
}

const putRequest = async <TResponse>({
  requestPath,
  requestInit,
  body,
}: IPostRequestParams): Promise<TResponse> => {
  const init: RequestInit = { ...requestInit, method: "PUT", body }
  const response: Response = await fetch(requestPath, init)

  return handleResponse(response)
}

const deleteRequest = async <TResponse>({
  requestPath,
  requestInit,
}: IDeleteRequestParams): Promise<TResponse> => {
  const init: RequestInit = { ...requestInit, method: "DELETE" }
  const response: Response = await fetch(requestPath, init)

  return handleResponse(response)
}

export { getRequest, postRequest, putRequest, deleteRequest, handleResponse }
