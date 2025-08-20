"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function PopupLead() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const dismissed = sessionStorage.getItem("webza-popup-dismissed");
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), 5000); // 5 seconds
    return () => clearTimeout(t);
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, phone,
          message: "Lansmana özel %25 avantaj için iletişim isteği",
          source: "popup"
        })
      });
      if (!res.ok) throw new Error("failed");
      setOk(true);
      sessionStorage.setItem("webza-popup-dismissed", "1");
      setTimeout(() => setOpen(false), 1500);
    } catch { } finally { setLoading(false); }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-content-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl border bg-background p-6 shadow-xl">
        {!ok ? (
          <>
            <div className="text-sm text-muted-foreground">Özel Davet</div>
            <h3 className="mt-1 text-xl font-semibold">%25 lansman avantajı için bilgilerinizi bırakın</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              İletişim bilgilerinizi paylaşın, 24 saat içinde size özel ön teklif ile dönüş yapalım.
            </p>
            <Separator className="my-4" />
            <form onSubmit={submit} className="grid gap-2">
              <Input placeholder="Ad Soyad" value={name} onChange={e=>setName(e.target.value)} />
              <Input placeholder="E‑posta" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
              <Input placeholder="Telefon" value={phone} onChange={e=>setPhone(e.target.value)} />
              <div className="mt-2 flex items-center gap-2">
                <Button type="submit" disabled={loading}>{loading ? "Gönderiliyor..." : "Bilgilerimi Gönder"}</Button>
                <Button type="button" variant="ghost" onClick={()=>{ sessionStorage.setItem("webza-popup-dismissed","1"); setOpen(false); }}>Kapat</Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="text-lg font-medium">Teşekkürler!</div>
            <div className="mt-1 text-sm text-muted-foreground">Bilgilerinizi aldık, kısa sürede dönüş yapacağız.</div>
          </div>
        )}
      </div>
    </div>
  );
}
