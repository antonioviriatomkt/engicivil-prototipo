# Log — Protótipo G — Rigor local (B+D)

Entrada nova **no topo**. Formato: data · branch · o que mudou · decisões · link do preview.

## 2026-10-22 · claude/wonderful-volta-b4600b · sessão 1 (cont.): hero, 2.ª revisão
- Pedido do António: foto dos sócios em cima, à direita do título; as duas opções em baixo; sem a legenda da Fig. 1.
- Cabeça: título + texto + «Ligar 234 060 223» (span 7) | foto 4:3 (span 5). Cartões lado a lado (span 6), horizontais no desktop (imagem 1/3), com a mesma altura.
- Figuras renumeradas (Fig. 1–6). CTAs: 846 px a 1440×900 (visíveis); 809 px a 1280×800 (logo abaixo da dobra).
- Capturas: `screenshots/g/2026-10-22-hero-rev2-*.png`.

## 2026-10-22 · claude/wonderful-volta-b4600b · sessão 1 (cont.): hero revisto
- Título: copy do site atual da Engicivil, reduzida e com a promoção (decisão do António): «Construímos, reabilitamos e promovemos edifícios, com as mais modernas soluções construtivas.» + linha «ENGICIVIL · Aveiro, desde 2013».
- Cartões: imagens 5:2, linhas de autoidentificação (tipos de obra / Serene e Gaio com link para a ficha), CTAs alinhados. Sócios: foto 4:3 + botão «Ligar». Novo terceiro caminho para promotores → «Onde trabalhamos».
- Primeiro ecrã: os CTAs passaram de 1040 px para 757 px (1440×900) e de 1002 px para 733 px (1280×800). Telemóvel: cartões antes da foto (CTA Empreendimentos 2311 px → 1482 px); factos reduzidos a 4.
- Capturas: `screenshots/g/2026-10-22-hero-antes-*.png`, `…-hero-depois-*.png`.

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
