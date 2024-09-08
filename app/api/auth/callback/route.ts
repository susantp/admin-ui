import { NextRequest, NextResponse } from "next/server"

import { redirectPaths } from "@/core/presentation/models/redirectPaths"
import { actionSetAuthToken } from "@/modules/auth/domain/cookie-service"

export async function GET(request: NextRequest): Promise<NextResponse> {
  const {
    nextUrl: { searchParams },
  } = request

  const redirectUrl = new URL(request.nextUrl)
  const paramToken: string | null = searchParams.get("token")

  if (!paramToken) {
    redirectUrl.pathname = redirectPaths.login
    return NextResponse.redirect(redirectUrl)
  }

  await actionSetAuthToken(paramToken)
  // TODO fetch user
  // TODO set user to cookie

  redirectUrl.searchParams.delete("token")
  redirectUrl.pathname = "/profile"
  return NextResponse.redirect(redirectUrl)
}
