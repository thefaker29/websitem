import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function AdminHome() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Yönetim</h1>
        <form action="/api/admin/logout" method="post"><Button type="submit" variant="outline">Çıkış</Button></form>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Link href="/admin/referanslar" className="rounded-xl border p-6 hover:bg-muted">Referanslar</Link>
        <Link href="/admin/formlar" className="rounded-xl border p-6 hover:bg-muted">Form Gönderimleri</Link>
        <a href="/referanslar" className="rounded-xl border p-6 hover:bg-muted">Siteyi Gör</a>
      </div>
    </div>
  );
}
