import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Reglas y disciplinas de la gimnasia',
  description:
    'Guía completa sobre las reglas y disciplinas de la gimnasia: artística, rítmica, trampolín y acrobacia. Códigos de puntuación, elementos obligatorios y criterios de juicio.',
}

const disciplines = [
  {
    id: 'artistica',
    name: 'Gimnasia artística',
    sub: 'La disciplina madre',
    description:
      'La gimnasia artística es la modalidad más antigua y reconocida del deporte. Los gymnasias realizan ejercicios en distintos aparatos, combinando acrobacias, fuerza y elegancia. La puntuación se divide en dificultad y ejecución, evaluadas por paneles de jueces independientes.',
    rules: [
      'La puntuación final suma la nota de dificultad (D) más la de ejecución (E)',
      'Los errores de ejecución restan décimas según su magnitud',
      'Las caídas penalizan con una deducción fija de un punto',
      'Los ejercicios tienen duración máxima reglamentada por aparato',
      'Los elementos fuera de tiempo o incompletos no puntúan en dificultad',
    ],
    aparatos: ['Suelo', 'Salto', 'Barras asimétricas', 'Barra de equilibrio', 'Paralelas', 'Barra fija', 'Aros', 'Caballo con arcos'],
  },
  {
    id: 'ritmica',
    name: 'Gimnasia rítmica',
    sub: 'Arte en movimiento',
    description:
      'La gimnasia rítmica combina el movimiento corporal con la manipulación de aparatos al ritmo de la música. Se compite en categoría individual y de conjunto. La puntuación evalúa la dificultad de los elementos corporales, las acciones con el aparato y la ejecución técnica y artística.',
    rules: [
      'Las competiciones de individual y conjunto siguen reglamentos diferenciados',
      'El ejercicio debe cubrir toda la superficie del tapiz de 13 x 13 metros',
      'La pérdida del aparato fuera del tapiz implica penalización',
      'Los ejercicios tienen duración entre 75 y 90 segundos según categoría',
      'El componente artístico es evaluado junto al técnico en la puntuación final',
    ],
    aparatos: ['Cuerda', 'Aro', 'Pelota', 'Mazas', 'Cinta'],
  },
  {
    id: 'trampoliín',
    name: 'Trampolín',
    sub: 'Vuelo controlado',
    description:
      'La gimnasia de trampolín evalúa la capacidad de los atletas para ejecutar elementos acrobáticos de alta dificultad durante el vuelo generado por el aparato elástico. La altura alcanzada, la posición del cuerpo y la sincronización son factores determinantes en la puntuación.',
    rules: [
      'Los ejercicios constan de diez elementos consecutivos sin apoyos intermedios',
      'Se evalúan el tiempo de vuelo, la dificultad y la ejecución',
      'La salida del eje central del trampolín implica deducción progresiva',
      'La modalidad sincronizada añade la coordinación entre dos gimnastas',
      'Los jueces de dificultad y ejecución actúan de forma independiente',
    ],
    aparatos: ['Trampolín individual', 'Trampolín sincronizado', 'Tumbling', 'Mini trampolín'],
  },
  {
    id: 'acrobatica',
    name: 'Gimnasia acrobática',
    sub: 'El trabajo en equipo',
    description:
      'La gimnasia acrobática se practica en parejas o grupos y combina elementos acrobáticos con pirámides humanas y coreografías de alta dificultad. La confianza entre compañeros y la sincronización son elementos esenciales de esta disciplina.',
    rules: [
      'Las categorías incluyen parejas masculinas, femeninas, mixtas y grupos',
      'Los ejercicios se dividen en balance, dinámica y combinado',
      'Los elementos de vuelo requieren que el volteador sea proyectado y recogido',
      'El trabajo coreográfico es valorado junto a los elementos técnicos',
      'La caída del volteador implica penalización significativa en la nota final',
    ],
    aparatos: ['Pareja masculina', 'Pareja femenina', 'Pareja mixta', 'Grupo femenino', 'Grupo masculino'],
  },
]

export default function ReglasPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-end overflow-hidden bg-foreground" aria-label="Cabecera reglas">
          <Image
            src="/images/reglas-gymnastics.png"
            alt="Panel de jueces en competición de gimnasia"
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/40" aria-hidden="true" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
            <nav aria-label="Ruta de navegación" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-primary-foreground/50">
                <li><Link href="/" className="hover:text-primary-foreground/80 transition-colors">Inicio</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-primary-foreground/80">Reglas y disciplinas</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-primary-foreground text-balance leading-[0.9]">
              Reglas y<br />
              <em className="not-italic text-accent">disciplinas</em>
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <p className="font-display text-2xl md:text-3xl font-light leading-relaxed text-foreground text-balance">
              El reglamento de la gimnasia define los límites dentro de los cuales el arte y el atletismo encuentran su máxima expresión.
            </p>
            <p className="text-muted-foreground leading-relaxed pt-2">
              Cada disciplina gymnastica posee su propio código de puntuación, desarrollado y actualizado periódicamente por la Federación Internacional de Gimnasia. Estos códigos establecen qué se valora, cómo se penaliza y cuáles son los requisitos mínimos de cada ejercicio.
            </p>
          </div>
        </section>

        {/* Disciplines */}
        <section className="pb-24 max-w-7xl mx-auto px-6" aria-labelledby="disciplines-title">
          <h2 id="disciplines-title" className="sr-only">Disciplinas</h2>
          <div className="flex flex-col gap-0">
            {disciplines.map((disc, idx) => (
              <article
                key={disc.id}
                className="border-t border-border py-16"
                aria-labelledby={`disc-${disc.id}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
                  <div>
                    <span className="font-display text-6xl font-bold text-primary/15">{String(idx + 1).padStart(2, '0')}</span>
                    <h3
                      id={`disc-${disc.id}`}
                      className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight mt-2"
                    >
                      {disc.name}
                    </h3>
                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mt-2">{disc.sub}</p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-muted-foreground leading-relaxed">{disc.description}</p>

                    <div>
                      <p className="text-sm font-medium text-foreground mb-3">Normas principales</p>
                      <ul className="flex flex-col gap-2">
                        {disc.rules.map((rule) => (
                          <li key={rule} className="flex gap-3 items-start text-sm text-muted-foreground">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-foreground mb-3">Categorías / aparatos</p>
                      <div className="flex flex-wrap gap-2">
                        {disc.aparatos.map((ap) => (
                          <span
                            key={ap}
                            className="text-xs border border-border px-3 py-1.5 text-muted-foreground"
                          >
                            {ap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Scoring system */}
        <section className="bg-foreground text-primary-foreground py-24" aria-labelledby="puntuacion-title">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Sistema de puntuación</p>
              <h2 id="puntuacion-title" className="font-display font-bold text-4xl md:text-5xl text-primary-foreground text-balance">
                Cómo se evalúa la excelencia
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/10">
              {[
                {
                  letra: 'D',
                  nombre: 'Dificultad',
                  desc: 'Evalúa el valor técnico de los elementos ejecutados. Cada elemento tiene asignado un coeficiente según la complejidad objetiva de su ejecución.',
                },
                {
                  letra: 'E',
                  nombre: 'Ejecución',
                  desc: 'Parte del máximo de 10 puntos y descuenta las imprecisiones técnicas, los errores artísticos y las faltas de postura durante el ejercicio.',
                },
                {
                  letra: 'A',
                  nombre: 'Artístico',
                  desc: 'En las disciplinas que lo contemplan, evalúa la composición coreográfica, la expresividad y la coherencia estética del conjunto del ejercicio.',
                },
              ].map((item) => (
                <div key={item.letra} className="bg-foreground p-10 flex flex-col gap-4">
                  <span className="font-display font-bold text-6xl text-primary-foreground/20">{item.letra}</span>
                  <h3 className="font-display font-semibold text-2xl text-primary-foreground">{item.nombre}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="py-16 text-center">
          <div className="max-w-xl mx-auto px-6 flex flex-col items-center gap-4">
            <p className="font-display text-3xl font-semibold text-foreground">Perfecciona tu técnica</p>
            <Link
              href="/tecnica"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              Ver guías de entrenamiento
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
