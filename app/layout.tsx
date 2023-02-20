import '@/styles/globals.css'
import { Inter as Font } from '@next/font/google'

const font = Font({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body className={`${font.variable} font-sans`}>{children}</body>
    </html>
  )
}
