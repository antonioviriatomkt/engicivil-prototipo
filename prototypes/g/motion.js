// Protótipo G — motion e micro-animações («Discreta», escolhida pelo António). Estilos em motion.css.
// Só corre com a classe .motion no <html> (posta no <head>, exceto com «reduzir movimento»).
// Sem JS ou com «reduzir movimento», a página fica estática. O botão de pausa do vídeo aparece sempre.
const root = document.documentElement
const hero = document.querySelector('.hero')

// ---------- Pausa do vídeo do hero (WCAG 2.2.2) ----------
const video = hero?.querySelector('.hero-video')
if (video) {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = 'hero-pause'
  btn.innerHTML = '<span class="hero-pause__icon" aria-hidden="true"></span>'
  const sync = () => {
    btn.setAttribute('aria-pressed', String(video.paused))
    btn.setAttribute('aria-label', video.paused ? 'Reproduzir o vídeo' : 'Pausar o vídeo')
  }
  btn.addEventListener('click', () => (video.paused ? video.play().catch(() => {}) : video.pause()))
  video.addEventListener('play', sync)
  video.addEventListener('pause', sync)
  sync()
  hero.append(btn)
}

if (root.classList.contains('motion')) {
  // ---------- Entradas ao fazer scroll ----------
  // Cada elemento ganha .is-in quando entra no ecrã (uma vez). --d = atraso, para entrar em sequência.
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return
      e.target.classList.add('is-in')
      io.unobserve(e.target)
    })
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })

  // cls = classe do estado inicial (rv = fade, line-rv = fio); step = ms entre irmãos; cols = recomeça a contagem a cada N (grelhas)
  const reveal = (selector, { cls = 'rv', step = 0, cols = Infinity, delay = 0 } = {}) => {
    document.querySelectorAll(selector).forEach((el) => {
      const i = [...el.parentElement.children].indexOf(el) % cols
      if (cls) el.classList.add(cls)
      el.style.setProperty('--d', delay + i * step + 'ms')
      io.observe(el)
    })
  }

  // ---------- Hero: entrada depois do ecrã de carregamento ----------
  const loader = document.getElementById('loader')
  const afterLoader = (fn) => {
    if (!loader || !root.classList.contains('is-loading')) return fn()
    let done = false
    const go = () => { if (!done) { done = true; fn() } }
    new MutationObserver((_, mo) => {
      if (loader.classList.contains('is-done') || !root.classList.contains('is-loading')) { mo.disconnect(); go() }
    }).observe(loader, { attributes: true, attributeFilter: ['class'] })
    setTimeout(go, 8500) // o loader sai sempre aos 8 s
  }
  afterLoader(() => requestAnimationFrame(() => hero?.classList.add('is-in')))

  // ---------- Galeria: a imagem anterior desvanece por cima da nova ----------
  // Fase de captura: corre antes do main.js trocar a imagem, para guardar uma cópia da anterior.
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const main = gallery.querySelector('.gallery__main')
    gallery.querySelector('.gallery__thumbs')?.addEventListener('click', (e) => {
      const btn = e.target.closest('button')
      if (!btn || btn.getAttribute('aria-pressed') === 'true') return
      gallery.querySelectorAll('.gallery__ghost').forEach((g) => g.remove())
      const ghost = document.createElement('img')
      ghost.src = main.currentSrc || main.src
      ghost.alt = ''
      ghost.className = 'gallery__ghost'
      ghost.style.width = main.offsetWidth + 'px'
      ghost.style.height = main.offsetHeight + 'px'
      main.before(ghost)
      ghost.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500, easing: 'cubic-bezier(.65, 0, .35, 1)', fill: 'forwards' })
        .finished.then(() => ghost.remove())
    }, true)
  })

  reveal('.award', { step: 80 })
  reveal('.intro')
  reveal('.paths-q')
  reveal('.path', { step: 120 })
  reveal('.paths-third')
  reveal('.founders__img')
  reveal('.founders__text', { delay: 150 })
  reveal('.sec-intro > *', { step: 90 })
  reveal('.cons-card', { step: 120 })
  reveal('.cons__why-title')
  reveal('.cons__list', { cls: 'line-rv' })
  reveal('.cons__list li', { step: 110, delay: 200 })
  reveal('.cta-strip', { cls: 'line-rv' })
  reveal('.cta-strip > *', { step: 100, delay: 150 })
  reveal('.dev-tablist')
  reveal('.gallery')
  reveal('.dev-info', { delay: 120 })
  reveal('.spec', { cls: 'line-rv', delay: 200 })
  reveal('.pred-card', { step: 110, cols: 3 })
  reveal('.proc-line', { cls: '' })
  reveal('.proc-step', { step: 260 })
  reveal('.contact__form')
  reveal('.contact-strip', { cls: 'line-rv' })
  reveal('.contact-strip > div', { step: 90, delay: 200 })
}
