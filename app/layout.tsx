import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'España Gimnasia — El Arte del Movimiento',
    template: '%s | España Gimnasia',
  },
  description:
    'Descubre la gimnasia española: historia, disciplinas, técnica, logros y noticias del deporte más elegante de España.',
  keywords: ['gimnasia', 'gimnasia artística', 'gimnasia rítmica', 'España', 'deporte', 'entrenamiento'],
  authors: [{ name: 'España Gimnasia' }],
  creator: 'España Gimnasia',
  metadataBase: new URL('https://espanagimnasia.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://espanagimnasia.com',
    siteName: 'España Gimnasia',
    title: 'España Gimnasia — El Arte del Movimiento',
    description:
      'Descubre la gimnasia española: historia, disciplinas, técnica, logros y noticias del deporte más elegante de España.',
    images: [{ url: '/images/hero-gymnastics.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'España Gimnasia',
    description: 'Descubre la gimnasia española: historia, disciplinas, técnica y logros.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F5F0E8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
