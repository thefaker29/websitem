export default function About() {
  return (
    <main className="section">
      <div className="container-pro">
        {/* HERO */}
        <div className="mb-10 text-center">
          <div className="kicker">Hikâyemiz</div>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Sessiz lüksün dijital zanaati</h1>
          <div className="lux-divider" />
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Webza; <b>yazılım stüdyosu</b> hassasiyetiyle çalışan, <b>web tasarım</b> ve <b>marka</b> disiplinlerini aynı masada buluşturan bir ekip.
            Gösteriş yerine kalıcı etkiyi tercih ederiz: her pikselin bir gerekçesi, her akışın ölçülebilir bir hedefi vardır.
            Tip güvenli kod, erişilebilirlik ve performans bizim için “ekstra” değil, işin doğasıdır.
          </p>
        </div>

        {/* PİLARLAR */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              t: "Zanaat",
              d: "Tasarımı ve kodu birer malzeme gibi işleriz. Grid, tipografi ve beyaz alan; ölçülü mikro etkileşimlerle birleşir.",
            },
            {
              t: "Mühendislik",
              d: "TypeScript/Next.js, bileşen kütüphanesi, otomasyon ve test kültürü. Performans ve güvenlik en baştan tasarlanır.",
            },
            {
              t: "Sonuç",
              d: "Kararlar veriyle desteklenir: ölçüm, deney, dönüşüm. Hız ve erişilebilirlik metrikleriyle konuşuruz (Lighthouse 90+ hedefi).",
            },
          ].map((x) => (
            <div key={x.t} className="glass p-6">
              <div className="text-lg font-medium">{x.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{x.d}</div>
            </div>
          ))}
        </div>

        {/* İKİLİ BLOK */}
        <section className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="glass p-6">
            <div className="text-sm text-muted-foreground">Yaklaşım</div>
            <h2 className="mt-1 text-xl font-semibold">Atölye ritmi</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Haftalık sprint’ler; hedef ve kapsamın netleştiği ritüeller, prototip testleri ve teknik incelemelerle ilerler.
              Her hafta anlamlı bir teslim, sürprizsiz ve şeffaf bir süreç.
            </p>
          </div>
          <div className="glass p-6">
            <div className="text-sm text-muted-foreground">Değerler</div>
            <h2 className="mt-1 text-xl font-semibold">Az revizyon, çok netlik</h2>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>• Keşif ve kapsam net değilse üretime başlamayız.</li>
              <li>• Erişilebilirlik (A11y) ve performans baştan kurgulanır.</li>
              <li>• Tasarım kararları veriye ve teste dayanır.</li>
              <li>• Kod yaşayan bir varlıktır: bakımı kolay, test edilebilir, ölçeklenebilir.</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12">
          <div className="glass flex flex-col items-center justify-between gap-4 p-6 md:flex-row">
            <div className="text-center md:text-left">
              <div className="text-xs uppercase tracking-wide opacity-90">Birlikte üretelim</div>
              <h3 className="mt-1 text-xl font-semibold">Markanıza sessiz lüks dokunuşu için tanışalım</h3>
              <p className="mt-1 text-sm text-muted-foreground">15 dakikalık bir keşif görüşmesiyle ihtiyacı netleştirir, doğru çözüm yolunu belirleriz.</p>
            </div>
            <a href="/iletisim" className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-muted">Bize Ulaşın</a>
          </div>
        </section>
      </div>
    </main>
  );
}
