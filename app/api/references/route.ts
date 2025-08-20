import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { ADMIN_COOKIE } from "@/lib/auth";
export async function GET(req: Request) {
  const url = new URL(req.url);
  const all = url.searchParams.get("all");
  const isAdmin = cookies().get(ADMIN_COOKIE)?.value === "1";
  const where = all && isAdmin ? {} : { isPublished: true };
  const list = await prisma.reference.findMany({ where, orderBy: { createdAt: "desc" } });
  return NextResponse.json(list);
}
export async function POST(req: Request) {
  const isAdmin = cookies().get(ADMIN_COOKIE)?.value === "1";
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const { title, tag, blurb, imageUrl, isPublished } = body || {};
  if (!title) return NextResponse.json({ error: "Missing title" }, { status: 400 });
  const created = await prisma.reference.create({ data: { title, tag, blurb, imageUrl, isPublished: !!isPublished } });
  return NextResponse.json(created);
}
