import { NextRequest, NextResponse } from "next/server"

import { actionSetAuthToken } from "@/modules/login/domain/auth-actions"

export async function GET(request: NextRequest): Promise<NextResponse> {
  const {
    nextUrl: { searchParams },
  } = request
  const redirectUrl = new URL(request.nextUrl)

  if (!searchParams.get("token")) {
    redirectUrl.pathname = "/login"
    return NextResponse.redirect(redirectUrl)
  }

  await actionSetAuthToken(searchParams.get("token"))
  //TODO fetch user
  //TODO set user to cookie

  redirectUrl.searchParams.delete("token")
  redirectUrl.pathname = "/profile"

  return NextResponse.redirect(redirectUrl)
}
