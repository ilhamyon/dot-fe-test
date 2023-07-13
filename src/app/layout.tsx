import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'FE Test',
  description: 'Next JS - Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
