# Log — Protótipo G — Rigor local (B+D)

Entrada nova **no topo**. Formato: data · branch · o que mudou · decisões · link do preview.

## 2026-10-22 · claude/blissful-ritchie-dkgmoi · ecrã de carregamento
- **Loader** na homepage G: só o **símbolo** do logótipo atual (a fita dobrada em «Σ»), sem o texto. Redesenhado em **SVG** (7 facetas com gradiente) a partir de `public/img/logos/engicivil-logo.png`, nas **cinzas/ardósia da base neutra** — não usa o azul da marca atual.
- Animação: o símbolo «desenha-se» ao longo da fita (máscara com `stroke-dashoffset`, ~1,3 s) sobre um fantasma a 12 %. Se a página ainda não carregou, apaga e redesenha em ciclo; sai sempre com o símbolo completo (fade + ligeira redução). Failsafe CSS: desaparece aos 8 s aconteça o que acontecer.
- Ficheiros: markup + CSS em `prototypes/g/index.html`, lógica em `prototypes/g/loader.js`. Só aparece com JS (classe `is-loading` posta por um script inline no `<head>`). `prefers-reduced-motion`: símbolo estático, ~0,5 s. `role="status"` + «A carregar…» para leitores de ecrã.
- `scripts/screenshots.mjs` espera que o loader saia antes de capturar (não afeta o F).
- **Decisão (António):** usar o símbolo atual no loader, apesar de a regra geral ser wordmark de texto. Quando houver identidade nova, trocar o símbolo (só o SVG no `#loader`).
- Preview: link Vercel do branch/PR.

## 2026-10-21 · main · setup
- Repositório criado. Homepage convertida do mockup `G-BD` (tela de design, ronda 2) para `prototypes/g/index.html`.
- Contexto do projeto copiado do vault da Viriato para `context/`.
