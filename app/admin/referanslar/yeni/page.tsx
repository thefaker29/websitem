"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function NewRef() {
  const [loading, setLoading] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (loading) return; setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = { title: fd.get("title"), tag: fd.get("tag"), blurb: fd.get("blurb"), imageUrl: fd.get("imageUrl"), isPublished: fd.get("isPublished")==="on" };
    const res = await fetch("/api/references", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    setLoading(false); if (res.ok) window.location.href = "/admin/referanslar"; else alert("Kaydedilemedi.");
  }
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-2xl font-semibold">Yeni Referans</h1>
      <form onSubmit={submit} className="mt-6 grid gap-3">
        <Input name="title" placeholder="Başlık" required />
        <Input name="tag" placeholder="Etiket (kısa)" />
        <textarea name="blurb" className="min-h-[120px] rounded-md border bg-background px-3 py-2 text-sm outline-none ring-0" placeholder="Kısa açıklama" />
        <Input name="imageUrl" placeholder="Görsel URL (opsiyonel)" />
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="isPublished" /> Yayınla</label>
        <Button disabled={loading}>{loading ? "Kaydediliyor..." : "Kaydet"}</Button>
      </form>
    </div>
  );
}
