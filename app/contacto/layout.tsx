import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | España Gimnasia',
  description:
    'Ponte en contacto con el equipo de España Gimnasia. Estamos disponibles para cualquier consulta sobre gimnasia artística, rítmica o acrobática.',
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}
