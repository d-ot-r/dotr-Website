import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  // const path = req.nextUrl.pathname;
  const protectedPaths = ["/auth/admin", "/admin"];

  const isProtected = protectedPaths.some((p) =>
    req.nextUrl.pathname.startsWith(p)
  );

  // if (!process.env.JWT_SECRET) {
  //   throw new Error("JWT_SECRET is not defined");
  // }

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/admin/:path*", "/admin/:path*"],
};
