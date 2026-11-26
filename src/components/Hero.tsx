import { motion } from 'framer-motion'
import { Award, CheckCircle2, ChevronRight, Layers } from 'lucide-react'
import Splash from './Splash'
import { PROFILE_IMAGE } from '../data'
const stats = [{ n: '4+', l: 'Years of Experience', href: '#experience', Icon: Award }, { n: '8', l: 'Projects Delivered', href: '#portfolio', Icon: CheckCircle2 }, { n: '3', l: 'Frameworks: Angular, React, Flutter', href: '#skills', Icon: Layers }]
export default function Hero() {
  return (
    <section id="home" className="pb-10 pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <Splash>
            {PROFILE_IMAGE ? <img src={PROFILE_IMAGE} alt="Manoj Soni"  height={360} className="h-[95%] w-auto object-contain" />
              : <div aria-hidden="true" className="w-44 rounded-xl bg-card p-3 text-left shadow-card"><div className="mb-3 flex gap-1.5">{[0, 1, 2].map(i => <span key={i} className="h-2 w-2 rounded-full bg-line" />)}</div>{[80, 100, 60, 90].map((w, i) => <div key={i} className={`mb-2 h-2 rounded ${i % 2 ? 'bg-line' : 'bg-brand'}`} style={{ width: `${w}%` }} />)}</div>}
          </Splash>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
          <p className="mt-6 text-sm font-medium text-mut">Manoj Soni · Full Stack Software Engineer</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">Engineering Digital Experiences That Scale.</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-mut">I build scalable SaaS platforms, engineer real-time systems, and transform complex business requirements into production-ready software.</p>
          <a href="#contact" className="mt-8 inline-block border border-ink px-8 py-3 text-xs font-bold uppercase tracking-wider transition hover:bg-ink hover:text-bg">Get in touch</a>
        </motion.div>
        <ul className="mt-16 grid gap-4 text-left sm:grid-cols-3">
          {stats.map(({ n, l, href, Icon }, i) => (
            <motion.li key={l} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}>
              <a href={href} className="flex items-center gap-4 rounded-xl bg-card p-5 shadow-card">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-onbrand"><Icon size={22} aria-hidden="true" /></span>
                <span className="flex-1"><span className="block text-3xl font-bold text-brand">{n}</span><span className="text-xs font-semibold">{l}</span></span>
                <ChevronRight size={16} className="text-mut" aria-hidden="true" />
              </a>
            </motion.li>))}
        </ul>
      </div></section>)
}
