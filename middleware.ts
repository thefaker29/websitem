import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/auth";
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const has = req.cookies.get(ADMIN_COOKIE)?.value === "1";
    if (!has) { const url = req.nextUrl.clone(); url.pathname = "/admin/login"; return NextResponse.redirect(url); }
  }
  return NextResponse.next();
}
export const config = { matcher: ["/admin/:path*"] };
