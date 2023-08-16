import { getServerSession } from "next-auth"

import { ApiClient, AuthenticClientHeaders } from "@/core/types"
import { getApiClient } from "@/core/utils/api-client"
import { authOptions } from "@/modules/auth/domain/auth-options"

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
