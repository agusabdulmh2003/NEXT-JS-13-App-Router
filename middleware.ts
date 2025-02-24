import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const adminToken = req.cookies.get("adminToken")?.value;

  if (!adminToken && req.nextUrl.pathname.startsWith("/posts")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (!adminToken && req.nextUrl.pathname.startsWith("/albums")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Halaman yang memerlukan autentikasi
export const config = {
  matcher: ["/posts/:path*", "/albums/:path*"],
};
