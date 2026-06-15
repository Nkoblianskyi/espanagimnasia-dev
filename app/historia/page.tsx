import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Historia de la gimnasia en España',
  description:
    'Un recorrido completo por la historia de la gimnasia en España desde el siglo XIX hasta la actualidad: orígenes, institucionalización, expansión internacional y logros.',
}

const timeline = [
  {
    period: 'Siglo XIX',
    title: 'Los orígenes',
    text: 'La práctica sistemática de la gimnasia en España cobra forma bajo la influencia de las corrientes pedagógicas europeas. Los primeros centros dedicados al ejercicio físico organizado surgen en las grandes ciudades como parte de la reforma educativa del siglo.',
  },
  {
    period: '1900 – 1930',
    title: 'La institucionalización',
    text: 'Se constituyen las primeras federaciones y organizaciones deportivas especializadas en gimnasia. Los campeonatos nacionales comienzan a celebrarse de forma regular, creando un marco de referencia técnico que impulsa la mejora general del nivel competitivo.',
  },
  {
    period: '1940 – 1960',
    title: 'Consolidación interna',
    text: 'El deporte se organiza a escala nacional con una estructura más sólida. Se construyen los primeros pabellones y centros de entrenamiento específicos, lo que permite sistematizar la preparación y mejorar las condiciones de práctica.',
  },
  {
    period: '1960 – 1980',
    title: 'La apertura internacional',
    text: 'España participa de forma más activa en competiciones internacionales. El contacto con las grandes potencias del deporte, especialmente las escuelas de Europa del Este, enriquece la metodología española y acelera el desarrollo técnico.',
  },
  {
    period: '1980 – 2000',
    title: 'El despegue',
    text: 'La gimnasia rítmica española inicia su ascenso hacia la élite mundial. Se construye una metodología de entrenamiento propia que produce resultados notables en campeonatos europeos y mundiales, especialmente en la modalidad de conjunto.',
  },
  {
    period: '2000 – hoy',
    title: 'La era dorada',
    text: 'España se consolida como referente mundial. Los resultados en los principales eventos del calendario internacional confirman la solidez del sistema de formación y la capacidad de generar talento de forma continua y sostenida.',
  },
]

export default function HistoriaPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[55vh] flex items-end overflow-hidden bg-foreground" aria-label="Cabecera historia">
          <Image
            src="/images/historia-gymnastics.png"
            alt="Imagen histórica de la gimnasia española"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/40" aria-hidden="true" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
            <nav aria-label="Ruta de navegación" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-primary-foreground/50">
                <li><Link href="/" className="hover:text-primary-foreground/80 transition-colors">Inicio</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-primary-foreground/80">Historia</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-primary-foreground text-balance leading-[0.9]">
              Historia de la<br />
              <em className="not-italic text-accent">gimnasia</em><br />
              española
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="font-display text-2xl md:text-3xl font-light leading-relaxed text-foreground text-balance">
              Más de dos siglos de evolución, disciplina y búsqueda de la perfección han forjado una de las grandes tradiciones gimnásticas del mundo.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="pb-24 max-w-7xl mx-auto px-6" aria-labelledby="timeline-title">
          <h2 id="timeline-title" className="sr-only">Línea del tiempo</h2>
          <div className="flex flex-col gap-0">
            {timeline.map((item, index) => (
              <div
                key={item.period}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-border py-10 gap-6 md:gap-12 items-start"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{item.period}</span>
                  <span className="font-display font-semibold text-3xl text-primary/20">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deep dive sections */}
        <section className="bg-secondary py-24" aria-labelledby="metodologia-title">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Metodología</p>
              <h2 id="metodologia-title" className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance leading-tight">
                Un sistema propio, reconocido en el mundo
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A lo largo de las décadas, la gimnasia española ha desarrollado una metodología de entrenamiento singular que combina rigor técnico, creatividad artística y una gestión moderna del rendimiento deportivo. Este sistema ha sido adoptado y estudiado por países de todo el mundo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La clave del éxito reside en la detección temprana del talento, combinada con un sistema de tecnificación progresiva que acompaña al gymnasta desde sus primeros pasos hasta la élite internacional. La formación de los técnicos es igualmente prioritaria en este modelo.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/tecnica-gymnastics.png"
                alt="Entrenamiento metodológico en gimnasia española"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6" aria-labelledby="legado-title">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Legado</p>
            <h2 id="legado-title" className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance">
              Un legado que inspira a las nuevas generaciones
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              El impacto de la gimnasia española trasciende los resultados deportivos. Ha generado un referente cultural que atrae cada año a miles de niños y jóvenes hacia la práctica del deporte, contribuyendo al desarrollo integral de la ciudadanía y al tejido asociativo del país.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La historia de la gimnasia española es, en definitiva, la historia de una sociedad que ha apostado por el deporte como vehículo de superación, expresión y convivencia. Un relato que sigue escribiéndose cada día en los pabellones y centros de entrenamiento de toda España.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-primary text-primary-foreground py-16 text-center">
          <div className="max-w-xl mx-auto px-6 flex flex-col items-center gap-4">
            <p className="font-display text-3xl font-semibold">Conoce las reglas que rigen el deporte</p>
            <Link
              href="/reglas"
              className="inline-block border border-primary-foreground/60 text-primary-foreground px-6 py-3 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              Ver reglamento
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
