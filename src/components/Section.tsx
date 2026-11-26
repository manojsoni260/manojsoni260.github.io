import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
export const Reveal = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay }}>{children}</motion.div>)
export const Section = ({ id, children }: { id: string; children: ReactNode }) => (
  <section id={id} aria-labelledby={`${id}-h`} className="py-16 md:py-24"><div className="mx-auto max-w-6xl px-5">{children}</div></section>)
export const SectionHead = ({ id, label, title, text }: { id: string; label: string; title: string; text?: string }) => (
  <Reveal className="mb-10">
    <span className="inline-block text-xs font-medium uppercase tracking-wider text-mut">{label}<span className="mt-1 block h-0.5 w-8 bg-mut/60" /></span>
    <h2 id={`${id}-h`} className="mt-4 max-w-xl text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
    {text && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mut">{text}</p>}
  </Reveal>)
