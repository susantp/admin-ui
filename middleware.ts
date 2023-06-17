import {getToken, JWT} from "next-auth/jwt";
import {NextRequest, NextResponse} from "next/server";

const requireAuth: string[] = ["/dashboard"];

const checkRoleActions = (token: JWT | null, pathname: string, request: NextRequest): NextResponse | undefined => {
  if (
    ['edit', 'delete', 'create'].includes(pathname) &&
    !["admin", "manager"].includes(token?.role as string)
  ) {
    const url = new URL(`/403`, request.url);
    return NextResponse.rewrite(url);
  }
  return undefined
}
const checkUnauthenticated = (token: JWT | null, request: NextRequest): NextResponse | undefined => {
  if (!token) {
    const url = new URL(`/api/auth/signin`, request.url);
    url.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(url);
  }
  return undefined
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

  if (requireAuth.some((path) => pathname.startsWith(path))) {
    checkUnauthenticated(token, request)
    checkRoleActions(token, pathname, request)
  }
  return res;
}


