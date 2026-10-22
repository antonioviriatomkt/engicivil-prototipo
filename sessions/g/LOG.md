# Log — Protótipo G — Rigor local (B+D)

Entrada nova **no topo**. Formato: data · branch · o que mudou · decisões · link do preview.

## 2026-10-22 · claude/trabalho-em-g-29paml · sessão 6: secção dos dois negócios
- Pedido do António: a secção dos dois negócios tinha demasiado texto. Mostrei 4 variantes numa página temporária (A cartão-link · B índice numerado · C faixa escura · D pergunta); gostou de A e D → fiz A2 e D2 com imagem → escolheu **D2**.
- Homepage: «O que procura?» + dois blocos-link com foto, véu a 60 % e verbo em branco («Construir ou reabilitar» / «Comprar casa»), nome do negócio em pequeno; «Promover um edifício» como botão discreto por baixo. CSS `.path*`/`.hero-third` substituído por `.paths-q`, `.paths`, `.path*`, `.paths-third`.
- Contraste medido: branco sobre o píxel mais claro de cada foto com véu 60 % ≥ 4,8:1.
- Página de variantes apagada (e a entrada no `vite.config.js`). Sem scroll horizontal a 390, 768, 1024 e 1440.
- Capturas: `screenshots/g/2026-10-22-g-desktop.png` / `-mobile.png`.

## 2026-10-22 · claude/nice-cannon-u8j2zu · sessão 5: selos nos carimbos do hero
- Pedido do António: **apagada a faixa de selos** da secção 04 (`ul.seals` + CSS); os selos passam para os **carimbos do hero**, **sem contorno**.
- Carimbos = 5 tiles brancos com o selo (Classe 5 fica em texto, não há selo) + legenda mono branca por baixo: Alvará IMPIC 70366-PUB · IAPMEI, 2020 a 2022 · Melhores PME de Portugal, 2022 · Melhores PME do setor, 2022 · AICCOPN, 2022. Os selos não têm transparência → tile branco em vez de pô-los diretamente sobre o vídeo.
- Grelha de colunas iguais (5 × ≤ 152 px; telemóvel 3 + 2). Margens brancas dos 3 PNG recortadas para os selos ficarem maiores no tile.
- Sem scroll horizontal a 390, 768 e 1440 px. Capturas: `screenshots/g/2026-10-22-g-desktop.png` / `-mobile.png`.
- 2.ª ronda (pedido do António): **sem fundos brancos, aspeto de prémio**. Selos com transparência real (versões `*-transparente.png` e `ruis-aiccopn-branco.svg`, geradas dos ficheiros existentes), diretamente sobre o vídeo, com sombra de medalha; nome + entidade/ano centrados por baixo. Alvará: «CLASSE / 5» tipográfico no lugar do selo (não existe selo), nome «Alvará IMPIC», ref. «70366-PUB».
- 3.ª ronda: selos e «5» reduzidos para **metade** (46 px; telemóvel 34 px), sombra proporcional.
- 4.ª ronda: o António não gostou do layout; mostrei 3 esboços (A faixa no fundo do hero · B coluna à direita · C faixa clara por baixo do hero) e escolheu o **C**. Hero fica só com eyebrow + título; nova `section.awards` «Distinções e qualificações» logo abaixo, fundo branco, selos com as cores e fundos originais, «CLASSE» com o «5» por baixo. Apagadas as versões sem fundo dos selos (`*-transparente.png`, `ruis-aiccopn-branco.svg`), já sem uso. Sem scroll horizontal a 390, 1024 e 1440; a 1440×900 a faixa cabe no primeiro ecrã.
- 5.ª ronda (pedido do António): o **título** (com o eyebrow) passou para cima dos cartões dos dois negócios; o **hero fica só com o logótipo** — «ENGICIVIL» + símbolo da fita (versão clara do SVG do loader), sem «Cardoso & Manata, Lda.» (pedido explícito). Removido o rótulo visível «Distinções e qualificações» (fica como `aria-label`). Sem scroll horizontal a 360, 390, 1024 e 1440.
- 6.ª ronda: o texto «ENGICIVIL» do hero passou a usar o gradiente do símbolo (branco → `#9fa9af`, `background-clip: text`) e a mesma sombra, para o logótipo ficar uniforme.
- 7.ª ronda: título da página (eyebrow + h1) centrado por cima dos cartões.
- 8.ª ronda: logótipo do hero 30 % mais pequeno, tudo branco (texto e símbolo, sem gradientes) e sem sombra.
- 9.ª ronda: slogan «O seu projeto em boas mãos» por baixo do título (do brief); símbolo da fita acrescentado ao wordmark do cabeçalho (cor do texto).
- 10.ª ronda: o slogan passou de baixo do título para baixo do logótipo do hero (branco, itálico, centrado).

## 2026-10-22 · g/certificacoes · selos das distinções
- Faixa de 4 selos (PME Líder 2022, Scoring TOP 5% 2022, Scoring TOP 10 setor 2022, R.U.-I.S.) no fim da secção 04. R.U.-I.S. é o SVG oficial; os outros 3 são recortes provisórios das imagens publicadas pela Engicivil.
- Factos corrigidos: PME Líder 2020–2022 (tabela + carimbo do hero); «Prémio de Excelência» → «TOP 10 Melhores PME do Setor».
- Decisão: usar só selos com o ano efetivamente atribuído (regra do IAPMEI; os selos Scoring também são datados e personalizados).
- Preview: branch `g/certificacoes` no Vercel.

## 2026-10-22 · claude/nice-cannon-u8j2zu · sessão 3: ecrã de carregamento
- **Loader** na homepage G: só o **símbolo** do logótipo atual (a fita dobrada em «Σ»), sem o texto. Redesenhado em **SVG** (7 facetas com gradiente) a partir de `public/img/logos/engicivil-logo.png`, nas **cinzas/ardósia da base neutra** — não usa o azul da marca atual.
- Animação: o símbolo «desenha-se» ao longo da fita (máscara com `stroke-dashoffset`, ~1,3 s) sobre um fantasma a 12 %. Se a página ainda não carregou, apaga e redesenha em ciclo; sai sempre com o símbolo completo (fade + ligeira redução). Failsafe CSS: desaparece aos 8 s.
- Ficheiros: markup no início do `<body>` de `prototypes/g/index.html` (bloco `#loader`), CSS em `prototypes/g/styles.css` (secção «Ecrã de carregamento»), lógica em `prototypes/g/loader.js`. Só aparece com JS (classe `is-loading` posta no `<html>` pelo script inline do `<head>`). «Reduzir movimento»: símbolo estático, ~0,5 s. `role="status"` + «A carregar…».
- `scripts/screenshots.mjs` espera que o loader saia antes de capturar (não afeta o F).
- **Decisão (António):** usar o símbolo atual no loader, apesar de a regra geral ser wordmark de texto. Quando houver identidade nova, trocar o SVG no `#loader`.
- Feito primeiro em `claude/blissful-ritchie-dkgmoi` (PR #5, a partir do `main` antigo) e transposto para este branch, que é a versão mais recente. Merge para `main` a pedido do António.
- Capturas: `screenshots/g/2026-10-22-g-desktop.png` / `-mobile.png`.
- **Decisão (António):** loader **só na primeira visita da sessão** (flag `g-loader` no `sessionStorage`; por separador). Se o armazenamento falhar, o loader não aparece.

## 2026-10-22 · claude/nice-cannon-u8j2zu · sessão 2: hero com vídeo a toda a largura
- Continua a partir do PR #3 (`claude/wonderful-volta-b4600b`).
- Pedido do António: o vídeo ocupa o hero todo e contém o título e o subtítulo; a foto dos sócios desce para uma secção própria com o carimbo; os dois negócios mantêm-se, sem imagens.
- Hero: `<video>` em fundo (object-fit: cover) + véu liso a 60 % + eyebrow, título, texto e «Pausar vídeo». Contraste medido em 17 fotogramas: pior caso 4,8:1 (branco sobre o píxel mais claro).
- Cartões dos negócios só com texto (sai a regra de cartão horizontal ≥ 1081 px). Nova secção `.founders`: foto + texto + «Ligar», carimbo por baixo.
- Sem scroll horizontal a 390, 1024 e 1440 px.
- Capturas: `screenshots/g/2026-10-22-hero-full-1440.png`, `…-hero-full-390.png`, `…-g-desktop.png`, `…-g-mobile.png`. Preview: link do Vercel no PR.
- 2.ª ronda (pedido do António): régua do cabeçalho removida; botão «Pausar vídeo» removido (⚠️ falha WCAG 2.2.2, registado no STATUS); o carimbo passou da secção dos sócios para dentro do hero, por baixo do subtítulo, como 5 carimbos individuais com contorno branco em vez de barra.
- 3.ª ronda: saíram os carimbos «2013» e «30 especialistas» (já estão no eyebrow e no subtítulo); os 3 restantes ficaram mais pequenos (valor 18 px, largura do conteúdo).
- 4.ª ronda: saiu o subtítulo do hero («Somos 30 especialistas…»). O hero fica com eyebrow, título e carimbos.
- «30 especialistas, com engenharia e estaleiro próprios» entra no texto da secção dos sócios (era a única menção que restava fora do hero).

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
