import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { SmoothScroll } from "@/components/smooth-scroll"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Elysium Hotel & Wellness | Luxury Boutique Resort",
  description:
    "Experience luxury and wellness at Elysium Hotel. Your exclusive escape with world-class amenities, fine dining, and spa services.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-serif: "${playfair.variable}";
          }
        `}</style>
      </head>
      <body className={`font-sans antialiased`}>
        <SmoothScroll>
          <Header />
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  )
}
