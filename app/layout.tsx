import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Optica Ortuno',
  description: 'Especialistas en lentes multifocales digitales',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
