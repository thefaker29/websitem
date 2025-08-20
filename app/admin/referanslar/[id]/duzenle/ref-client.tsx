"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function EditRefClient({ refItem }: { refItem: any }) {
  const [loading, setLoading] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (loading) return; setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = { title: fd.get("title"), tag: fd.get("tag"), blurb: fd.get("blurb"), imageUrl: fd.get("imageUrl"), isPublished: fd.get("isPublished")==="on" };
    const res = await fetch(`/api/references/${refItem.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    setLoading(false); if (res.ok) window.location.href = "/admin/referanslar"; else alert("Güncellenemedi.");
  }
  async function del() {
    if (!confirm("Silmek istediğinize emin misiniz?")) return;
    setLoading(true);
    const res = await fetch(`/api/references/${refItem.id}`, { method: "DELETE" });
    setLoading(false); if (res.ok) window.location.href = "/admin/referanslar"; else alert("Silinemedi.");
  }
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-2xl font-semibold">Referansı Düzenle</h1>
      <form onSubmit={submit} className="mt-6 grid gap-3">
        <Input name="title" defaultValue={refItem.title ?? ""} required />
        <Input name="tag" defaultValue={refItem.tag ?? ""} />
        <textarea name="blurb" className="min-h-[120px] rounded-md border bg-background px-3 py-2 text-sm outline-none ring-0" defaultValue={refItem.blurb ?? ""} />
        <Input name="imageUrl" defaultValue={refItem.imageUrl ?? ""} />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="isPublished" defaultChecked={refItem.isPublished} /> Yayınla</label>
        <div className="flex gap-2">
          <Button disabled={loading} type="submit">{loading ? "Kaydediliyor..." : "Kaydet"}</Button>
          <Button type="button" variant="destructive" onClick={del} disabled={loading}>Sil</Button>
        </div>
      </form>
    </div>
  );
}
