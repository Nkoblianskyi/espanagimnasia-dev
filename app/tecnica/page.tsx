import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Técnica y entrenamiento en gimnasia',
  description:
    'Guías técnicas, consejos de entrenamiento, planes de trabajo y ejercicios específicos para la práctica y mejora en la gimnasia artística y rítmica.',
}

const principles = [
  {
    num: '01',
    title: 'Progresión sistemática',
    text: 'Todo aprendizaje en gimnasia sigue una lógica de complejidad creciente. Dominar el elemento más simple es condición indispensable para acceder al siguiente nivel. Los atajos en este proceso generan hábitos técnicos incorrectos que se consolidan y son difíciles de corregir más adelante.',
  },
  {
    num: '02',
    title: 'Calidad sobre cantidad',
    text: 'Diez repeticiones perfectas valen más que cien descuidadas. El cerebro aprende por repetición, y si repetimos con errores, lo que se consolida es el movimiento incorrecto. La supervisión técnica constante es esencial durante las fases de aprendizaje de nuevos elementos.',
  },
  {
    num: '03',
    title: 'Recuperación activa',
    text: 'El entrenamiento de alta intensidad requiere períodos de recuperación adecuados. La recuperación activa, mediante movilidad suave, estiramientos de baja intensidad y trabajo de coordinación, mantiene la activación muscular sin acumular fatiga adicional.',
  },
  {
    num: '04',
    title: 'Trabajo mental',
    text: 'La visualización de los ejercicios, la gestión del nerviosismo competitivo y el desarrollo de la concentración son componentes del entrenamiento tan importantes como el trabajo físico. Los gymnastas de alto nivel dedican tiempo específico al entrenamiento psicológico.',
  },
]

const trainingPlan = [
  {
    day: 'Lunes',
    focus: 'Fuerza y acondicionamiento',
    details: 'Trabajo de core, fuerza de tren superior e inferior. Circuitos de condición física específica para gimnasia. Duración aproximada: 120 minutos.',
  },
  {
    day: 'Martes',
    focus: 'Técnica de aparatos',
    details: 'Trabajo técnico en los aparatos de competición. Repetición de elementos base y combinaciones. Corrección postura y forma. Duración: 180 minutos.',
  },
  {
    day: 'Miércoles',
    focus: 'Flexibilidad y coreografía',
    details: 'Sesión dedicada al desarrollo de la flexibilidad pasiva y activa. Trabajo coreográfico y expresividad. Duración: 150 minutos.',
  },
  {
    day: 'Jueves',
    focus: 'Técnica avanzada',
    details: 'Trabajo de elementos de alta dificultad. Combinaciones y series completas. Revisión en vídeo de la ejecución. Duración: 180 minutos.',
  },
  {
    day: 'Viernes',
    focus: 'Simulación competitiva',
    details: 'Ejecución de ejercicios completos en condiciones simuladas de competición. Trabajo mental y de gestión de la presión. Duración: 150 minutos.',
  },
  {
    day: 'Sábado',
    focus: 'Recuperación activa',
    details: 'Movilidad general, natación o actividad aeróbica suave. Estiramientos globales. Revisión de objetivos semanales. Duración: 90 minutos.',
  },
]

const exercises = [
  {
    title: 'Puente con extensión de pierna',
    category: 'Flexibilidad',
    desc: 'Desde posición de puente con los pies en el suelo, elevar una pierna manteniendo la cadera alta. Sostener 3 segundos por repetición.',
    reps: '3 series x 8 rep por pierna',
  },
  {
    title: 'Plancha dinámica con rotación',
    category: 'Core',
    desc: 'Desde posición de plancha alta, rotar el cuerpo elevando un brazo hacia el techo manteniendo la tensión abdominal. Retornar controladamente.',
    reps: '3 series x 10 rep por lado',
  },
  {
    title: 'Balanceo de pierna en barra',
    category: 'Técnica',
    desc: 'Sujetarse a la barra con ambas manos. Elevar una pierna con control hasta la horizontal manteniendo la posición del cuerpo. Descender con tensión.',
    reps: '3 series x 12 rep por pierna',
  },
  {
    title: 'Salto vertical con rotación',
    category: 'Salto',
    desc: 'Saltar verticalmente con máxima elevación y ejecutar una rotación de 180 grados en el eje vertical. Aterrizar con rodillas semiflexionadas.',
    reps: '4 series x 6 repeticiones',
  },
  {
    title: 'Lanzamiento y recepción de aro',
    category: 'Aparatos',
    desc: 'Lanzar el aro verticalmente con impulso del brazo y recibirlo con el brazo extendido. Trabajar la precisión del lanzamiento en eje vertical.',
    reps: '5 min de práctica continua',
  },
  {
    title: 'Media sentadilla isométrica',
    category: 'Fuerza',
    desc: 'Desde posición de sentadilla parcial a 90 grados, mantener la posición estática con la espalda recta y los pies alineados con las rodillas.',
    reps: '4 series x 45 segundos',
  },
]

export default function TecnicaPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-end overflow-hidden bg-foreground" aria-label="Cabecera técnica">
          <Image
            src="/images/tecnica-gymnastics.png"
            alt="Entrenamiento técnico en gimnasia"
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
                <li className="text-primary-foreground/80">Técnica y entrenamiento</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-primary-foreground text-balance leading-[0.9]">
              Técnica y<br />
              <em className="not-italic text-accent">entrenamiento</em>
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="font-display text-2xl md:text-3xl font-light leading-relaxed text-foreground text-balance">
              La excelencia gimnástica no es un accidente. Es el resultado de un proceso de entrenamiento preciso, sistemático y sostenido en el tiempo.
            </p>
            <p className="text-muted-foreground leading-relaxed pt-2">
              Esta sección reúne los principios fundamentales del entrenamiento en gimnasia, un plan de trabajo semanal de referencia y una selección de ejercicios específicos que los técnicos pueden incorporar en sus sesiones. Todo el contenido está orientado a la mejora del rendimiento y la correcta progresión técnica.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-secondary py-24" aria-labelledby="principios-title">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Fundamentos</p>
              <h2 id="principios-title" className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance">
                Principios del entrenamiento
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((p) => (
                <div key={p.num} className="bg-background p-8 flex flex-col gap-4">
                  <span className="font-display text-4xl font-bold text-primary/20">{p.num}</span>
                  <h3 className="font-display font-semibold text-2xl text-foreground">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly plan */}
        <section className="py-24 max-w-7xl mx-auto px-6" aria-labelledby="plan-title">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Planificación</p>
            <h2 id="plan-title" className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance">
              Plan semanal de referencia
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Este plan está diseñado para gymnasias en etapa de formación avanzada. Debe adaptarse a las necesidades individuales y al período de la temporada.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {trainingPlan.map((session) => (
              <div
                key={session.day}
                className="grid grid-cols-1 md:grid-cols-[140px_200px_1fr] border-b border-border py-7 gap-4 items-start"
              >
                <span className="font-display font-semibold text-2xl text-primary">{session.day}</span>
                <span className="text-sm font-medium text-foreground self-center">{session.focus}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{session.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Exercises */}
        <section className="bg-secondary py-24" aria-labelledby="ejercicios-title">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Ejercicios</p>
              <h2 id="ejercicios-title" className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance">
                Ejercicios específicos
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {exercises.map((ex) => (
                <div key={ex.title} className="bg-background p-8 flex flex-col gap-3">
                  <span className="text-xs tracking-[0.2em] uppercase text-primary">{ex.category}</span>
                  <h3 className="font-display font-semibold text-xl text-foreground leading-tight">{ex.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{ex.desc}</p>
                  <p className="text-xs font-medium text-muted-foreground border-t border-border pt-3 mt-auto">
                    {ex.reps}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flexibility deep dive */}
        <section className="py-24 max-w-7xl mx-auto px-6" aria-labelledby="flexibilidad-title">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Flexibilidad</p>
              <h2 id="flexibilidad-title" className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance">
                La flexibilidad como herramienta, no como fin
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Un error frecuente es tratar la flexibilidad como un objetivo en sí mismo. En gimnasia, la flexibilidad es una herramienta al servicio de la técnica: permite posiciones más estéticas, reduce el riesgo de lesiones y amplía el repertorio de elementos disponibles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Los métodos más efectivos combinan el estiramiento estático pasivo con el trabajo de facilitación neuromuscular propioceptiva (FNP) y la movilidad activa. La planificación cuidadosa de estos métodos dentro del ciclo de entrenamiento es determinante para los resultados.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                {['Estiramientos FNP (contracción-relajación)', 'Movilidad articular activa', 'Estiramiento estático progresivo', 'Trabajo de hiperlaxitud controlada'].map((item) => (
                  <div key={item} className="flex gap-3 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/images/hero-gymnastics.png"
                alt="Gimnasta trabajando la flexibilidad"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-primary text-primary-foreground py-16 text-center">
          <div className="max-w-xl mx-auto px-6 flex flex-col items-center gap-4">
            <p className="font-display text-3xl font-semibold">Lee más en el blog</p>
            <Link
              href="/blog"
              className="inline-block border border-primary-foreground/60 text-primary-foreground px-6 py-3 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              Ver artículos
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
