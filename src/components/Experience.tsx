import { GraduationCap, Briefcase } from 'lucide-react'
import { Section, SectionHead, Reveal } from './Section'
import { EXPERIENCE_POINTS } from '../data'
export function Experience() {
  return (
    <Section id="experience">
      <SectionHead id="experience" label="Experience" title="Where I’ve Been Building" />
      <Reveal className="rounded-2xl bg-card p-6 shadow-card md:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-onbrand"><Briefcase size={20} aria-hidden="true" /></span>
          <div><p className="text-xs font-bold uppercase tracking-wider text-brand">May 2022 – Present</p><h3 className="text-xl font-bold">Full Stack &amp; Angular Developer</h3><p className="text-sm text-mut">Segnotech</p></div>
        </div>
        <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">{EXPERIENCE_POINTS.map(p => <li key={p} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{p}</li>)}</ul>
      </Reveal></Section>)
}
export function Education() {
  return (
    <Section id="education">
      <SectionHead id="education" label="Education" title="Academic Background" />
      <Reveal className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-card md:p-8">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-onbrand"><GraduationCap size={20} aria-hidden="true" /></span>
        <div><p className="text-xs font-bold uppercase tracking-wider text-brand">2018 – 2022</p><h3 className="text-xl font-bold">B.Tech Computer Science</h3><p className="text-sm text-mut">Rajasthan Technical University, Kota</p><p className="mt-1 text-sm">CGPA: 7.8</p></div>
      </Reveal></Section>)
}
