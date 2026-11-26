import type { ReactNode } from 'react'
// import { manojimg1 } from '../data'
export default function Splash({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[320/290] w-full max-w-xs">
      {/* <svg viewBox="0 0 320 290" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path className="fill-brand" d="M60 80C20 140 30 230 110 260C190 295 280 270 300 190C320 110 270 30 190 20C130 12 90 40 60 80Z" />
        <circle cx="46" cy="58" r="8" className="fill-brand" /><circle cx="284" cy="256" r="12" className="fill-brand opacity-60" /><circle cx="300" cy="40" r="5" className="fill-brand opacity-70" />
      </svg>  */}
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
     
      {/* <img src={manojimg1}></img> */}
    </div>)
}
