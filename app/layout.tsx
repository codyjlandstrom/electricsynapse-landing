import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

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
      <body className={`${geist.className} ${fraunces.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
