// Propostas da secção 03: prédio em destaque (C) e filtro por tipo de obra (D).

// C — escolher um prédio da lista troca a imagem e a legenda do destaque
document.querySelectorAll('[data-feature]').forEach((root) => {
  const img = root.querySelector('.lc-feature__img')
  const name = root.querySelector('.lc-feature__name')
  const loc = root.querySelector('.lc-feature__loc')
  const buttons = [...root.querySelectorAll('.lc-list button')]
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      img.src = btn.dataset.img
      img.alt = btn.dataset.alt
      name.textContent = btn.dataset.name
      loc.textContent = `${btn.dataset.loc} · Edifício de habitação`
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)))
    })
  })
})

// D — filtro por tipo de obra (botões de alternância; anuncia o número de obras visíveis)
document.querySelectorAll('[data-filter]').forEach((root) => {
  const chips = [...root.querySelectorAll('[data-f]')]
  const cards = [...root.querySelectorAll('[data-type]')]
  const count = root.querySelector('[data-count]')
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const f = chip.dataset.f
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)))
      let n = 0
      cards.forEach((card) => {
        const show = f === 'all' || card.dataset.type === f
        card.hidden = !show
        if (show) n++
      })
      count.textContent = `${n} obras`
    })
  })
})
