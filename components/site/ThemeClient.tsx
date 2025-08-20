"use client";
import { useEffect, useState } from "react";
export function useThemeClient() {
  const [dark, setDark] = useState(true);
  useEffect(()=>{
    try {
      const saved = localStorage.getItem("webza-theme");
      if (saved) setDark(saved === "dark");
      else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) setDark(true);
      else setDark(false);
    } catch {}
  }, []);
  useEffect(()=>{
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    try { localStorage.setItem("webza-theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);
  return { dark, setDark };
}
