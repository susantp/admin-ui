import { authOptions } from "@/auth/domain/config/auth-options"
import { ApiClient, AuthenticClientHeaders } from "@/src/core/types"
import { getApiClient } from "@/src/core/utils/get-api-client"
import { getServerSession } from "next-auth"

export const getAuthenticatedApiClient = async (
  headers?: AuthenticClientHeaders
): Promise<ApiClient> => {
  const session = await getServerSession(authOptions)
  const accessToken = session?.user.access

  if (!accessToken) throw new Error("Unauthenticated")

  const headersInit: HeadersInit = {
    Authorization: `Bearer ${accessToken}`,
  }

  if (headers) {
    Object.entries(headers).forEach(([key, value]) => {
      if (value) headersInit[key] = String(value)
    })
  }

  return getApiClient(headersInit)
}
