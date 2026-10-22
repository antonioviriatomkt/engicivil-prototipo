// Protótipo G — cabeçalho fixo + menu recolhido (≤ 1200 px).
// Sem JS, o cabeçalho fica estático e o menu sempre visível (o CSS só muda quando <html> tem a classe .js).
const root = document.documentElement
const header = document.querySelector('.site-header')
const toggle = header?.querySelector('.menu-toggle')
const menu = document.getElementById('menu')
const hero = document.querySelector('.hero')

// Cabeçalho transparente (.is-over) enquanto está por cima do hero; branco depois, e sempre que o menu está aberto.
let headerTop = 0
const updateHeader = () => {
  if (!header || !hero) return
  const over = !header.classList.contains('is-open') && hero.getBoundingClientRect().bottom > headerTop
  header.classList.toggle('is-over', over)
}

// Mede a altura nos dois estados (no telemóvel, o branco esconde a barra dos negócios).
const measureHeader = () => {
  if (!header) return
  const { classList, style } = header
  const was = { over: classList.contains('is-over'), open: classList.contains('is-open') }
  style.transition = 'none'
  classList.remove('is-open')
  classList.add('is-over')
  headerTop = header.offsetHeight
  classList.remove('is-over')
  root.style.setProperty('--header-top', headerTop + 'px')
  root.style.setProperty('--header-solid', header.offsetHeight + 'px')
  classList.toggle('is-over', was.over)
  classList.toggle('is-open', was.open)
  void header.offsetHeight
  style.transition = ''
}

if (header && hero) {
  measureHeader()
  updateHeader()
  let ticking = false
  addEventListener('scroll', () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => { updateHeader(); ticking = false })
  }, { passive: true })
  addEventListener('resize', () => { measureHeader(); updateHeader() })
  document.fonts?.ready.then(() => { measureHeader(); updateHeader() })
}

if (header && toggle && menu) {
  const label = toggle.querySelector('.menu-toggle__label')

  const setOpen = (open) => {
    header.classList.toggle('is-open', open)
    toggle.setAttribute('aria-expanded', String(open))
    label.textContent = open ? 'Fechar' : 'Menu'
    updateHeader()
  }

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'))

  // Fecha ao escolher um destino (as ligações são âncoras na mesma página).
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('is-open')) {
      setOpen(false)
      toggle.focus()
    }
  })

  // Ao passar para desktop, o menu volta ao estado normal.
  matchMedia('(min-width: 1201px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false)
  })
}

// Vídeo do hero: arranca sem som, em ciclo.
// Se o sistema pedir menos movimento, ou houver poupança de dados, fica parado na imagem de capa.
const video = document.querySelector('.hero-video')

if (video) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const saveData = navigator.connection?.saveData
  if (!reduce && !saveData) video.play().catch(() => {})
}
