import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <img
        src="/images/es-logo-v3.png"
        alt="Electric Synapse Guild"
        className="h-16 w-auto object-contain"
      />
    </div>
  );
}
