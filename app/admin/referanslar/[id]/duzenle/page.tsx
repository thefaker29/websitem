import EditRefClient from "./ref-client";
import { notFound } from "next/navigation";
async function getRef(id: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${base}/api/references/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}
export default async function EditRef({ params }: { params: { id: string } }) {
  const ref = await getRef(params.id);
  if (!ref) return notFound();
  return <EditRefClient refItem={ref} />;
}
