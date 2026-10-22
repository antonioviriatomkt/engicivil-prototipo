// Propostas da secção 02 Empreendimentos: separadores (C) e galeria (C).

// Separadores (padrão ARIA tabs, ativação automática com as setas)
document.querySelectorAll('[data-tabs]').forEach((root) => {
  const tabs = [...root.querySelectorAll('[role="tab"]')]
  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab
      t.setAttribute('aria-selected', on)
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
  select(tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0])
})

// Galeria: a miniatura escolhida passa para a imagem principal
document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const main = gallery.querySelector('.ec-gallery__main')
  const buttons = [...gallery.querySelectorAll('.ec-gallery__thumbs button')]
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img')
      main.src = img.src
      main.alt = img.alt
      buttons.forEach((b) => b.setAttribute('aria-pressed', b === btn))
    })
  })
})
