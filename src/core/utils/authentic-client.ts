import { ApiClient, AuthenticClientHeaders } from "@/core/types"
import { getApiClient } from "@/core/utils/api-client"
import { getAuthToken } from "@/modules/auth/data/auth-service"

export const getAuthenticatedApiClient = async (
  headers?: AuthenticClientHeaders
): Promise<ApiClient> => {
  const accessToken = getAuthToken()

  if (!accessToken) throw new Error("Unauthenticated")
  const headersInit: HeadersInit = {
    Authorization: `Bearer ${accessToken.value}`,
  }

  if (headers) {
    Object.entries(headers).forEach(([key, value]) => {
      if (value) headersInit[key] = String(value)
    })
  }
  const requestInit: RequestInit = {
    headers: { ...headersInit },
  }
  return getApiClient(new URL(""), requestInit)
}
