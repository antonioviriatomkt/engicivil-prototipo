// Propostas da secção 05: portas que escolhem o tipo de pedido (C) e campos conforme o pedido (D).

// C — «Pedir orçamento» / «Pedir informação» marcam o tipo de pedido antes de saltar para o formulário
document.querySelectorAll('[data-pick]').forEach((link) => {
  link.addEventListener('click', () => {
    const radio = document.getElementById(link.dataset.pick)
    if (radio) radio.checked = true
  })
})

// D — mostra só os campos do pedido escolhido (data-when="obra" | "casa")
document.querySelectorAll('form[data-dyn]').forEach((form) => {
  const update = () => {
    const tipo = form.querySelector('input[name="tipo"]:checked')?.value
    form.querySelectorAll('[data-when]').forEach((el) => { el.hidden = el.dataset.when !== tipo })
  }
  form.addEventListener('change', update)
  update()
})
