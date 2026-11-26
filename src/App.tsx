import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { Experience, Education } from './components/Experience'
import Contact from './components/Contact'
export default function App() {
  return (<>
    <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-brand focus:px-3 focus:py-2 focus:text-onbrand">Skip to content</a>
    <Header /><main><Hero /><About /><Skills /><Projects /><Experience /><Education /><Contact /></main>
    <footer className="py-10 text-center"><p className="text-2xl font-extrabold">Manoj<span className="text-brand">.</span></p><p className="mt-2 text-xs text-mut">© {new Date().getFullYear()} Manoj Soni. All rights reserved.</p></footer>
  </>)
}
