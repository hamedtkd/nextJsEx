import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['greek'] })

export const metadata: Metadata = {
  title: 'Image gallery',
  description: 'Tutorial project by coding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
