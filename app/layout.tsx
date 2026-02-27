import type React from "react"
import type { Metadata } from "next"
import { Roboto_Slab, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { InteractiveBackground } from "@/components/interactive-background"

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" })
const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "Electric Synapse — The signal between data and meaning",
  description:
    "Electric Synapse Guild (ESG) is a creative studio + AI platform turning sustainability and ESG data into stories people—and machines—act on.",
  generator: "v0.app",
  openGraph: {
    title: "Electric Synapse",
    description:
      "The signal between systems. Narrative intelligence + verification for credible sustainability storytelling.",
    url: "https://electricsynapse.ai",
    siteName: "Electric Synapse",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Electric Synapse - The signal between data and meaning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electric Synapse",
    description: "The signal between systems. Narrative intelligence for credible sustainability storytelling.",
    images: ["/og-image.jpg"],
  },
  keywords: ["ESG", "sustainability", "communications", "creative studio", "AI platform", "storytelling"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${robotoSlab.variable} font-sans antialiased`}>
        <InteractiveBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
