// Capturas de página inteira (desktop 1440 + mobile 390) para rever o trabalho de cada sessão.
// Uso:  npm run build && npx vite preview --port 4173 &   depois   npm run shots -- f   (ou g, ou mockups)
// Saída: screenshots/<alvo>/<data>-desktop.png e -mobile.png
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const target = process.argv[2] || 'f'
const base = process.env.BASE_URL || 'http://localhost:4173'
const pages = {
  f: ['/prototypes/f/'],
  g: ['/prototypes/g/'],
  mockups: ['/mockups/F-BC.html', '/mockups/G-BD.html'],
}[target]
if (!pages) { console.error('alvo: f | g | mockups'); process.exit(1) }

const day = new Date().toISOString().slice(0, 10)
const out = `screenshots/${target}`
mkdirSync(out, { recursive: true })
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
for (const path of pages) {
  const slug = path.replace(/\/(index\.html)?$/, '').split('/').filter(Boolean).pop().replace('.html', '')
  for (const [label, width] of [['desktop', 1440], ['mobile', 390]]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } })
    await page.goto(base + path, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    // Percorre a página para carregar imagens com loading="lazy" antes da captura.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo({ top: y, behavior: 'instant' }); await new Promise(r => setTimeout(r, 60)) }
      window.scrollTo({ top: 0, behavior: 'instant' })
      await Promise.race([Promise.all([...document.images].map(img => img.complete || new Promise(r => { img.onload = img.onerror = r }))), new Promise(r => setTimeout(r, 5000))])
    })
    const file = `${out}/${day}-${slug}-${label}.png`
    await page.screenshot({ path: file, fullPage: true })
    console.log(file)
    await page.close()
  }
}
await browser.close()
