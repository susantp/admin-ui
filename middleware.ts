import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"

export default withAuth(
  async (req) => {
    const token = await getToken({ req })
    const isAuth = !!token
    const isAuthPage = ["/login", "/register"].includes(req.nextUrl.pathname)

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/", req.url))
      }

      return null
    }

    if (isAuth) return null

    const { pathname, search } = req.nextUrl
    const from = pathname + search
    const redirectUrl = new URL(
      `/login?from=${encodeURIComponent(from)}`,
      req.url
    )
    return NextResponse.redirect(redirectUrl)
  },
  {
    callbacks: {
      async authorized() {
        return Promise.resolve(true)
      },
    },
  }
)

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
