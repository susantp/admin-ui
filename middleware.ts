import { NextResponse } from "next/server"
import { InterfaceAppPaths } from "@/src/modules/global/domain/types/helpers"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import { getToken, JWT } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"

export default withAuth(
  async (req) => {
    const token: JWT | null = await getToken({ req })
    const isAuth = !!token
    const { pathname, search } = req.nextUrl
    const { dashboard, home }: InterfaceAppPaths = getHelpers.appPaths

    if (["/login", "/register"].includes(pathname)) {
      if (isAuth) {
        return NextResponse.redirect(new URL(dashboard.path, req.url))
      }

      return null
    }

    if (isAuth) {
      return null
    }

    const from: string =
      pathname + search === home.path ? dashboard.path : pathname + search
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
