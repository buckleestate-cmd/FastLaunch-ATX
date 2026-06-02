import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FastLaunch ATX — Austin Small Business Websites',
  description: 'Professional websites for Austin small businesses delivered in 3–5 days. One flat fee of $800. No hidden costs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
