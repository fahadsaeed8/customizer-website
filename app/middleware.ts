import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Read token from cookies
  const token = request.cookies.get("token")?.value;

  // Define protected routes
  const protectedRoutes = ["/dashboard", "/about", "/account"];

  const pathname = request.nextUrl.pathname;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

// Only run middleware on protected routes
export const config = {
  matcher: ["/dashboard/:path*", "/about", "/account/:path*"],
};
