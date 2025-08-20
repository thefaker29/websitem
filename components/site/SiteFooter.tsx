import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/site/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container-pro py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Webza; özel yapım yazılım ve tasarım stüdyosu. Sessiz lüks için dijital zanaat.
            </p>
          </div>
          <div>
            <div className="text-sm font-medium">Hizmetler</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Özel Yazılım Geliştirme</li>
              <li>Web Tasarım & Deneyim</li>
              <li>Grafik & Marka Tasarımı</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium">Bağlantılar</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link className="hover:underline" href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link className="hover:underline" href="/referanslar">Referanslar</Link></li>
              <li><Link className="hover:underline" href="/iletisim">İletişim</Link></li>
              <li><a className="hover:underline" href="/admin/login">Admin</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium">Bülten</div>
            <div className="mt-3 flex max-w-sm gap-2">
              <Input placeholder="eposta@ornek.com" />
              <Button>Abone Ol</Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Aylık, gürültüsüz, faydalı içerikler.</p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col justify-between gap-3 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Webza — Tüm hakları saklıdır.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Gizlilik</a>
            <a href="#" className="hover:underline">Kullanım</a>
            <a href="#" className="hover:underline">Çerezler</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
