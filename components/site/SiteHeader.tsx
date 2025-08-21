"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SunMedium, Moon, Github, Twitter, Linkedin, Menu, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useThemeClient } from "@/components/site/ThemeClient";
import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const nav = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/iletisim", label: "İletişim" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { dark, setDark } = useThemeClient();
  const [mobileOpen, setMobileOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  // ESC ile kapatma + scroll lock + basit odak yönetimi
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
      if (e.key === "Tab" && mobileOpen && sheetRef.current) {
        const focusables = Array.from(
          sheetRef.current.querySelectorAll<HTMLElement>(
            'a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute("disabled"));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) {
      const first = sheetRef.current?.querySelector<HTMLElement>("a,button");
      first?.focus();
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function openMobile() {
    lastFocus.current = (document.activeElement as HTMLElement) || null;
    setMobileOpen(true);
  }
  function closeMobile() {
    setMobileOpen(false);
    lastFocus.current?.focus?.();
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="container-pro flex items-center justify-between py-3">
        <Logo />

        {/* Masaüstü menü */}
        <nav className="hidden gap-6 text-sm sm:flex" aria-label="Ana menü (masaüstü)">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-muted-foreground hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary/60" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sağ aksiyonlar */}
        <div className="flex items-center gap-2">
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

          {/* Mobil menü butonu */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border p-2 hover:bg-muted sm:hidden"
            aria-label="Menüyü aç"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={openMobile}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobil: backdrop + sheet */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 grid place-items-start justify-end sm:hidden",
          mobileOpen ? "" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <button
          aria-label="Arka plan (kapat)"
          onClick={closeMobile}
          className={cn(
            "absolute inset-0 bg-black/50 transition-opacity",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Sheet */}
        <div
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          className={cn(
            "relative h-screen w-[88vw] max-w-sm translate-x-full border-l bg-background shadow-2xl transition-transform",
            "border-border",
            mobileOpen && "translate-x-0"
          )}
        >
          <div className="flex items-center justify-between border-b px-4 py-3">
            <div id="mobile-menu-title" className="text-sm font-semibold">
              Menü
            </div>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border p-2 hover:bg-muted"
              onClick={closeMobile}
              aria-label="Menüyü kapat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="px-2 py-2" aria-label="Ana menü (mobil)">
            <ul className="grid gap-1">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm hover:bg-muted",
                        active ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
                          </ul>
          </nav>

          {/* Mobil: tema + sosyal */}
          <div className="mt-2 border-t px-3 py-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Tema</span>
              <div className="flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <SunMedium className="h-4 w-4" />
                <Switch checked={dark} onCheckedChange={setDark} />
                <Moon className="h-4 w-4" />
              </div>
            </div>
            <div className="flex gap-2">
              <a aria-label="Twitter" className="flex-1 rounded-md border p-2 text-center hover:bg-muted" href="#"><Twitter className="mx-auto h-4 w-4" /></a>
              <a aria-label="GitHub" className="flex-1 rounded-md border p-2 text-center hover:bg-muted" href="#"><Github className="mx-auto h-4 w-4" /></a>
              <a aria-label="LinkedIn" className="flex-1 rounded-md border p-2 text-center hover:bg-muted" href="#"><Linkedin className="mx-auto h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
