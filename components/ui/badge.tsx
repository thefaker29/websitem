import * as React from "react";
import { cn } from "@/lib/utils";
export function Badge({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: "default"|"secondary"|"outline" }) {
  const variants = { default: "bg-primary text-primary-foreground", secondary: "bg-secondary text-secondary-foreground", outline: "border border-border" } as const;
  return <div className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs", variants[variant], className)} {...props} />;
}
