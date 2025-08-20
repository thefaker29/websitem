"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|undefined>();
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(undefined); setLoading(true);
    const fd = new FormData(e.currentTarget);
    const password = fd.get("password");
    const res = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    setLoading(false);
    if (res.ok) window.location.href = "/admin"; else setError("Hatalı şifre.");
  }
  return (
    <div className="grid min-h-screen place-content-center">
      <form onSubmit={submit} className="glass w-[360px] p-6">
        <div className="text-lg font-semibold">Admin Girişi</div>
        <div className="mt-4 grid gap-2">
          <Input type="password" name="password" placeholder="Şifre" required />
          <Button disabled={loading}>{loading ? "Giriş yapılıyor..." : "Giriş Yap"}</Button>
          {error && <div className="text-sm text-red-600">{error}</div>}
        </div>
      </form>
    </div>
  );
}
