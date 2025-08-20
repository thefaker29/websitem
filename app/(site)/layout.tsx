import "../globals.css";
import { ReactNode } from "react";
import { Background } from "@/components/site/Background";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import PopupLead from "@/components/PopupLead";

export const metadata = {
  title: "Webza — Luxury Studio",
  description: "Özel yapım yazılım, web ve marka deneyimleri.",
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <Background />
        <SiteHeader />
        <PopupLead />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
