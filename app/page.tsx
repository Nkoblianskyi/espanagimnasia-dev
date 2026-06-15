import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'España Gimnasia — El Arte del Movimiento',
  description:
    'Descubre la gimnasia española en toda su profundidad: historia, disciplinas, técnica, equipamiento y logros de este arte del movimiento.',
}

export default function HomePage() {
  const previewArticles = articles.slice(0, 3)

  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* ── HERO ── */}
        <section
          className="relative min-h-[92vh] flex items-end overflow-hidden bg-foreground"
          aria-label="Portada"
        >
          <Image
            src="/images/hero-gymnastics.png"
            alt="Gimnasta realizando un salto artístico"
            fill
            priority
            className="object-cover object-center opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/30" aria-hidden="true" />
          <span
            className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 font-display font-bold italic text-[28vw] leading-none text-primary-foreground/5 select-none pointer-events-none"
            aria-hidden="true"
          >
            G
          </span>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 md:pb-24 w-full">
            <p className="text-xs tracking-[0.35em] uppercase text-primary-foreground/60 mb-4 font-sans">
              España &middot; Gimnasia &middot; Arte
            </p>
            <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl leading-[0.9] text-primary-foreground text-balance max-w-2xl">
              El arte<br />
              <em className="not-italic text-accent">del</em><br />
              movimiento
            </h1>
            <p className="mt-6 text-base sm:text-lg text-primary-foreground/70 max-w-md leading-relaxed">
              Todo sobre la gimnasia en España: historia, disciplinas, técnica y los logros que han marcado a este deporte.
            </p>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
            <span className="text-primary-foreground text-xs tracking-widest uppercase">scroll</span>
            <div className="w-px h-10 bg-primary-foreground" />
          </div>
        </section>

        {/* ── TICKER ── */}
        <div className="overflow-hidden bg-primary py-3 select-none" aria-hidden="true">
          <div
            className="flex gap-8 whitespace-nowrap"
            style={{ animation: 'marquee 25s linear infinite' }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="text-primary-foreground/80 text-xs tracking-[0.3em] uppercase font-sans shrink-0"
              >
                Gimnasia artística &nbsp;&middot;&nbsp; Gimnasia rítmica &nbsp;&middot;&nbsp; Trampolín &nbsp;&middot;&nbsp; Acrobacia &nbsp;&middot;&nbsp; España &nbsp;&middot;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* ── EQUIPAMIENTO E INVENTARIO ── */}
        <section className="py-24 max-w-7xl mx-auto px-6" aria-labelledby="equipamiento-title">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Equipamiento</p>
              <h2
                id="equipamiento-title"
                className="font-display font-bold text-4xl md:text-5xl leading-tight text-foreground text-balance"
              >
                Herramientas de la<br />
                <em className="not-italic text-primary">excelencia</em>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                La gimnasia utiliza un conjunto de aparatos y materiales de precisión que han evolucionado durante décadas para permitir el máximo rendimiento y la seguridad de los atletas.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {[
                  { name: 'Cinta', desc: 'Satén ligero que traza figuras en el aire con cada movimiento' },
                  { name: 'Aro', desc: 'Polipropileno rígido que permite lanzamientos y rodamientos precisos' },
                  { name: 'Pelota', desc: 'Goma de 18-20 cm que exige un control de rebote perfecto' },
                  { name: 'Mazas', desc: 'Par de objetos que requieren sincronización absoluta' },
                ].map((item) => (
                  <li key={item.name} className="flex gap-4 items-start group">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" />
                    <div>
                      <span className="font-medium text-foreground text-sm">{item.name}</span>
                      <span className="text-muted-foreground text-sm"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/equipment-gymnastics.png"
                alt="Equipamiento de gimnasia rítmica dispuesto artísticamente"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-border" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ── HISTORIA PREVIEW ── */}
        <section className="bg-secondary py-24" aria-labelledby="historia-preview-title">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 relative aspect-[3/2] rounded-sm overflow-hidden">
                <Image
                  src="/images/historia-gymnastics.png"
                  alt="Fotografía histórica de la gimnasia española"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="lg:col-span-2 flex flex-col gap-6">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Historia</p>
                <h2
                  id="historia-preview-title"
                  className="font-display font-bold text-4xl md:text-5xl leading-tight text-foreground text-balance"
                >
                  Dos siglos de<br />
                  <em className="not-italic text-primary">movimiento</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Desde las primeras sociedades gimnásticas del siglo XIX hasta la élite mundial del siglo XXI, la gimnasia española ha recorrido un camino fascinante de superación constante.
                </p>
                <Link
                  href="/historia"
                  className="self-start text-sm font-medium text-primary border-b border-primary pb-px hover:border-b-2 transition-all"
                >
                  Ver historia completa
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── TIPOS DE APARATOS ── */}
        <section className="py-24 max-w-7xl mx-auto px-6" aria-labelledby="aparatos-title">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Disciplinas</p>
            <h2
              id="aparatos-title"
              className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance"
            >
              Aparatos de competición
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
            {[
              { title: 'Suelo', cat: 'Artística', desc: '12 × 12 m de expresión acrobática' },
              { title: 'Salto', cat: 'Artística', desc: 'Potencia y vuelo en fracciones de segundo' },
              { title: 'Barras asimétricas', cat: 'Artística femenina', desc: 'Vuelos y cambios de barra a distintas alturas' },
              { title: 'Barra de equilibrio', cat: 'Artística femenina', desc: 'Diez centímetros de amplitud para el arte' },
              { title: 'Paralelas', cat: 'Artística masculina', desc: 'Fuerza y oscilación en tensión máxima' },
              { title: 'Barra fija', cat: 'Artística masculina', desc: 'Velocidad angular y precisión en el espacio' },
            ].map((ap) => (
              <div
                key={ap.title}
                className="bg-background p-8 flex flex-col gap-3 hover:bg-secondary transition-colors"
              >
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">{ap.cat}</p>
                <h3 className="font-display font-semibold text-2xl text-foreground leading-tight">{ap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── REGLAS PREVIEW ── */}
        <section
          className="bg-primary text-primary-foreground py-24"
          aria-labelledby="reglas-preview-title"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60">Reglamento</p>
              <h2
                id="reglas-preview-title"
                className="font-display font-bold text-4xl md:text-5xl leading-tight text-balance"
              >
                Reglas que<br />dan forma<br />al arte
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed max-w-md">
                Cada disciplina tiene su propio código de puntuación, sus elementos obligatorios y sus criterios de evaluación. Conocer las reglas permite apreciar la dificultad de cada ejercicio.
              </p>
              <Link
                href="/reglas"
                className="self-start border border-primary-foreground/60 text-primary-foreground px-6 py-3 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
              >
                Ver reglas completas
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/reglas-gymnastics.png"
                alt="Panel de jueces en competición de gimnasia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/30" />
            </div>
          </div>
        </section>

        {/* ── LOGROS ── */}
        <section className="py-24 max-w-7xl mx-auto px-6" aria-labelledby="logros-title">
          <div className="mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Trayectoria</p>
            <h2
              id="logros-title"
              className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance"
            >
              Logros que definen<br />una era
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Dominio en rítmica de conjunto',
                text: 'La modalidad de conjunto española ha sido referencia constante en los grandes campeonatos mundiales durante las últimas décadas.',
              },
              {
                num: '02',
                title: 'Presencia olímpica continua',
                text: 'La participación ininterrumpida en los Juegos Olímpicos refleja la solidez de una estructura deportiva que genera talento de forma sostenida.',
              },
              {
                num: '03',
                title: 'Metodología exportada al mundo',
                text: 'Los métodos de entrenamiento desarrollados en España son estudiados y adoptados por federaciones de todo el mundo.',
              },
            ].map((item) => (
              <div key={item.num} className="flex flex-col gap-4 border-t-2 border-primary pt-6">
                <span className="font-display text-5xl font-bold text-primary/20">{item.num}</span>
                <h3 className="font-display font-semibold text-xl text-foreground leading-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TÉCNICA PREVIEW ── */}
        <section className="bg-secondary py-24" aria-labelledby="tecnica-preview-title">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden lg:order-2">
              <Image
                src="/images/tecnica-gymnastics.png"
                alt="Gimnasta en sesión de entrenamiento técnico"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6 lg:order-1">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Técnica</p>
              <h2
                id="tecnica-preview-title"
                className="font-display font-bold text-4xl md:text-5xl leading-tight text-foreground text-balance"
              >
                Entrena como<br />los mejores
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Desde los principios de la flexibilidad hasta la planificación de la temporada. Accede a guías técnicas, consejos de entrenamiento y programas de ejercicios.
              </p>
              <Link
                href="/tecnica"
                className="self-start text-sm font-medium text-primary border-b border-primary pb-px hover:border-b-2 transition-all"
              >
                Explorar técnica y consejos
              </Link>
            </div>
          </div>
        </section>

        {/* ── DATO CURIOSO 1 ── */}
        <section className="py-20 overflow-hidden" aria-labelledby="dato1-title">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Dato singular</p>
              <h2
                id="dato1-title"
                className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight text-balance"
              >
                Una gimnasta de élite puede llegar a entrenar más de 1.500 horas al año
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Este volumen equivale a más de seis horas diarias durante doscientos cincuenta días, distribuidas entre entrenamiento técnico, fuerza, flexibilidad y trabajo coreográfico.
              </p>
            </div>
            <div className="flex items-center justify-center overflow-hidden">
              <span
                className="font-display font-bold text-[14rem] leading-none text-border select-none pointer-events-none"
                aria-hidden="true"
              >
                1.5k
              </span>
            </div>
          </div>
        </section>

        {/* ── DATO CURIOSO 2 ── */}
        <section
          className="bg-foreground text-primary-foreground py-20"
          aria-labelledby="dato2-title"
        >
          <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6">
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50">Perspectiva histórica</p>
            <h2
              id="dato2-title"
              className="font-display font-bold text-3xl md:text-5xl leading-tight text-balance max-w-3xl"
            >
              La gimnasia es uno de los deportes más antiguos de los Juegos Olímpicos modernos
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed max-w-xl">
              Presente desde la primera edición de los Juegos en 1896, la gimnasia artística lleva más de un siglo en el programa olímpico, convirtiéndola en una de las disciplinas más arraigadas en la cultura del deporte mundial.
            </p>
          </div>
        </section>

        {/* ── BLOG PREVIEW ── */}
        <section className="py-24 max-w-7xl mx-auto px-6" aria-labelledby="blog-preview-title">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Contenido</p>
              <h2
                id="blog-preview-title"
                className="font-display font-bold text-4xl md:text-5xl text-foreground"
              >
                Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm text-primary border-b border-primary pb-px hover:border-b-2 transition-all hidden sm:block"
            >
              Ver todos los artículos
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {previewArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="bg-background group flex flex-col"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{article.category}</p>
                  <h3 className="font-display font-semibold text-xl text-foreground leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
                  <span className="text-xs text-primary border-b border-primary/30 pb-px self-start group-hover:border-primary transition-colors">
                    Leer artículo
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="text-sm text-primary border-b border-primary pb-px">
              Ver todos los artículos
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <CookieBanner />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </>
  )
}
