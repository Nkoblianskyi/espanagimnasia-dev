import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata = {
  title: "Política de Cookies | España Gimnasia",
  description: "Información sobre el uso de cookies en espanagimnasia.com.",
}

const cookieTypes = [
  {
    name: "Cookies técnicas",
    necessary: true,
    description:
      "Son imprescindibles para el funcionamiento del sitio web. Permiten la navegación y el uso de las distintas funcionalidades del portal. Sin estas cookies, algunos servicios no pueden prestarse.",
  },
  {
    name: "Cookies analíticas",
    necessary: false,
    description:
      "Permiten cuantificar el número de visitantes y analizar de forma estadística cómo los usuarios navegan por el sitio web. Toda la información que recogen es anónima y se utiliza únicamente para mejorar el funcionamiento del sitio.",
  },
  {
    name: "Cookies de preferencias",
    necessary: false,
    description:
      "Permiten al sitio web recordar información que cambia el comportamiento o el aspecto del sitio, como el idioma preferido del usuario o la región en la que se encuentra.",
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20 bg-background">
        <section className="bg-primary py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs tracking-widest text-primary-foreground/60 uppercase mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground text-balance leading-none">
              Política de Cookies
            </h1>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16">
          <p className="font-sans text-muted-foreground leading-relaxed mb-12 text-lg">
            Este sitio web utiliza cookies propias y de terceros con finalidades técnicas,
            analíticas y de personalización. A continuación encontrará información detallada
            sobre qué son las cookies, qué tipos utilizamos y cómo puede gestionarlas.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            ¿Qué son las cookies?
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed mb-12">
            Las cookies son pequeños ficheros de texto que los sitios web guardan en el
            navegador del usuario cuando este los visita. Sirven para que el sitio web
            recuerde información sobre la visita, lo que facilita la experiencia de
            navegación y permite mejorar el servicio ofrecido.
          </p>

          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
            Tipos de cookies que utilizamos
          </h2>
          <div className="flex flex-col gap-6 mb-16">
            {cookieTypes.map((ct) => (
              <div
                key={ct.name}
                className="border border-border bg-card p-6 flex gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {ct.name}
                    </h3>
                    <span
                      className={`font-mono text-xs px-2 py-0.5 tracking-widest uppercase ${ct.necessary ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
                    >
                      {ct.necessary ? "Necesaria" : "Opcional"}
                    </span>
                  </div>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    {ct.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Cómo gestionar las cookies
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed mb-6">
            Puede aceptar o rechazar las cookies opcionales a través del aviso que aparece
            la primera vez que visita el sitio web. También puede configurar su navegador
            para bloquear o eliminar las cookies en cualquier momento.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Tenga en cuenta que desactivar determinadas cookies puede afectar al
            funcionamiento del sitio web. Las cookies técnicas no pueden ser desactivadas
            ya que son necesarias para la prestación del servicio.
          </p>

          <p className="font-mono text-xs text-muted-foreground mt-16 pt-8 border-t border-border">
            Última actualización: junio de 2026
          </p>
        </section>
      </main>
      <SiteFooter />
      <CookieBanner />
    </>
  )
}
