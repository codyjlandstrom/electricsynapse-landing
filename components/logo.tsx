import Image from "next/image"

export function Logo() {
  return (
    <div className="relative inline-flex items-center gap-3">
      <div className="relative w-12 h-12 md:w-14 md:h-14 bg-transparent">
        <Image
          src="/es-logo.png"
          alt="Electric Synapse logo"
          width={56}
          height={56}
          className="w-full h-full object-contain"
          style={{ background: "transparent" }}
        />
      </div>
      <div className="inline-flex items-center gap-0.5">
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Electric</span>
        <span className="relative text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          S
          <span
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-signal synapse-pulse"
            style={{ boxShadow: "0 0 8px oklch(0.78 0.14 75)" }}
            aria-hidden="true"
          />
          ynapse
        </span>
      </div>
    </div>
  )
}
