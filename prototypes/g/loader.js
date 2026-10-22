// Ecrã de carregamento: o símbolo desenha-se uma vez; se a página ainda não acabou de carregar,
// repete o ciclo (apaga e redesenha) e sai sempre com o símbolo completo.
const root = document.documentElement
const loader = document.getElementById('loader')

if (loader && root.classList.contains('is-loading')) {
  const trace = loader.querySelector('.loader-trace')
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  let loaded = document.readyState === 'complete'
  let drawn = false

  const finish = () => {
    loader.classList.remove('is-looping')
    loader.classList.add('is-done')
    setTimeout(() => {
      root.classList.remove('is-loading')
      loader.remove()
    }, 550)
  }

  const onDrawn = () => {
    drawn = true
    if (loaded) finish()
    else loader.classList.add('is-looping')
  }

  // Em ciclo, só sai no fim de uma volta (símbolo completo).
  trace.addEventListener('animationiteration', () => { if (loaded) finish() })

  if (!loaded) addEventListener('load', () => {
    loaded = true
    if (drawn && reduce) finish()
  }, { once: true })

  if (reduce) setTimeout(onDrawn, 500)
  else trace.addEventListener('animationend', onDrawn, { once: true })
}
