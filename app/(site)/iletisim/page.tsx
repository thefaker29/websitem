"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = { name: fd.get("name"), email: fd.get("email"), phone: fd.get("phone"), message: fd.get("message"), source: "contact" };
    const res = await fetch("/api/submissions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    setOk(res.ok);
    setLoading(false);
    if (res.ok) (e.target as HTMLFormElement).reset();
  }

  return (
    <main className="section">
      <div className="container-pro">
        <div className="mb-10 text-center">
          <div className="kicker">İletişim</div>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Projenizi konuşalım</h1>
          <div className="lux-divider" />
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">Kısa bir not bırakın; 24 saat içinde dönüş yapalım.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="glass p-6">
            <form onSubmit={submit} className="grid gap-3">
              <Input name="name" placeholder="Ad Soyad" />
              <Input name="email" type="email" placeholder="E‑posta" required />
              <Input name="phone" placeholder="Telefon (opsiyonel)" />
              <textarea name="message" className="min-h-[140px] rounded-md border bg-background px-3 py-2 text-sm outline-none ring-0" placeholder="Mesajınız" />
              <Button disabled={loading}>{loading ? "Gönderiliyor..." : "Gönder"}</Button>
              {ok && <div className="text-sm text-green-600">Teşekkürler! Mesajınız iletildi.</div>}
            </form>
          </div>
          <div className="glass p-6">
            <div className="text-sm text-muted-foreground">Süreç</div>
            <h2 className="mt-1 text-xl font-semibold">Nasıl ilerliyoruz?</h2>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>• 15 dakikalık tanışma ve hedeflerin netleştirilmesi</li>
              <li>• Kapsam ve yol haritası önerisi (doküman)</li>
              <li>• Tasarım ön çalışması (isteğe bağlı atölye günü)</li>
              <li>• Sprint planı ve lansman tarihi</li>
            </ul>
            <div className="mt-6 text-sm text-muted-foreground"><b>Yanıt Süresi:</b> 24 saat  •  <b>Ofis:</b> Uzaktan + İstanbul</div>
          </div>
        </div>
      </div>
    </main>
  );
}
