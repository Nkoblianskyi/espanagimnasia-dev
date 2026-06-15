import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { articles } from "@/lib/articles"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} | España Gimnasia`,
    description: article.excerpt,
  }
}

function renderContent(raw: string) {
  const paragraphs = raw.trim().split(/\n\n+/)
  return paragraphs.map((block, i) => {
    if (block.startsWith("**") && block.endsWith("**")) {
      return (
        <h2
          key={i}
          className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 text-balance"
        >
          {block.replace(/\*\*/g, "")}
        </h2>
      )
    }
    const withBold = block.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
      ) : (
        part
      )
    )
    return (
      <p
        key={i}
        className="font-sans text-foreground/80 leading-relaxed text-base md:text-lg mb-0"
      >
        {withBold}
      </p>
    )
  })
}

const categoryColors: Record<string, string> = {
  Disciplinas: "bg-accent text-accent-foreground",
  Historia: "bg-secondary text-secondary-foreground",
  Técnica: "bg-primary/10 text-primary",
  Equipamiento: "bg-muted text-muted-foreground",
  Logros: "bg-accent/60 text-accent-foreground",
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main className="pt-20 bg-background">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-64 bg-primary overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-4xl mx-auto w-full">
            <span
              className={`self-start text-xs font-mono tracking-widest uppercase px-3 py-1 mb-4 ${categoryColors[article.category] ?? "bg-muted text-muted-foreground"}`}
            >
              {article.category}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground text-balance leading-none">
              {article.title}
            </h1>
            <p className="font-mono text-xs text-primary-foreground/60 mt-4">
              {article.readTime} de lectura
            </p>
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 text-balance border-l-4 border-primary pl-6">
            {article.excerpt}
          </p>
          <div className="flex flex-col gap-6">{renderContent(article.content)}</div>
        </article>

        {/* Related articles */}
        <section className="border-t border-border bg-muted/30">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8">
              También te puede interesar
            </p>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-card p-6 flex flex-col gap-3 hover:bg-accent/5 transition-colors"
                >
                  <span
                    className={`self-start text-xs font-mono tracking-widest uppercase px-2 py-0.5 ${categoryColors[rel.category] ?? "bg-muted text-muted-foreground"}`}
                  >
                    {rel.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-foreground text-balance leading-tight group-hover:text-primary transition-colors">
                    {rel.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground mt-auto pt-3 border-t border-border">
                    {rel.readTime} de lectura
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link
            href="/blog"
            className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            &larr; Volver al blog
          </Link>
        </div>
      </main>
      <SiteFooter />
      <CookieBanner />
    </>
  )
}
