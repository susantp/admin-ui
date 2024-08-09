import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname, search, searchParams } = request.nextUrl
  const fromEncoded = encodeURIComponent(pathname + search)
  const token = request.cookies.get("token")
  const redirectUrl = new URL("/", request.url)
  const loginUrl = new URL(`/login?from=${fromEncoded}`, request.url)
  const isAuthentic = !!token
  const isLoginRegisterPage = ["/login", "/register"].includes(pathname)

  if (!isAuthentic && !isLoginRegisterPage)
    return NextResponse.redirect(loginUrl)
  if (isAuthentic && isLoginRegisterPage) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("Authorization", `Bearer ${token}`)
    const response = NextResponse
    response.next({
      request: {
        headers: requestHeaders,
      },
    })
    return response.redirect(redirectUrl)
  }
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
