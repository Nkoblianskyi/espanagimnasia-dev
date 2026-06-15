"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <SiteHeader />
      <main className="pt-20 bg-background">
        {/* Header */}
        <section className="bg-primary py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-xs tracking-widest text-primary-foreground/60 uppercase mb-4">
              Escríbenos
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground text-balance leading-none">
              Contacto
            </h1>
          </div>
        </section>

        {/* Form */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          {sent ? (
            <div className="border border-border bg-card p-12 text-center">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">
                Mensaje recibido
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Gracias por escribirnos
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Hemos recibido tu mensaje y trataremos de responderte en el
                menor tiempo posible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="nombre"
                    className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) =>
                      setForm({ ...form, nombre: e.target.value })
                    }
                    className="border border-border bg-card px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="border border-border bg-card px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mensaje"
                  className="font-mono text-xs tracking-widest uppercase text-muted-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={7}
                  required
                  value={form.mensaje}
                  onChange={(e) =>
                    setForm({ ...form, mensaje: e.target.value })
                  }
                  className="border border-border bg-card px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground font-sans font-semibold px-8 py-4 hover:bg-primary/90 transition-colors"
                >
                  Enviar mensaje
                </button>
                <p className="font-mono text-xs text-muted-foreground">
                  Responderemos en 24–48 h
                </p>
              </div>
            </form>
          )}
        </section>
      </main>
      <SiteFooter />
      <CookieBanner />
    </>
  )
}
