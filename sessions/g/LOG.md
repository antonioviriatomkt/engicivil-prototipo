# Log — Protótipo G — Rigor local (B+D)

Entrada nova **no topo**. Formato: data · branch · o que mudou · decisões · link do preview.

## 2026-10-22 · claude/nice-cannon-u8j2zu · sessão 2: hero com vídeo a toda a largura
- Continua a partir do PR #3 (`claude/wonderful-volta-b4600b`).
- Pedido do António: o vídeo ocupa o hero todo e contém o título e o subtítulo; a foto dos sócios desce para uma secção própria com o carimbo; os dois negócios mantêm-se, sem imagens.
- Hero: `<video>` em fundo (object-fit: cover) + véu liso a 60 % + eyebrow, título, texto e «Pausar vídeo». Contraste medido em 17 fotogramas: pior caso 4,8:1 (branco sobre o píxel mais claro).
- Cartões dos negócios só com texto (sai a regra de cartão horizontal ≥ 1081 px). Nova secção `.founders`: foto + texto + «Ligar», carimbo por baixo.
- Sem scroll horizontal a 390, 1024 e 1440 px.
- Capturas: `screenshots/g/2026-10-22-hero-full-1440.png`, `…-hero-full-390.png`, `…-g-desktop.png`, `…-g-mobile.png`. Preview: link do Vercel no PR.
- 2.ª ronda (pedido do António): régua do cabeçalho removida; botão «Pausar vídeo» removido (⚠️ falha WCAG 2.2.2, registado no STATUS); o carimbo passou da secção dos sócios para dentro do hero, por baixo do subtítulo, como 5 carimbos individuais com contorno branco em vez de barra.
- 3.ª ronda: saíram os carimbos «2013» e «30 especialistas» (já estão no eyebrow e no subtítulo); os 3 restantes ficaram mais pequenos (valor 18 px, largura do conteúdo).

## 2026-10-22 · claude/wonderful-volta-b4600b · sessão 1 (cont.): vídeo no hero
- O António enviou o vídeo do hero do site atual (percurso pela obra da Delabie, 1080p, 34 s, 25 MB). Comprimido para 720p sem som: MP4 H.264 (4,3 MB) + WebM VP9 (4,4 MB) + capa JPG, em `public/video/`.
- Entra à direita do título, no lugar da foto dos sócios, sem legenda (pedido do António). Botão «Pausar vídeo» (WCAG 2.2.2); não arranca com «reduzir movimento» nem com poupança de dados.
- Captura: `screenshots/g/2026-10-22-hero-video-1440.png`.

## 2026-10-22 · claude/wonderful-volta-b4600b · sessão 1 (cont.): carimbo + vídeo (bloqueado)
- Carimbo redesenhado em forma de bloco de legenda (rótulo escuro + 5 factos de valor curto, numa linha); removido «Valor máximo por obra» (pedido do António). Mobile: 2×2 + último a toda a largura. Capturas: `screenshots/g/2026-10-22-carimbo-*.png`.
- Vídeo do hero de engicivil.pt: não extraído — o host está bloqueado pela política de rede deste ambiente (o fetch também falhou na resolução de DNS). Fica nos próximos passos.

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
