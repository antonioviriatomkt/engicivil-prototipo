// Protótipo F — comportamento mínimo partilhado pelas páginas.

// Menu (≤1100 px): botão real com aria-expanded; fecha com Esc, clique fora ou ao escolher um link.
const btn = document.querySelector('.menu__btn')
const panel = document.getElementById('menu-panel')
if (btn && panel) {
  const setOpen = (open, { focusBtn = false } = {}) => {
    btn.setAttribute('aria-expanded', String(open))
    btn.querySelector('.menu__lbl').textContent = open ? 'Fechar' : 'Menu'
    panel.hidden = !open
    if (open) panel.querySelector('a')?.focus()
    else if (focusBtn) btn.focus()
  }
  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'))
  panel.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false) })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) setOpen(false, { focusBtn: true })
  })
  document.addEventListener('click', (e) => {
    if (!panel.hidden && !e.target.closest('.menu')) setOpen(false)
  })
  // Ao sair do menu com Tab, fecha.
  panel.addEventListener('focusout', (e) => {
    if (!panel.hidden && !e.currentTarget.parentElement.contains(e.relatedTarget)) setOpen(false)
  })
}

// Formulário: protótipo sem envio real.
const form = document.querySelector('.form')
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    form.querySelector('.form__msg').textContent =
      'Protótipo: o pedido não foi enviado. No site final, a mensagem segue para a equipa escolhida.'
  })
}
