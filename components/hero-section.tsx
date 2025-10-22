import { Logo } from "@/components/logo"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <header className="w-full px-6 py-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <a
            href="mailto:hello@electricsynapse.ai"
            className="text-sm md:text-base text-foreground hover:text-accent transition-colors duration-200 font-medium"
            aria-label="Contact us via email"
          >
            Get in touch
          </a>
        </div>
      </header>

      <section className="relative w-full px-6 py-16 md:px-12 lg:px-16 flex-1 flex items-center">
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <img
            src="/abstract-environmental-sustainability-nature-techn.jpg"
            alt="Abstract environmental sustainability and nature technology"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            <span className="text-primary">The signal</span> that transforms data into stories.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl">
            We're <span className="font-medium text-foreground">Electric Synapse Guild (ESG)</span> — a creative studio
            + AI platform that turns sustainability and ESG data into credible content for people and machines.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:hello@electricsynapse.ai?subject=Early%20Access%20Request"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground shadow transition hover:opacity-95"
            >
              Request early access
            </a>
            <a
              href="mailto:hello@electricsynapse.ai"
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-base font-medium text-foreground/80 hover:text-foreground"
            >
              hello@electricsynapse.ai
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border/60 bg-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(78,205,196,0.15)]">
              <h3 className="font-semibold text-foreground">StoryFlow ESG</h3>
              <p className="mt-2 text-sm text-foreground/75">
                Narrative intelligence that converts ESG reports and raw data into budget-sensitive strategies and
                creative content, campaigns, and machine-readable releases.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[oklch(78%_0.14_75)] hover:bg-[oklch(78%_0.14_75)]/10 hover:shadow-[0_0_20px_rgba(255,191,105,0.15)]">
              <h3 className="font-semibold text-foreground">Synapse Guard</h3>
              <p className="mt-2 text-sm text-foreground/75">
                Verification, claims tracking, and audit trails to reduce greenwash risk.
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(138,123,255,0.15)]">
              <h3 className="font-semibold text-foreground">Studio Works</h3>
              <p className="mt-2 text-sm text-foreground/75">
                Senior storytellers and designers who craft the final film, page, and post.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full px-6 py-8 md:px-12 lg:px-16 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-transparent">
              <Image
                src="/es-logo.png"
                alt="Electric Synapse logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                style={{ background: "transparent" }}
              />
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Electric Synapse. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@electricsynapse.ai"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contact
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
