import { Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-content-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-600 text-black shadow-lg shadow-amber-500/30">
        <Crown className="h-5 w-5" />
      </div>
      <span className="text-lg font-semibold tracking-tight">Webza</span>
      <Badge className="ml-1" variant="secondary">Atelier</Badge>
    </div>
  );
}
