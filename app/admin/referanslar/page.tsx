import Link from "next/link";
type RefItem = { id: number; title: string; tag: string | null; blurb: string | null; isPublished: boolean };
async function getData(): Promise<RefItem[]> {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(base + "/api/references?all=1", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}
export default async function AdminRefs() {
  const data = await getData();
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Referanslar</h1>
        <Link href="/admin/referanslar/yeni" className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Yeni Ekle</Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead><tr className="border-b"><th className="p-2 text-left">Başlık</th><th className="p-2 text-left">Etiket</th><th className="p-2 text-left">Yayın</th><th className="p-2 text-left">İşlemler</th></tr></thead>
          <tbody>
            {data.map((r) => (
              <tr key={r.id} className="border-b">
                <td className="p-2">{r.title}</td>
                <td className="p-2">{r.tag}</td>
                <td className="p-2">{r.isPublished ? "Evet" : "Hayır"}</td>
                <td className="p-2 space-x-2"><Link href={`/admin/referanslar/${r.id}/duzenle`} className="underline">Düzenle</Link></td>
              </tr>
            ))}
            {data.length === 0 && <tr><td className="p-4 text-muted-foreground">Kayıt yok</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
