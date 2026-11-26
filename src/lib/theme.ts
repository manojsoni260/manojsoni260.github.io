import { useState } from 'react'
export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const toggle = () => {
    const n = !dark
    document.documentElement.classList.toggle('dark', n)
    try { localStorage.setItem('theme', n ? 'dark' : 'light') } catch { /* storage unavailable */ }
    setDark(n)
  }
  return { dark, toggle }
}
