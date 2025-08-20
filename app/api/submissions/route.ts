import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { ADMIN_COOKIE } from "@/lib/auth";

export async function GET() {
  const isAdmin = cookies().get(ADMIN_COOKIE)?.value === "1";
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const list = await prisma.submission.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(list);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message, budget, source } = body || {};
  // At least one contact method must exist
  if (!source || (!email && !phone)) {
    return NextResponse.json({ error: "Missing contact or source" }, { status: 400 });
  }
  const created = await prisma.submission.create({ data: { name, email, phone, message, budget, source } });
  return NextResponse.json({ ok: true, id: created.id });
}
