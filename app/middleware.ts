import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  console.log("🔥 middleware hit:", pathname, "token:", !!token);

  // Public routes that don't require authentication
  const publicRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/otp",
  ];

  // Check if current route is a public route
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Case 1: If user has token and tries to access login/signup pages, redirect to home
  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Case 2: If user doesn't have token and tries to access protected routes, redirect to login
  // This protects ALL routes except public auth routes
  if (!token && !isPublicRoute) {
    console.log("🚫 No token, redirecting to login from:", pathname);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Case 3: User has token and accessing protected routes - allow access
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
