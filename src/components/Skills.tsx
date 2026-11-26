import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, SectionHead } from './Section'
import { SKILLS } from '../data'
const TOOLS = ['Cloud & Infra', 'Tools & AI']
const tabs = { Skills: Object.entries(SKILLS).filter(([g]) => !TOOLS.includes(g)).flatMap(([, v]) => v), Tools: TOOLS.flatMap(g => SKILLS[g]) }
type Tab = keyof typeof tabs
export default function Skills() {
  const [tab, setTab] = useState<Tab>('Skills')
  return (
    <Section id="skills">
      <SectionHead id="skills" label="My skills" title="What My Engineering Skills Include?" text="Technologies I use across backend, frontend, mobile, real-time systems and infrastructure." />
      <div role="tablist" aria-label="Skill type" className="mb-8 inline-flex rounded-full bg-card p-1 shadow-card">
        {(Object.keys(tabs) as Tab[]).map(t => <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`rounded-full px-6 py-1.5 text-sm font-bold transition ${tab === t ? 'bg-brand text-onbrand' : 'text-mut'}`}>{t}</button>)}
      </div>
      <ul key={tab} className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9">
        {tabs[tab].map(({ name, icon: Icon }, i) => (
          <motion.li key={name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.02 }} whileHover={{ y: -4 }} className="flex flex-col items-center gap-2 rounded-xl bg-card p-3 text-center shadow-card">
            <Icon className="h-8 w-8 text-brand" aria-hidden="true" /><span className="text-[11px] font-medium leading-tight">{name}</span>
          </motion.li>))}
      </ul></Section>)
}
