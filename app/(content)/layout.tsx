import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import '../globals.css'
import Navigation from '@/components/elements/Navigation'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={fontSans.variable}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
