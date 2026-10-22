// Propostas da secção 01 Construções: comparador antes/depois (C) e separadores (D).

// C — comparador: o <input type="range"> por cima das imagens move a linha
document.querySelectorAll('.ba-slider').forEach((slider) => {
  const range = slider.querySelector('.ba-slider__range')
  const update = () => slider.style.setProperty('--pos', `${range.value}%`)
  range.addEventListener('input', update)
  update()
})

// D — separadores (padrão ARIA tabs, ativação automática com as setas)
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
