import { NextResponse } from "next/server"
import { authOptions } from "@/auth/domain/config/auth-options"
import { AllUsersResponse } from "@/src/modules/user-management/data/api-endpoints"
import { userEndpoints } from "@/src/modules/user-management/data/endpoints"
import ApiClient from "@/src/utils/api-client"
import { getServerSession } from "next-auth"

export async function GET(): Promise<NextResponse> {
  const session = await getServerSession(authOptions)
  const accessToken = session?.user.access
  const headers = { "x-screen-id": "6d9478a4-572e-4d54-bd08-c40bbd0d2b80" }
  const apiClient = new ApiClient({ accessToken, headers })

  const response = await apiClient.get<AllUsersResponse>(userEndpoints.allUsers)

  return NextResponse.json({ body: response })
}
