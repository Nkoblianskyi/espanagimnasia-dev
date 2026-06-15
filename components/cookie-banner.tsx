'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      // slight delay so it doesn't flash on first render
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className={cn(
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-xl',
        'bg-foreground text-primary-foreground rounded-sm shadow-2xl',
        'px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4',
      )}
    >
      <p className="text-sm text-primary-foreground/80 leading-relaxed flex-1">
        Utilizamos cookies para mejorar su experiencia de navegación.{' '}
        <Link href="/politica-cookies" className="underline underline-offset-2 text-primary-foreground hover:text-primary-foreground/80">
          Política de cookies
        </Link>
        .
      </p>
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={decline}
          className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors underline underline-offset-2"
        >
          Rechazar
        </button>
        <button
          onClick={accept}
          className="text-xs font-medium bg-primary-foreground text-foreground px-4 py-2 rounded-sm hover:bg-primary-foreground/90 transition-colors"
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
