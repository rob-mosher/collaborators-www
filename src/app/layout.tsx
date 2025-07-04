import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Collaborators Framework - Recognizing Diverse Contributions",
  description:
    "A framework for recognizing diverse and non-traditional contributions. The Collaborators Framework celebrates the broad spectrum of contributions that shape every project, honoring all collaborators—human, AI, and beyond.",
  keywords: ["collaboration", "contributors", "open source", "AI", "inclusive", "framework"],
  authors: [{ name: "Collaborators.group" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
