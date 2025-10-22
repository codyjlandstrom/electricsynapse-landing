import { HeroSection } from "@/components/hero-section"
import { InteractiveBackground } from "@/components/interactive-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <InteractiveBackground />
      <HeroSection />
    </main>
  )
}
