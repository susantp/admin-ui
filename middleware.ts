import {getToken} from "next-auth/jwt";
import {NextRequest, NextResponse} from "next/server";


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|monitoring|login|register).*)",
  ],
}

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const {pathname} = request.nextUrl;
  const token = await getToken({
    req: request,
    secret: process.env.SECRET,
  });

  const unAuthenticatedRedirect = new URL(`/login`, request.url);
  unAuthenticatedRedirect.searchParams.set("callbackUrl", encodeURI(request.url))
  const unAuthorizedRewrite = new URL(`/403`, request.url)
  if (!token) {
    return NextResponse.redirect(unAuthenticatedRedirect);
  }
  if (['edit', 'delete', 'create'].includes(pathname) &&
    !["admin", "manager"].includes(token.role as string)) {
    return NextResponse.rewrite(unAuthorizedRewrite)
  }
  return res;
}


