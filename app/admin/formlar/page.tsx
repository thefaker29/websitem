type Sub = { id: number; name: string | null; email: string | null; phone: string | null; message: string | null; budget: string | null; source: string; createdAt: string };

async function getData(): Promise<Sub[]> {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(base + "/api/submissions", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function AdminForms() {
  const data = await getData();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Form Gönderimleri</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Kaynak</th>
              <th className="p-2 text-left">Ad</th>
              <th className="p-2 text-left">E‑posta</th>
              <th className="p-2 text-left">Telefon</th>
              <th className="p-2 text-left">Bütçe</th>
              <th className="p-2 text-left">Mesaj</th>
              <th className="p-2 text-left">Tarih</th>
            </tr>
          </thead>
          <tbody>
            {data.map((s) => (
              <tr key={s.id} className="border-b align-top">
                <td className="p-2">{s.source}</td>
                <td className="p-2">{s.name}</td>
                <td className="p-2">{s.email}</td>
                <td className="p-2">{s.phone}</td>
                <td className="p-2">{s.budget}</td>
                <td className="p-2 max-w-[360px] whitespace-pre-wrap">{s.message}</td>
                <td className="p-2">{new Date(s.createdAt).toLocaleString("tr-TR")}</td>
              </tr>
            ))}
            {data.length === 0 && <tr><td className="p-4 text-muted-foreground">Henüz gönderim yok.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
