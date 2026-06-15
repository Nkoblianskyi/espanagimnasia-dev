import Image from "next/image"
import Link from "next/link"
import { articles } from "@/lib/articles"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"

const categoryColors: Record<string, string> = {
  Disciplinas: "bg-accent text-accent-foreground",
  Historia: "bg-secondary text-secondary-foreground",
  Técnica: "bg-primary/10 text-primary",
  Equipamiento: "bg-muted text-muted-foreground",
  Logros: "bg-accent/60 text-accent-foreground",
}

export const metadata = {
  title: "Blog | España Gimnasia",
  description:
    "Artículos sobre gimnasia artística y rítmica en España: técnica, historia, reglas y mucho más.",
}

export default function BlogPage() {
  const [featured, ...rest] = articles

  return (
    <>
      <SiteHeader />
      <main className="pt-20 bg-background">
        {/* Page header */}
        <section className="bg-primary py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-xs tracking-widest text-primary-foreground/60 uppercase mb-4">
              Publicaciones
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground text-balance leading-none mb-6">
              Blog
            </h1>
            <p className="text-primary-foreground/70 max-w-xl leading-relaxed font-sans text-lg">
              Artículos sobre técnica, historia, reglamento y cultura de la
              gimnasia en España.
            </p>
          </div>
        </section>

        {/* Featured article */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8">
            Artículo destacado
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-0 overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span
                  className={`inline-block text-xs font-mono tracking-widest uppercase px-3 py-1 mb-6 ${categoryColors[featured.category] ?? "bg-muted text-muted-foreground"}`}
                >
                  {featured.category}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight mb-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                <span className="font-mono text-xs text-muted-foreground">
                  {featured.readTime} de lectura
                </span>
                <span className="font-sans text-sm text-primary font-semibold group-hover:underline">
                  Leer artículo &rarr;
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* Rest of articles */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8">
            Más artículos
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-card p-6 flex flex-col gap-4 hover:bg-accent/5 transition-colors"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span
                  className={`self-start text-xs font-mono tracking-widest uppercase px-2 py-0.5 ${categoryColors[article.category] ?? "bg-muted text-muted-foreground"}`}
                >
                  {article.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground text-balance leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-mono text-xs text-muted-foreground">
                    {article.readTime} de lectura
                  </span>
                  <span className="font-sans text-xs text-primary font-semibold group-hover:underline">
                    Leer &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <CookieBanner />
    </>
  )
}
