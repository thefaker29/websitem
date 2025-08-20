export default function About() {
  return (
    <main className="section">
      <div className="container-pro">
        <div className="mb-10 text-center">
          <div className="kicker">Hikayemiz</div>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Sessiz lüksün dijital dili</h1>
          <div className="lux-divider" />
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Webza; yazılım, web tasarım ve grafik/marka disiplinlerini tek masada buluşturan bir atölye.
            Gösterişten uzak, kalıcı etki bırakan deneyimler üretir.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { t: "Zanaat", d: "Tasarımı ve kodu birer üretim malzemesi gibi işleriz. Ölçülü animasyon, detaylı tipografi." },
            { t: "Mühendislik", d: "Tip güvenli mimari, otomasyon, test kültürü ve gözlemleme. Performans ve güvenlik en başta." },
            { t: "Sonuç", d: "Kararlar veriyle desteklenir: ölçüm, deney, dönüşüm. Sayılarla konuşuruz." },
          ].map((x) => (
            <div key={x.t} className="glass p-6">
              <div className="text-lg font-medium">{x.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{x.d}</div>
            </div>
          ))}
        </div>

        <section className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="glass p-6">
            <div className="text-sm text-muted-foreground">Yaklaşım</div>
            <h2 className="mt-1 text-xl font-semibold">Atölye ritmi</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Haftalık ritüeller: hedef güncelleme, maket ve akış testleri, teknik inceleme ve risk kontrol listeleri.
              Her teslimde anlamlı bir çıktı; sürpriz yok, netlik çok.
            </p>
          </div>
          <div className="glass p-6">
            <div className="text-sm text-muted-foreground">Değerler</div>
            <h2 className="mt-1 text-xl font-semibold">Az revizyon, çok netlik</h2>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>• Keşif ve kapsam net olmadan geliştirme yok.</li>
              <li>• Erişilebilirlik ve performans “sonradan” değil “başından”.</li>
              <li>• Tasarım kararları veriyle desteklenir.</li>
              <li>• Kod, yaşayan bir varlık; bakımı kolay, test edilebilir.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
