import './css/index.css'

const DPR = Math.round(window.devicePixelRatio)
const scale = 1 / DPR
const meta = document.querySelector('meta[name="viewport"]')
if (!meta) {
  const meta = document.createElement('meta')
  meta.setAttribute('name', 'viewport')
}
meta.setAttribute('content', `
  width=device-width,
  initial-scale=${scale},
  minimum-scale=${scale},
  user-scalable=no
`)
