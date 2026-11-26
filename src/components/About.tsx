import { Code2 } from 'lucide-react'
import { Section, SectionHead, Reveal } from './Section'
import Splash from './Splash'
import { RESUME_PATH } from '../data'
import { manojimg2 } from '../data'
export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal><Splash>
          <img src={manojimg2} alt="Manoj Soni" height={360} className="h-[95%] w-auto object-contain" />
          {/* <Code2 className="h-24 w-24 text-onbrand" strokeWidth={1.4} aria-hidden="true" /> */}
          </Splash>
        </Reveal>
        <div>
          <SectionHead id="about" label="About me" title="Need a Reliable Engineer? I Can Help You!" />
          <Reveal className="space-y-4 text-sm leading-relaxed text-mut">
            <p>I’m Manoj Soni, a Full Stack Software Engineer with 4+ years of experience building enterprise SaaS platforms, backend architecture and real-time applications.</p>
            <p>My work spans enterprise and government projects, from multi-tenant backends and secure authentication to live messaging, audio/video and payment integrations. I work across Django, Angular, React and Flutter, and take features end to end, from requirements to deployment on AWS.</p>
            <div className="flex flex-wrap gap-3 pt-3">
              <a href="#contact" className="bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-onbrand transition hover:opacity-90">Hire me</a>
              <a href={RESUME_PATH} download className="border border-ink px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink transition hover:bg-ink hover:text-bg">Download CV</a>
            </div>
          </Reveal>
        </div>
      </div></Section>)
}
