# Log — Protótipo G — Rigor local (B+D)

Entrada nova **no topo**. Formato: data · branch · o que mudou · decisões · link do preview.

## 2026-10-22 · claude/wonderful-volta-b4600b · sessão 1: CSS partilhado + navegação
- Comparada a homepage com o mockup (capturas 1440/390): conversão fiel; problemas só em ecrãs pequenos (cabeçalho partido, sem acesso a «Onde trabalhamos/Sobre/Contactos», factos a transbordar).
- CSS inline extraído para `prototypes/g/styles.css` com tokens e componentes; HTML reescrito com classes (sem `style=`), desktop idêntico ao mockup.
- Menu recolhido ≤ 1200 px (`prototypes/g/main.js`), barra dos dois negócios mantida; layout tablet novo (761–1080 px); factos e cartões sem transbordo.
- Acessibilidade: skip link, `<main>`, alvos 44 px (PT/EN, rodapé), foco visível no rodapé, contraste da borda do rádio «Outro assunto».
- Decisões: menu recolhido abaixo de 1200 px (a navegação completa não cabe numa linha); no tablet os dois negócios ficam lado a lado e os sócios passam para baixo.
- Capturas: `screenshots/g/2026-10-22-g-desktop.png`, `…-mobile.png`. Preview: link do Vercel no PR.

## 2026-10-21 · main · setup
- Repositório criado. Homepage convertida do mockup `G-BD` (tela de design, ronda 2) para `prototypes/g/index.html`.
- Contexto do projeto copiado do vault da Viriato para `context/`.
