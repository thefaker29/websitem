import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { ADMIN_COOKIE } from "@/lib/auth";
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (Number.isNaN(id)) return NextResponse.json({ error: "Bad id" }, { status: 400 });
  const item = await prisma.reference.findUnique({ where: { id } });
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const isAdmin = cookies().get(ADMIN_COOKIE)?.value === "1";
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = Number(params.id);
  if (Number.isNaN(id)) return NextResponse.json({ error: "Bad id" }, { status: 400 });
  const body = await req.json();
  const { title, tag, blurb, imageUrl, isPublished } = body || {};
  const updated = await prisma.reference.update({ where: { id }, data: { title, tag, blurb, imageUrl, isPublished: !!isPublished } });
  return NextResponse.json(updated);
}
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const isAdmin = cookies().get(ADMIN_COOKIE)?.value === "1";
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = Number(params.id);
  if (Number.isNaN(id)) return NextResponse.json({ error: "Bad id" }, { status: 400 });
  await prisma.reference.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
