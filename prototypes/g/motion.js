// Protótipo G — propostas de motion (temporário, até o António escolher). Estilos em motion.css.
// A proposta vem da classe .motion-a / .motion-b no <html> (posta no <head> a partir de ?motion=a | b).
// Sem proposta, ou com «reduzir movimento», só aparece o seletor: a página fica como estava.
const root = document.documentElement
const variant = root.classList.contains('motion-a') ? 'a' : root.classList.contains('motion-b') ? 'b' : null

// ---------- Seletor de proposta (canto inferior esquerdo) ----------
const switcher = document.createElement('nav')
switcher.className = 'mo-switch'
switcher.setAttribute('aria-label', 'Proposta de motion')
switcher.innerHTML = '<span class="mo-switch__label">Motion</span>' + [
  ['', 'Atual', ''],
  ['a', 'A', 'Discreta'],
  ['b', 'B', 'Construtiva'],
].map(([v, short, long]) => {
  const url = new URL(location.href)
  if (v) url.searchParams.set('motion', v)
  else url.searchParams.delete('motion')
  url.hash = ''
  const current = (variant || '') === v ? ' aria-current="page"' : ''
  return `<a href="${url.pathname + url.search}"${current}>${short}${long ? `<span class="mo-switch__long">${long}</span>` : ''}</a>`
}).join('')
document.body.append(switcher)

if (variant) {
  // ---------- Entradas ao fazer scroll ----------
  // Cada elemento ganha .is-in quando entra no ecrã (uma vez). --d = atraso, para entrar em sequência.
  // As cortinas (clip-path) observam o elemento pai: o Chrome conta o recorte do próprio elemento e nunca o daria como visível.
  const targets = new Map()
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return
      targets.get(e.target).forEach((el) => el.classList.add('is-in'))
      targets.delete(e.target)
      io.unobserve(e.target)
    })
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
  const observe = (el, trigger = el.classList.contains('wp') ? el.parentElement : el) => {
    if (!targets.has(trigger)) targets.set(trigger, [])
    targets.get(trigger).push(el)
    io.observe(trigger)
  }

  // cls = classe do estado inicial (rv = fade, wp = cortina, line-rv = fio); step = ms entre irmãos; cols = recomeça a contagem a cada N (grelhas)
  const reveal = (selector, { cls = 'rv', step = 0, cols = Infinity, delay = 0 } = {}) => {
    document.querySelectorAll(selector).forEach((el) => {
      const i = [...el.parentElement.children].indexOf(el) % cols
      if (cls) el.classList.add(cls)
      el.style.setProperty('--d', delay + i * step + 'ms')
      observe(el)
    })
  }

  // ---------- Hero: entrada depois do ecrã de carregamento ----------
  const hero = document.querySelector('.hero')
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

  // ---------- Galeria: a imagem anterior sai por cima da nova ----------
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
      const frames = variant === 'a'
        ? [{ opacity: 1 }, { opacity: 0 }]
        : [{ clipPath: 'inset(0 0 0 0)' }, { clipPath: 'inset(0 0 0 100%)' }]
      ghost.animate(frames, { duration: variant === 'a' ? 500 : 750, easing: 'cubic-bezier(.65, 0, .35, 1)', fill: 'forwards' })
        .finished.then(() => ghost.remove())
    }, true)
  })

  if (variant === 'a') {
    afterLoader(() => requestAnimationFrame(() => hero?.classList.add('is-in')))

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

  if (variant === 'b') {
    // Hero: parte o nome em letras e acrescenta à fita a máscara do traço (a mesma do loader)
    const name = hero?.querySelector('.hero-logo__name')
    if (name) name.innerHTML = [...name.textContent].map((c, i) => `<span class="ch" style="--ci:${i}">${c}</span>`).join('')
    const mark = hero?.querySelector('.hero-logo__mark')
    if (mark) {
      const ns = 'http://www.w3.org/2000/svg'
      mark.insertAdjacentHTML('afterbegin', '<defs><mask id="hero-mask" maskUnits="userSpaceOnUse" x="-10" y="-10" width="130" height="120"><path class="hero-trace" pathLength="1" d="M103,40 L103,83 L57,91.5 L12,83 L40,50 L12,17 L57,8.5 L103,17 L103,60" fill="none" stroke="#fff" stroke-width="15" stroke-linejoin="miter" stroke-miterlimit="10"/></mask></defs>')
      const g = document.createElementNS(ns, 'g')
      g.setAttribute('mask', 'url(#hero-mask)')
      g.append(...mark.querySelectorAll('polygon'))
      mark.append(g)
    }
    afterLoader(() => requestAnimationFrame(() => requestAnimationFrame(() => hero?.classList.add('is-in'))))

    // Títulos: cada palavra sobe da sua «máscara»
    document.querySelectorAll('.intro__title, .sec-intro__title, .founders__title').forEach((t) => {
      if (t.children.length) return
      const words = t.textContent.trim().split(/\s+/)
      t.innerHTML = words.map((w, i) => `<span class="w"><span style="--wi:${i}">${w}</span></span>`).join(' ')
      observe(t)
    })

    reveal('.award', { cls: '', step: 120 })
    reveal('.intro__eyebrow')
    reveal('.paths-q', { delay: 200 })
    reveal('.path', { cls: 'wp', step: 150, delay: 150 })
    reveal('.path__text', { delay: 700 })
    reveal('.paths-third', { delay: 300 })
    reveal('.founders__img', { cls: 'wp' })
    reveal('.founders__text > :not(.founders__title)', { step: 90, delay: 300 })
    reveal('.sec-intro__eyebrow')
    reveal('.sec-intro__lead', { delay: 350 })
    reveal('.cons-card img', { cls: 'wp' })
    reveal('.cons-card__body', { delay: 400 })
    reveal('.cons__why-title')
    reveal('.cons__list', { cls: 'line-rv' })
    reveal('.cons__list li', { step: 120, delay: 250 })
    reveal('.cta-strip', { cls: 'line-rv' })
    reveal('.cta-strip > *', { step: 100, delay: 200 })
    reveal('.dev-tablist')
    reveal('.gallery__main', { cls: 'wp' })
    reveal('.gallery__thumbs', { delay: 300 })
    reveal('.dev-brand', { cls: 'wp', delay: 200 })
    reveal('.dev-info > :not(.dev-brand):not(.spec)', { step: 80, delay: 350 })
    reveal('.spec', { cls: 'line-rv', delay: 400 })
    // cartões dos prédios: a cortina sobe em cada foto, com atraso por coluna
    document.querySelectorAll('.pred-card').forEach((card, i) => {
      const d = (i % 3) * 140
      const img = card.querySelector('img')
      img.classList.add('wp')
      img.style.setProperty('--d', d + 'ms')
      observe(img)
      const body = card.querySelector('.pred-card__body')
      body.classList.add('rv')
      body.style.setProperty('--d', d + 350 + 'ms')
      observe(body)
    })
    reveal('.contact__form')
    reveal('.contact-strip', { cls: 'line-rv' })
    reveal('.contact-strip > div', { step: 90, delay: 200 })

    // Números que contam (0 → valor) quando entram no ecrã. O valor real fica para leitores de ecrã.
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        countIO.unobserve(e.target)
        const el = e.target
        const to = +el.dataset.to
        const t0 = performance.now() + 300 // começa quando o cartão já está a aparecer
        const tick = (t) => {
          const k = Math.min(1, Math.max(0, (t - t0) / 1100))
          el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)))
          if (k < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
    }, { threshold: 1 })
    document.querySelectorAll('.cons-card .kicker, .dev-tablist button span').forEach((el) => {
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
      for (let node; (node = walker.nextNode());) {
        const m = node.data.match(/\d+/)
        if (!m) continue
        const rest = node.splitText(m.index)
        rest.data = rest.data.slice(m[0].length)
        const sr = Object.assign(document.createElement('span'), { className: 'sr-only', textContent: m[0] })
        const vis = Object.assign(document.createElement('span'), { className: 'mo-count', textContent: '0' })
        vis.setAttribute('aria-hidden', 'true')
        vis.dataset.to = m[0]
        vis.style.minWidth = m[0].length + 'ch'
        rest.before(sr, vis)
        countIO.observe(vis)
        break
      }
    })

    // ---------- Ligado ao scroll: hero, cabeçalho, linha do processo ----------
    const header = document.querySelector('.site-header')
    const line = document.querySelector('.proc-line')
    const steps = [...document.querySelectorAll('.proc-step')]
    const mobile = matchMedia('(max-width: 760px)')
    let lastY = scrollY

    const onScroll = () => {
      const y = scrollY
      const vh = innerHeight

      // Hero: logótipo sobe mais devagar e desvanece; o vídeo aproxima-se
      if (hero) {
        const h = hero.offsetHeight
        if (y < h) {
          const k = y / h
          hero.style.setProperty('--hero-shift', y * 0.35 + 'px')
          hero.style.setProperty('--hero-fade', String(Math.max(0, 1 - k * 1.4)))
          hero.style.setProperty('--hero-zoom', String(1 + k * 0.08))
        }
      }

      // Cabeçalho: esconde ao descer (depois do hero), volta ao subir; régua = progresso na página
      if (header) {
        const past = hero ? hero.getBoundingClientRect().bottom < 0 : y > 200
        const busy = header.classList.contains('is-open') || header.contains(document.activeElement)
        if (!past || busy || y < lastY - 4) header.classList.remove('is-hidden')
        else if (y > lastY + 4) header.classList.add('is-hidden')
        header.style.setProperty('--progress', String(y / Math.max(1, root.scrollHeight - vh)))
      }
      lastY = y

      // Linha do processo: enche entre 85 % e 35 % da altura do ecrã; cada passo acende quando a linha lá chega
      if (line) {
        if (mobile.matches) {
          steps.forEach((s) => s.classList.toggle('is-on', s.getBoundingClientRect().top < vh * 0.75))
        } else {
          const top = line.getBoundingClientRect().top
          const p = Math.min(1, Math.max(0, (vh * 0.85 - top) / (vh * 0.5)))
          line.style.setProperty('--p', String(p))
          steps.forEach((s, i) => s.classList.toggle('is-on', p > 0 && p >= i / (steps.length - 1) - 0.001))
        }
      }
    }

    let ticking = false
    addEventListener('scroll', () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => { onScroll(); ticking = false })
    }, { passive: true })
    addEventListener('resize', onScroll)
    onScroll()
  }
}
