import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

import { ApiResponse, IData, IMetaData, IRedirectPayload } from "@/core/data"
import { IAppError } from "@/core/presentation/models"
import { redirectPaths } from "@/core/presentation/models/redirectPaths"
import { createUrl, tokenKey } from "@/core/utils/helpers"
import { endpoints } from "@/modules/auth/config/endpoints"
import { IUserPayload } from "@/modules/user-profile/presentation/models/default"

const errorResponse: IAppError = {
  error: "Please contact support",
  errorCode: "SERVER_ERROR",
  executionTime: 0,
}
const redirectPayload: IRedirectPayload = {
  redirectUrl: redirectPaths.login,
}

const successResponseStatus: ResponseInit = { status: 200 }
const errorResponseStatus: ResponseInit = { status: 500 }
const { authCheck } = endpoints

export async function GET(
  request: NextRequest
): Promise<NextResponse<IUserPayload | IAppError | IRedirectPayload>> {
  const authToken: string | undefined = request.cookies.get(tokenKey)?.value

  if (!authToken) {
    console.log("api", headers())

    return NextResponse.json(redirectPayload)
  }

  request.headers.set("Authorization", `Bearer ${authToken}`)
  request.headers.set("Accept", "application/json")

  try {
    const response = await fetch(createUrl(authCheck), {
      headers: request.headers,
    })
    const data = (await response.json()) as ApiResponse<
      IData<IUserPayload>,
      IMetaData
    >

    if ("user" in data.data.payload) {
      const user: IUserPayload = data.data.payload
      return NextResponse.json(user, successResponseStatus)
    }
    if ("error" in data.metaData && data.metaData.error.length > 0) {
      request.cookies.delete(tokenKey)
      return NextResponse.json(redirectPayload, successResponseStatus)
    }
    return NextResponse.json(errorResponse, errorResponseStatus)
  } catch (e) {
    return NextResponse.json(errorResponse, errorResponseStatus)
  }
}
