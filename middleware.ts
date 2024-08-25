import { NextRequest, NextResponse } from "next/server"

import { actionGetAuthToken } from "@/modules/login/domain/auth-actions"

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const { nextUrl } = request

  const fromUrl = nextUrl.pathname + nextUrl.search
  const serverToken = await actionGetAuthToken()
  const loginUrl = new URL(`/login`, request.url)

  const isAuthentic = !!serverToken
  const isRegisterPage = ["/register"].includes(nextUrl.pathname)
  const isLoginPage = ["/login"].includes(nextUrl.pathname)

  if (!isAuthentic && !isRegisterPage && !isLoginPage) {
    loginUrl.searchParams.append("from", fromUrl)
    return NextResponse.redirect(loginUrl)
  }

  if (isAuthentic && isRegisterPage && isLoginPage) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("Authorization", `Bearer ${serverToken?.value}`)
    NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
    return NextResponse.redirect(new URL("/", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico|monitoring).*)",
  ],
}
