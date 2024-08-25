import { NextRequest, NextResponse } from "next/server"

import { actionSetAuthToken } from "@/modules/login/domain/auth-actions"

export async function GET(request: NextRequest): Promise<NextResponse> {
  const callbackUrl = new URL(request.url)
  const params = new URLSearchParams(callbackUrl.search)
  const url = new URL(request.url)

  if (!params.get("token")) {
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  await actionSetAuthToken(params.get("token"))
  url.searchParams.delete("token")
  url.pathname = "/profile"
  return NextResponse.redirect(url)
}
