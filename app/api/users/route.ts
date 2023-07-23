import { NextRequest, NextResponse } from "next/server"
import { userEndpoints } from "@/src/modules/user-management/data/endpoints"
import { User } from "@/src/modules/user-management/domain/types/user"
import ApiClient from "@/src/utils/api-client"

import { DataResponse } from "@/components/data-table/data-response"

export async function GET(req: NextRequest): Promise<NextResponse> {
  const authorization = req.headers.get("Authorization")

  if (authorization) {
    const headers = {
      "x-screen-id": "6d9478a4-572e-4d54-bd08-c40bbd0d2b80",
      Authorization: authorization,
    }
    const apiClient = new ApiClient({ headers })
    const response = await apiClient.get<DataResponse<User>>(
      userEndpoints.allUsers + req.nextUrl.search
    )

    return NextResponse.json({ response })
  }

  return NextResponse.json("Unauthorized", { status: 401 })
}
