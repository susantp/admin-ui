import {IGetRequestParams,} from "@/src/modules/global/domain/types/api-client"
import {ApiResponse} from "@/src/types"

// export   const postRequest = async <TRequest, TResponse>(payload: BodyInit): Promise<TResponse | null> => {
//   const requestObject: RequestInit = {
//     ...requestInit,
//     body: JSON.stringify(payload),
//     method: "POST"
//   }
//   const response: Response = await fetch(url, requestObject)
//
//   return handleResponse(response)
// }
const handleResponse = async <T>(response: Response): Promise<T | null> => {
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }
  const data: ApiResponse<T> = (await response.json()) as ApiResponse<T>
  if (data.error) return null
  return data.data
}
const getRequest = async <T>({
                               requestPath,
                               requestInit
                             }: IGetRequestParams): Promise<T | null> => {
  const {href} = requestPath
  const response: Response = await fetch(href, requestInit)
  return handleResponse(response)
}

export {getRequest, handleResponse}
