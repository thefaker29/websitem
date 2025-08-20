type RefItem = { id: number; title: string; tag: string | null; blurb: string | null; isPublished: boolean };
async function getData(): Promise<RefItem[]> {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(base + "/api/references", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}
export default async function ReferencesPage() {
  const data = await getData();
  return (
    <main className="section">
      <div className="container-pro">
        <div className="mb-10 text-center">
          <div className="kicker">Seçili işler</div>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Zarafet + Mühendislik</h1>
          <div className="lux-divider" />
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">Yayımlanmış işlerden bir seçki.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.map((c) => (
            <div key={c.id} className="glass p-6">
              <div className="text-xs text-muted-foreground">{c.tag}</div>
              <div className="mt-1 text-xl font-medium">{c.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{c.blurb}</div>
            </div>
          ))}
          {data.length === 0 && <div className="text-muted-foreground">Şu an yayımlanmış referans yok.</div>}
        </div>
      </div>
    </main>
  );
}
