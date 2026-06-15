'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/historia', label: 'Historia' },
  { href: '/reglas', label: 'Reglas' },
  { href: '/tecnica', label: 'Técnica' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Contacto' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="España Gimnasia — Inicio">
          {/* Geometric logo mark */}
          <div className="relative size-9 flex items-center justify-center">
            <svg viewBox="0 0 36 36" fill="none" className="size-9" aria-hidden="true">
              <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
              <path
                d="M18 6 C10 6 6 11 6 18 C6 25 10 30 18 30"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-primary"
              />
              <path
                d="M18 6 C26 6 30 11 30 18 C30 25 26 30 18 30"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-gold"
              />
              <circle cx="18" cy="18" r="3" fill="currentColor" className="text-primary" />
            </svg>
          </div>
          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-foreground">
              españa
            </span>
            <span className="font-display text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              gimnasia
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-1.5 text-sm tracking-wide transition-colors rounded-sm',
                pathname === link.href
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span
            className={cn(
              'block w-5 h-px bg-foreground transition-transform origin-center',
              open && 'rotate-45 translate-y-[5px]',
            )}
          />
          <span
            className={cn('block w-5 h-px bg-foreground transition-opacity', open && 'opacity-0')}
          />
          <span
            className={cn(
              'block w-5 h-px bg-foreground transition-transform origin-center',
              open && '-rotate-45 -translate-y-[5px]',
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-1"
          aria-label="Menú móvil"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'py-2.5 text-sm tracking-wide border-b border-border last:border-0',
                pathname === link.href ? 'text-primary font-medium' : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
