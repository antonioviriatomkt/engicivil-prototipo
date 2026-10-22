# Estado — Protótipo G — Rigor local (B+D)

> **Este ficheiro é o estado ATUAL** — reescreve-o no fim de cada sessão (não acumules histórico aqui; isso vai para `LOG.md`).
> Atualizado: **2026-10-22** · por: sessão 2 (Claude) · branch `claude/nice-cannon-u8j2zu` (continua o PR #3, `claude/wonderful-volta-b4600b`)

## Onde estamos
- `prototypes/g/index.html` = **homepage**, sem estilos inline. Igual ao mockup `G-BD` a 1440 px, exceto o hero (revisto, ver abaixo).
- `prototypes/g/styles.css` = CSS partilhado do G: tokens (`--ink`, `--g700`…`--g200`, `--paper`, `--accent`, `--f-ui/--f-text/--f-mono`, `--wrap`, `--gutter`), utilitários de grelha (`.grid` 12 colunas + `.span-N`/`.start-N`) e componentes (`.sec-head`, `.path`, `.dev`, `.spec`, `.ix-*`, `.cred`, `.form`…). **Páginas novas do G devem usar este ficheiro.**
- `prototypes/g/main.js` = menu recolhido do cabeçalho (abre/fecha, `aria-expanded`, Esc devolve o foco, fecha ao escolher destino). Sem JS o menu fica visível.
- **Topo da homepage (sessão 2, pedidos do António, 22/10)** — por esta ordem:
  1. **Hero = vídeo a toda a largura** (percurso pela obra da Delabie, `public/video/`, 1280×720), em ciclo e sem som. Por cima, em branco: «ENGICIVIL · Aveiro, desde 2013», o título «Construímos, reabilitamos e promovemos edifícios, com as mais modernas soluções construtivas.» e, por baixo, **os carimbos** (sem subtítulo — retirado a pedido do António): 3 caixas pequenas com contorno branco (Classe 5 · PME Líder · TOP 5%), lado a lado com a largura do conteúdo; no telemóvel passam a 2 + 1. «2013» e «30 especialistas» saíram (pedido do António). O 2013 está no eyebrow. ⚠️ Com o subtítulo também retirado, **«30 especialistas» já não aparece em lado nenhum da homepage** (é uma das provas do brief). O `<dl>` tem `aria-label` «Comum aos dois negócios: ENGICIVIL – Cardoso & Manata, Lda.».
     - Véu escuro liso a 60 % (sem gradiente) → texto branco com ≥ 4,8:1 mesmo sobre o píxel mais claro do vídeo (medido em 17 fotogramas).
     - **Sem botão de pausa** (retirado a pedido do António). ⚠️ Falha o critério WCAG 2.2.2 (nível A: movimento automático > 5 s tem de poder ser pausado). Continua a respeitar «reduzir movimento» e poupança de dados (fica parado na capa). Ver próximos passos.
     - Altura: ecrã inteiro menos o cabeçalho (560–820 px; telemóvel 520–720 px).
  2. **Os dois negócios** lado a lado, **sem imagens** (cartões só de texto, mesma altura): Construções (Indústria e serviços · Habitação e reabilitação) e Empreendimentos (Serene e Gaio, link para `#serene` / `#gaio`). Por baixo, o terceiro caminho para promotores → `#locais`.
  3. **Secção «Os dois sócios fundadores»**: foto (span 5, sem legenda) + título, texto factual e botão «Ligar 234 060 223».
  - **Régua do cabeçalho removida** (pedido do António).
  - A barra do carimbo (`.proof`/`.facts`) deixou de existir; foi substituída por `.stamps` no hero.
- Tipografia: Bricolage Grotesque (títulos) + Source Serif 4 (texto) + IBM Plex Mono (dados).
- Responsivo:
  - **≤ 1200 px:** botão «Menu» + barra dos dois negócios (Construções | Empreendimentos) sempre à vista.
  - **761–1080 px (tablet):** cartões de negócio lado a lado; sócios foto | texto; carimbos numa linha; índice «Onde trabalhamos» com o local por cima das obras.
  - **≤ 760 px:** uma coluna (como no mockup móvel), factos em 2 colunas com tamanho reduzido (já não transbordam).
  - Sem scroll horizontal a 390, 768, 1024, 1280 e 1440 px.
- Acessibilidade acrescentada: link «Saltar para o conteúdo», `<main>`, alvos de 44 px no seletor PT/EN e no rodapé, foco visível no rodapé escuro, borda do rádio «Outro assunto» com contraste 3:1, opção escolhida do formulário destacada.

## Próximos passos (sugeridos — o António define a ordem)
1. **Páginas interiores** (a confirmar com o António quais e por que ordem): **Construções** · **Empreendimentos** (listagem) · **Serene** · **Gaio** · **Prédios construídos para terceiros** · **Obra / portefólio** (os links «Ver os N projetos…», «Ver o Serene», «Saber mais» ainda apontam para `#`) · **Sobre** · **Contactos**. Cada uma: `prototypes/g/<pagina>/index.html` + entrada em `vite.config.js`, usando `../styles.css`.
2. Formulário de contacto (só front-end): validação com mensagens em PT, estado «pedido enviado», pré-selecionar o tipo de pedido/edifício a partir dos CTAs («Pedir informação» do Serene → «Comprar casa» + Serene).
3. Opcional: indicar a secção atual no menu (scroll-spy com `aria-current`).
4. Rever com o António o novo topo (capturas `screenshots/g/2026-10-22-hero-full-1440.png` / `-390.png`): intensidade do véu (60 %) e altura do hero.
   - **«30 especialistas»:** decidir onde volta a entrar (ex.: texto da secção dos sócios ou «Sobre nós»).
   - **Pausa do vídeo:** sem o botão, a página falha WCAG 2.2.2. Propor uma solução discreta (ex.: ícone pequeno de pausa num canto, ou o vídeo parar ao fim de um ciclo de 34 s, ou só arrancar ao passar o rato).
5. Vídeo a toda a largura usa 720p esticado até 1440 px — fica ligeiramente suave em ecrãs grandes. Se o António tiver o original em 1080p, gerar uma versão 1080p (H.264 + WebM) para ≥ 1280 px.
6. A foto dos sócios mostra o logótipo antigo ao fundo — substituir quando houver identidade nova.

## Dúvidas em aberto
- Ver «Por confirmar com o cliente» em `context/decisoes.md`.
- O CLAUDE.md pede branches `g/<tema>`; as sessões 1 e 2 usaram os branches atribuídos (`claude/wonderful-volta-b4600b`, `claude/nice-cannon-u8j2zu`). O PR da sessão 2 inclui os commits do PR #3.
- O branch `g/hero` (PR #2, fechado) tinha uma variante com a marca atual (azul) — abandonada; não continuar a partir dele.

## Carregar na próxima sessão
- `prototypes/g/styles.css` · `prototypes/g/index.html` (só as secções relevantes para a página a criar)
- `context/brief.md` (factos) e `context/assets-manifest.csv` se a página precisar de mais imagens
