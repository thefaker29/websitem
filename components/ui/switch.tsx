"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
export function Switch({ checked, onCheckedChange, className, ...props }: { checked?: boolean; onCheckedChange?: (v: boolean) => void } & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button role="switch" aria-checked={checked} onClick={()=>onCheckedChange && onCheckedChange(!checked)} onKeyDown={(e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); onCheckedChange && onCheckedChange(!checked);}}}
      className={cn("relative inline-flex h-6 w-11 items-center rounded-full transition", checked ? "bg-primary/80" : "bg-muted", className)} {...props}>
      <span className={cn("inline-block h-5 w-5 transform rounded-full bg-background transition", checked ? "translate-x-5" : "translate-x-1")} />
    </button>
  );
}
