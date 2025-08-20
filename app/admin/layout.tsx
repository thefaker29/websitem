import "../globals.css";
import { ReactNode } from "react";
export default function AdminLayout({ children }: { children: ReactNode }) {
  return (<html lang="tr"><body><main className="mx-auto max-w-6xl px-4 py-8">{children}</main></body></html>);
}
