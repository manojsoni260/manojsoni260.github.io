import { useState, type ElementType } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, Briefcase, GraduationCap, Newspaper, School, ShieldCheck, Stethoscope, Timer, Trophy } from 'lucide-react'
import { Section, SectionHead } from './Section'
import { CATEGORIES, PROJECTS } from '../data'
const ICONS: Record<string, ElementType> = { 'Clinic Management CRM': Stethoscope, 'Security Troops': ShieldCheck, 'Cricketers Pitch': Trophy, 'Maharashtra Career Portal': Briefcase, 'Emango Education': GraduationCap, 'School Management System': School, 'Publication Web Platform': Newspaper, TimeStint: Timer }
const COLORS = [['#2563EB', '#fff'], ['#3f3f4b', '#fff'], ['#FFB82E', '#111827'], ['#60A5FA', '#0f172a'], ['#F4B183', '#111827'], ['#4b5563', '#fff'], ['#FF8A1F', '#111827'], ['#334155', '#fff']]
const HEIGHTS = ['min-h-[22rem]', 'min-h-[17rem]', 'min-h-[24rem]', 'min-h-[18rem]']
export default function Projects() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>('All')
  const [all, setAll] = useState(false)
  const list = PROJECTS.map((p, i) => ({ ...p, i })).filter(p => cat === 'All' || p.category === cat)
  const shown = all ? list : list.slice(0, 6)
  return (
    <Section id="portfolio">
      <SectionHead id="portfolio" label="My works" title="See My Works Which Will Amaze You!" text="Products I’ve worked on as part of the Segnotech team. Each card links to the live website." />
      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map(c => <button key={c} aria-pressed={cat === c} onClick={() => { setCat(c); setAll(false) }} className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide transition ${cat === c ? 'bg-brand text-onbrand' : 'bg-card text-mut hover:text-brand'}`}>{c}</button>)}
      </div>
      <div className="gap-4 sm:columns-2 lg:columns-3">
        {shown.map((p, k) => {
          const Icon = ICONS[p.name]; const [bg, fg] = COLORS[p.i % COLORS.length]
          return (
            <motion.a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (k % 3) * 0.08 }} whileHover={{ y: -4 }}
              className={`mb-4 flex break-inside-avoid flex-col justify-between gap-8 rounded-2xl p-6 shadow-card ${HEIGHTS[p.i % HEIGHTS.length]}`} style={{ background: bg, color: fg }}>
              <div className="flex items-start justify-between"><Icon size={64} strokeWidth={1.25} aria-hidden="true" /><ArrowUpRight aria-hidden="true" /></div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-75">{p.category}</span>
                <h3 className="mt-1 text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm opacity-90">{p.description}</p>
                <p className="mt-3 text-xs font-medium opacity-80">{p.stack.join(' · ')}</p>
                <span className="sr-only">Visit {p.name} website (opens in new tab)</span>
              </div>
            </motion.a>)
        })}
      </div>
      {!all && list.length > 6 && <div className="mt-6 text-center"><button onClick={() => setAll(true)} className="text-sm font-medium text-brand underline underline-offset-4"><BookOpen size={14} className="mr-1 inline" aria-hidden="true" />Load more work</button></div>}
    </Section>)
}
