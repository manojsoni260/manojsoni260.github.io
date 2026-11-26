const c = n => `rgb(var(--${n}) / <alpha-value>)`
export default { darkMode: 'class', content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { bg: c('bg'), card: c('card'), ink: c('ink'), mut: c('mut'), line: c('line'), brand: c('brand'), onbrand: c('onbrand') },
    boxShadow: { card: '0 2px 4px rgba(0,0,0,.04), 0 10px 28px rgba(0,0,0,.08)' } } }, plugins: [] }
