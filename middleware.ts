import {NextResponse} from "next/server"
import {getToken, JWT} from "next-auth/jwt"
import {withAuth} from "next-auth/middleware"
import getHelpers from "@/src/utils/helpers";
import {InterfaceAppPath} from "@/src/modules/global/domain/types/global-type";

export default withAuth(
  async (req) => {
    const token: JWT|null = await getToken({req})
    const isAuth = !!token
    const isAuthPage:boolean = ["/login", "/register"].includes(req.nextUrl.pathname)

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/", req.url))
      }

      return null
    }

    if (isAuth) return null

    const {pathname, search} = req.nextUrl
    const dashboardPath: InterfaceAppPath = getHelpers().appPaths().filter(path => path.name.includes('dashboard'))[0]
    const from:string = pathname + search === "/" ? dashboardPath.name : pathname + search
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
