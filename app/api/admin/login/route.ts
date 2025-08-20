import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/auth";
export async function POST(req: Request) {
  const { password } = await req.json();
  if (!password) return NextResponse.json({ error: "Missing" }, { status: 400 });
  const ok = process.env.ADMIN_PASSWORD && password === process.env.ADMIN_PASSWORD;
  if (!ok) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "1", { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 8 });
  return res;
}
