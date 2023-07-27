import { NextRequest, NextResponse } from "next/server"
import { userEndpoints } from "@/src/modules/user-management/data/endpoints"
import ApiClient from "@/src/utils/api-client"

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const authorization = req.headers.get("Authorization")

  if (authorization) {
    const headers = {
      "x-screen-id": "6d9478a4-572e-4d54-bd08-c40bbd0d2b80",
      Authorization: authorization,
    }
    const apiClient = new ApiClient({ headers })

    const response = await apiClient.post(
      userEndpoints.userActiveDeactive.replace(":id", params.id),
      {}
    )

    return NextResponse.json({ response })
  }

  return NextResponse.json("Unauthorized", { status: 401 })
}
