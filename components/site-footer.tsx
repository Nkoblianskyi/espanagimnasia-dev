import Link from 'next/link'

const footerNav = [
  {
    title: 'El deporte',
    links: [
      { href: '/historia', label: 'Historia' },
      { href: '/reglas', label: 'Reglas y disciplinas' },
      { href: '/tecnica', label: 'Técnica y entrenamiento' },
    ],
  },
  {
    title: 'Contenido',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'Sobre nosotros' },
      { href: '/about', label: 'Contacto' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Política de privacidad' },
      { href: '/cookie-policy', label: 'Política de cookies' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground" aria-label="Pie de página">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div>
              <p className="font-display text-3xl font-semibold italic text-primary-foreground leading-none">
                españa
              </p>
              <p className="font-display text-xs tracking-[0.4em] uppercase text-primary-foreground/50 mt-1">
                gimnasia
              </p>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              El arte del movimiento. Todo sobre la gimnasia española, su historia, técnica y logros.
            </p>
            <p className="text-xs text-primary-foreground/40 mt-auto">
              info@espanagimnasia.com
            </p>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/50">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Decorative wordmark */}
        <p className="font-display text-4xl font-bold italic text-primary-foreground/8 select-none pointer-events-none hidden lg:block">
          Gimnasia
        </p>
        <p className="text-xs text-primary-foreground/40 text-center">
          &copy; 2026 espanagimnasia.com. Todos los derechos reservados.
        </p>
        <p className="text-xs text-primary-foreground/30 italic font-display">
          El arte del movimiento
        </p>
      </div>
    </footer>
  )
}
