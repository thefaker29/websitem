"use client";
import React, { useId, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Rocket, BarChart2, LineChart, Users, Check, Sparkles, ShieldCheck, Cpu, Palette, Layers, Globe, Zap, Award } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Input } from "@/components/ui/input";

const outcomes = [
  { label: "Ortalama satış artışı", value: "↑ %50" },
  { label: "Organik trafik", value: "↑ %70" },
  { label: "Dönüşüm oranı", value: "↑ %35" },
  { label: "Sayfa hızı (TTFB)", value: "↓ %40" },
];

const stages = [
  { icon: Layers, title: "Keşif & Strateji", text: "Hedef ve kısıtlar netleşir; riskler erken görünür." },
  { icon: Palette, title: "Tasarım İzlek", text: "Wireframe → Görsel dil → Prototip. Test ve yineleme." },
  { icon: Cpu, title: "Geliştirme", text: "Tip güvenli mimari, otomatik test ve CI/CD." },
  { icon: ShieldCheck, title: "Kalite", text: "Erişilebilirlik, güvenlik ve performans regreyon testleri." },
  { icon: Globe, title: "Lansman & Büyüme", text: "Gözlemleme, A/B ve sürekli iyileştirme." },
];

const chartData = [
  { m: "Oca", s: 100 },
  { m: "Şub", s: 110 },
  { m: "Mar", s: 118 },
  { m: "Nis", s: 135 },
  { m: "May", s: 150 },
  { m: "Haz", s: 165 },
  { m: "Tem", s: 175 },
];

function GrowthChart() {
  const id = useId();
  const data = useMemo(()=>chartData, []);
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
          <defs>
            <linearGradient id={`grad-${id}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="currentColor" stopOpacity={0.35} />
              <stop offset="95%" stopColor="currentColor" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeOpacity={0.15} vertical={false} />
          <XAxis dataKey="m" tickMargin={8} tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} width={28} />
          <Tooltip contentStyle={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }} />
          <Area type="monotone" dataKey="s" stroke="currentColor" fill={`url(#grad-${id})`} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function HeroQuoteForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      phone: fd.get("phone"),
      budget: fd.get("budget"),
      message: fd.get("message"),
      source: "hero-quote"
    };
    const res = await fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    setOk(res.ok);
    setLoading(false);
    if (res.ok) (e.target as HTMLFormElement).reset();
  }

  return (
    <Card className="glass">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Hızlı Teklif</CardTitle>
        <div className="text-sm text-muted-foreground">1 dakikada; sadece temel bilgileri yazın.</div>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className="grid gap-3">
          <Input name="name" placeholder="Ad Soyad" required />
          <Input name="phone" placeholder="Telefon" required />
          <Input name="budget" placeholder="Bütçe (örn. ₺50.000 - ₺120.000)" required />
          <textarea name="message" className="min-h-[100px] rounded-md border bg-background px-3 py-2 text-sm outline-none ring-0" placeholder="Kısa brief (amaç, hedef kitle, örnekler)"/>
          <Button disabled={loading}>{loading ? "Gönderiliyor..." : "Teklif Al"}</Button>
          {ok && <div className="text-sm text-green-600">Teşekkürler! 24 saat içinde ön teklif ile döneceğiz.</div>}
        </form>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <main>
      {/* HERO — Left story, Right quote form */}
      <section className="section">
        <div className="container-pro">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div>
              <div className="kicker"><Award className="mr-1 inline-block h-4 w-4" /> Sessiz lüks için dijital zanaat</div>
              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">Hikâye anlatan lüks deneyimler</h1>
              <div className="lux-divider" />
              <p className="mt-4 text-muted-foreground">
                Webza; yazılım, web ve marka tasarımını bir araya getirir.
                Gösterişsiz mükemmellik: her pikselin bir nedeni, her akışın bir ritmi vardır.
                Ölçülü animasyon, tip güvenli kod, veriyle doğrulanan kararlar.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> İş hedefleriyle uyumlu hikâye ve estetik</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> Performans, erişilebilirlik ve güvenlikte üst seviye</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> Yönetilebilir, ölçeklenebilir mimari</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="/referanslar"><Button className="gap-2" variant="secondary">İşlerimizi Gör <ArrowRight className="h-4 w-4" /></Button></a>
                <a href="#hizmetler"><Button className="gap-2">Hizmetler</Button></a>
              </div>
            </div>
            <HeroQuoteForm />
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="section-divider" />

      {/* OUTCOMES */}
      <section className="section">
        <div className="container-pro">
          <div className="mb-10 text-center">
            <div className="kicker"><BarChart2 className="h-4 w-4" /> Sonuç Odaklı</div>
            <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Çalıştığımız markalar nasıl büyüyor?</h2>
            <div className="lux-divider" />
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">Kreatif ve mühendisliği birlikte kurguluyoruz; ölçülebilir iş çıktıları elde ediyoruz.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {outcomes.map((o) => (
              <Card key={o.label} className="glass">
                <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">{o.label}</CardTitle></CardHeader>
                <CardContent><div className="text-3xl font-bold">{o.value}</div></CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <Card className="glass">
              <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base"><LineChart className="h-4 w-4" /> 6 Aylık Büyüme Eğrisi</CardTitle></CardHeader>
              <CardContent><GrowthChart /></CardContent>
            </Card>
            <Card className="glass">
              <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base"><Users className="h-4 w-4" /> Deneyim & Dönüşüm</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Ölçümlediğimiz projelerde checkout akışında ortalama <b>%22</b> daha az adım, mobilde <b>%31</b> daha kısa tamamlanma süresi elde ettik.
                Erişilebilirlik ve performans skorları (Lighthouse) <b>90+</b>.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="section-divider" />

      {/* SERVICES anchor for CTA */}
      <section id="hizmetler" className="section">
        <div className="container-pro">
          <div className="mb-10 text-center">
            <div className="kicker"><Sparkles className="h-4 w-4" /> Disiplinler</div>
            <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Yazılım • Web Tasarım • Grafik & Marka</h2>
            <div className="lux-divider" />
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">Üç disiplin, tek masada. Tutarlı kimlik, hızlı ürün ve ölçülebilir sonuç.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { icon: Cpu, title: "Özel Yazılım", points: ["Tip güvenli mimari", "Edge & bulut", "Test & güvenlik"] },
              { icon: Palette, title: "Web Tasarım", points: ["A11y & SEO", "Ölçülü motion", "Komponent kütüphanesi"] },
              { icon: ShieldCheck, title: "Grafik & Marka", points: ["Logo/kit", "Tipografi sistemi", "Görsel dil"] },
            ].map((s) => (
              <Card key={s.title} className="glass">
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="grid h-10 w-10 place-content-center rounded-xl bg-muted"><s.icon className="h-5 w-5" /></div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">{s.points.map((p) => <li key={p} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" />{p}</li>)}</ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL FULL-WIDTH CTA RIBBON */}
      <section className="py-0">
        <div className="cta-ribbon">
          <div className="container-pro flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
            <div className="text-center md:text-left">
              <div className="text-xs uppercase tracking-wide opacity-90">Birlikte Büyüyelim</div>
              <h3 className="mt-1 text-2xl font-semibold">Firmamız ile çalışıp büyümeni hızlandırmak ister misin?</h3>
            </div>
            <a href="/iletisim">
              <Button size="lg" className="shadow-md">Bize Ulaş</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
