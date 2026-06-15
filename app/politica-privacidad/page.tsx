import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata = {
  title: "Política de Privacidad | España Gimnasia",
  description: "Política de privacidad y protección de datos de espanagimnasia.com.",
}

const sections = [
  {
    title: "Responsable del tratamiento",
    body: "El responsable del tratamiento de los datos recabados a través de este sitio web es España Gimnasia, con domicilio en España. Puede contactar con el responsable a través del formulario de contacto disponible en el sitio web.",
  },
  {
    title: "Datos que recopilamos",
    body: "Este sitio web puede recopilar datos de navegación de carácter técnico (dirección IP, tipo de navegador, páginas visitadas) con fines estadísticos y de mejora del servicio. Cuando el usuario utiliza el formulario de contacto, se recopilan el nombre y la dirección de correo electrónico indicados voluntariamente.",
  },
  {
    title: "Finalidad del tratamiento",
    body: "Los datos de navegación se utilizan únicamente con fines estadísticos y de seguridad. Los datos del formulario de contacto se utilizan exclusivamente para atender la consulta remitida por el usuario.",
  },
  {
    title: "Base jurídica",
    body: "El tratamiento de datos de navegación se ampara en el interés legítimo del responsable. El tratamiento de los datos del formulario de contacto se fundamenta en el consentimiento del usuario, que se otorga de forma libre al remitir el formulario.",
  },
  {
    title: "Conservación de los datos",
    body: "Los datos de contacto se conservarán únicamente durante el tiempo necesario para atender la consulta y, en su caso, durante los plazos de prescripción legal aplicables.",
  },
  {
    title: "Derechos del usuario",
    body: "El usuario tiene derecho a acceder a sus datos, rectificarlos, suprimirlos, oponerse al tratamiento, solicitar su limitación y portabilidad. Estos derechos pueden ejercerse mediante el formulario de contacto del sitio web.",
  },
  {
    title: "Cookies",
    body: "Para información detallada sobre el uso de cookies en este sitio web, consulte nuestra Política de Cookies.",
  },
]

export default function PrivacyPage() {
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
              Política de Privacidad
            </h1>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16">
          <p className="font-sans text-muted-foreground leading-relaxed mb-12 text-lg">
            De conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley
            Orgánica de Protección de Datos (LOPDGDD), le informamos de las condiciones en que
            tratamos los datos personales de los usuarios de este sitio web.
          </p>
          <div className="flex flex-col gap-10">
            {sections.map((s, i) => (
              <div key={s.title} className="flex gap-6">
                <span className="font-mono text-xs text-muted-foreground/40 pt-1 tabular-nums w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                    {s.title}
                  </h2>
                  <p className="font-sans text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
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
