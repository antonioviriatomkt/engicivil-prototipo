# Log — Protótipo F — Rigor com imagem (B+C)

Entrada nova **no topo**. Formato: data · branch · o que mudou · decisões · link do preview.

## 2026-10-21 · claude/eager-goldberg-s787lk · base da homepage
- Comparação com o mockup a 1440 / 1024 / 390 px. Desktop fiel; problemas encontrados e corrigidos:
  - 390 px: «Empreendimentos» (título de capítulo) transbordava → scroll horizontal.
  - 1024 px: «Empreendimentos» saía do cartão de entrada; faixa de factos partia «2.656.000 €».
  - 761–1100 px: «Prédios construídos» e «Empresa» sumiam do cabeçalho sem alternativa.
  - `role="cell"` aplicado a `<h3>` e `<a>` anulava título/link para leitores de ecrã.
  - Alvos < 44 px (telefone/email da barra, wordmark, rodapé, PT/EN).
- CSS inline extraído para `prototypes/f/styles.css` com tokens; tipo fluido (`clamp`) em vez de saltos por breakpoint.
- `prototypes/f/main.js`: menu com botão real (≤1100 px), Esc/clique fora/Tab fecham; formulário sem envio com aviso.
- Skip link, `<main>`, `width`/`height` nas imagens, `loading="lazy"`, links «Ver projetos»/«Saber mais» com texto oculto que diz de quê.
- Pequenas diferenças assumidas face ao mockup: barra de serviço 44 px (era 40), botões com altura uniforme (o mockup tinha 50 vs 52 por causa da borda), cartões de entrada em coluna única abaixo de 900 px, botão Menu também a 761–1100 px.
- `scripts/screenshots.mjs`: percorre a página antes da captura para carregar imagens lazy (afeta F e G só na captura).
- Decisões: nenhuma nova para `context/decisoes.md`.
- Preview: link do Vercel no PR deste branch.

## 2026-10-21 · main · setup
- Repositório criado. Homepage convertida do mockup `F-BC` (tela de design, ronda 2) para `prototypes/f/index.html`.
- Contexto do projeto copiado do vault da Viriato para `context/`.
