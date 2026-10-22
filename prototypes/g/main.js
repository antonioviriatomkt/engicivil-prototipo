// Protótipo G — menu recolhido do cabeçalho (≤ 1200 px).
// Sem JS, o menu fica sempre visível (o CSS só o esconde quando <html> tem a classe .js).
const header = document.querySelector('.site-header')
const toggle = header?.querySelector('.menu-toggle')
const menu = document.getElementById('menu')

if (header && toggle && menu) {
  const label = toggle.querySelector('.menu-toggle__label')

  const setOpen = (open) => {
    header.classList.toggle('is-open', open)
    toggle.setAttribute('aria-expanded', String(open))
    label.textContent = open ? 'Fechar' : 'Menu'
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
