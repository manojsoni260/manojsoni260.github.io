import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { NAV } from '../data'
import { useTheme } from '../lib/theme'
export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useTheme()
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    NAV.forEach(n => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el) })
    const onS = () => setScrolled(scrollY > 8); onS(); addEventListener('scroll', onS, { passive: true })
    return () => { io.disconnect(); removeEventListener('scroll', onS) }
  }, [])
  const link = (n: string) => `block px-3 py-2 text-sm font-medium transition-colors ${active === n.toLowerCase() ? 'text-brand' : 'text-mut hover:text-brand'}`
  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-bg/90 backdrop-blur transition-shadow ${scrolled ? 'shadow-card' : ''}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-2xl font-extrabold tracking-tight">Manoj<span className="text-brand">.</span></a>
        <nav aria-label="Primary" className="hidden md:block"><ul className="flex">{NAV.map(n => <li key={n}><a href={`#${n.toLowerCase()}`} aria-current={active === n.toLowerCase() ? 'page' : undefined} className={link(n)}>{n}</a></li>)}</ul></nav>
        <div className="flex items-center gap-3">
          <button role="switch" aria-checked={dark} aria-label="Dark mode" onClick={toggle} className="relative h-8 w-14 rounded-full bg-card shadow-card">
            <span className={`absolute top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-onbrand transition-all ${dark ? 'left-7' : 'left-1'}`}>{dark ? <Moon size={14} /> : <Sun size={14} />}</span>
          </button>
          <button className="p-1 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-bg px-5 pb-4 md:hidden"><ul>{NAV.map(n => <li key={n}><a href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className={link(n)}>{n}</a></li>)}</ul></nav>}
    </header>)
}
