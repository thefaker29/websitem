"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SunMedium, Moon, Github, Twitter, Linkedin } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useThemeClient } from "@/components/site/ThemeClient";
import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/iletisim", label: "İletişim" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { dark, setDark } = useThemeClient();
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="container-pro flex items-center justify-between py-3">
        <Logo />
        <nav className="hidden gap-6 text-sm sm:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={cn("relative text-muted-foreground hover:text-foreground")}>
                <span>{item.label}</span>
                {active && <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary/60" />}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a className="hidden sm:inline-flex" href="/admin"><button className="rounded-md border px-3 py-1.5 text-xs hover:bg-muted">Admin</button></a>
          <div className="flex items-center gap-2 rounded-full border px-3 py-1 text-xs" aria-label="Tema">
            <SunMedium className="h-4 w-4" />
            <Switch checked={dark} onCheckedChange={setDark} />
            <Moon className="h-4 w-4" />
          </div>
          <div className="hidden gap-1 sm:flex">
            <a aria-label="Twitter" className="rounded-md border p-2 hover:bg-muted" href="#"><Twitter className="h-4 w-4" /></a>
            <a aria-label="GitHub" className="rounded-md border p-2 hover:bg-muted" href="#"><Github className="h-4 w-4" /></a>
            <a aria-label="LinkedIn" className="rounded-md border p-2 hover:bg-muted" href="#"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
