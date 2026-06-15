import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata = {
  title: "Sobre Nosotros | España Gimnasia",
  description:
    "Conoce el proyecto editorial detrás de espanagimnasia.com, un espacio dedicado a divulgar la cultura y el deporte de la gimnasia en España.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20 bg-background">
        {/* Hero */}
        <section className="bg-primary py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-xs tracking-widest text-primary-foreground/60 uppercase mb-4">
              El proyecto
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground text-balance leading-none mb-6">
              Sobre nosotros
            </h1>
            <p className="text-primary-foreground/70 max-w-xl leading-relaxed font-sans text-lg">
              Un espacio editorial independiente dedicado a la gimnasia
              artística y rítmica en España.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-6">
                Nuestra misión
              </p>
              <h2 className="font-serif text-4xl font-bold text-foreground text-balance leading-tight mb-6">
                Divulgar la gimnasia con rigor y pasión
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                España Gimnasia nació de la convicción de que la gimnasia
                artística y rítmica merecen un espacio de calidad en el
                panorama informativo deportivo. Un lugar donde la técnica, la
                historia y la cultura del deporte se expliquen con profundidad
                y respeto.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                No somos un medio de noticias de última hora. Somos un proyecto
                editorial que apuesta por el contenido reflexivo, documentado y
                útil para gimnastas, entrenadores, padres y aficionados.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-gymnastics.png"
                alt="Gimnastas entrenando en un pabellón"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/30 border-t border-b border-border py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-10 text-center">
              Nuestros valores
            </p>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {[
                {
                  title: "Rigor",
                  body: "Cada artículo que publicamos está documentado con fuentes contrastadas y revisado por personas con conocimiento del deporte.",
                },
                {
                  title: "Independencia",
                  body: "No respondemos a intereses comerciales ni federativos. Nuestra única lealtad es hacia los lectores y hacia la verdad del deporte.",
                },
                {
                  title: "Accesibilidad",
                  body: "Escribimos para que cualquier persona, con o sin experiencia previa, pueda entender y disfrutar del contenido.",
                },
              ].map((v) => (
                <div key={v.title} className="bg-card p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {v.title}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact teaser */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Quieres ponerte en contacto?
          </h2>
          <p className="font-sans text-muted-foreground max-w-lg mx-auto leading-relaxed mb-8">
            Si tienes una propuesta de colaboración, una corrección o simplemente
            quieres compartir tu opinión, escríbenos.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-primary text-primary-foreground font-sans font-semibold px-8 py-4 hover:bg-primary/90 transition-colors"
          >
            Ir a contacto
          </Link>
        </section>
      </main>
      <SiteFooter />
      <CookieBanner />
    </>
  )
}
