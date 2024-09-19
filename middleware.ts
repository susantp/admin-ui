import { NextRequest, NextResponse } from "next/server"

import { auth } from "@/modules/auth/config/auth"

export default auth((request) => {
  const { nextUrl } = request

  const fromUrl = nextUrl.pathname + nextUrl.search
  const loginUrl = new URL(`/login`, request.url)

  const isAuthentic = !!request.auth
  const isRegisterPage = ["/register"].includes(nextUrl.pathname)
  const isLoginPage = ["/login"].includes(nextUrl.pathname)

  if (!isAuthentic && !isRegisterPage && !isLoginPage) {
    loginUrl.searchParams.append("from", fromUrl)
    return NextResponse.redirect(loginUrl)
  }
  if (isAuthentic && (isRegisterPage || isLoginPage)) {
    return NextResponse.redirect(
      new URL(process.env.NEXT_PUBLIC_REDIRECT_URL ?? "/dashboard", request.url)
    )
  }
  return NextResponse.next()
})

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
