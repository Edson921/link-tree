import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'home-link-tree',
  description: 'A link tree site mde by sandy thinker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#e5e5e5]`}>{children}</body>
    </html>
  )
}
