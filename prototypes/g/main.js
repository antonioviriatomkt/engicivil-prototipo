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

// Separadores (padrão ARIA tabs, ativação automática com as setas). Usado nos empreendimentos (secção 02).
document.querySelectorAll('[data-tabs]').forEach((root) => {
  const tabs = [...root.querySelectorAll('[role="tab"]')]
  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab
      t.setAttribute('aria-selected', String(on))
      t.tabIndex = on ? 0 : -1
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on
    })
    if (focus) tab.focus()
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab))
    tab.addEventListener('keydown', (e) => {
      const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key]
      if (next === undefined) return
      e.preventDefault()
      select(tabs[(next + tabs.length) % tabs.length], true)
    })
  })

  // Ligações para um painel (ex.: #serene, #gaio nos cartões dos dois negócios) abrem o separador certo antes de saltar.
  const tabFor = (hash) => tabs.find((t) => '#' + t.getAttribute('aria-controls') === hash)
  document.addEventListener('click', (e) => {
    const tab = tabFor(e.target.closest('a[href^="#"]')?.getAttribute('href'))
    if (tab) select(tab)
  })
  select(tabFor(location.hash) || tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0])
})

// Galeria: a miniatura escolhida passa para a imagem principal.
document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const main = gallery.querySelector('.gallery__main')
  const buttons = [...gallery.querySelectorAll('.gallery__thumbs button')]
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img')
      main.src = img.src
      main.alt = img.alt
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)))
    })
  })
})

// Formulário de contacto: mostra só os campos do pedido escolhido (data-when="obra" | "casa").
document.querySelectorAll('form[data-dyn]').forEach((form) => {
  const update = () => {
    const tipo = form.querySelector('input[name="tipo"]:checked')?.value
    form.querySelectorAll('[data-when]').forEach((el) => { el.hidden = el.dataset.when !== tipo })
  }
  form.addEventListener('change', update)
  update()
})
