# Estado — Protótipo G — Rigor local (B+D)

> **Este ficheiro é o estado ATUAL** — reescreve-o no fim de cada sessão (não acumules histórico aqui; isso vai para `LOG.md`).
> Atualizado: **2026-10-22** · por: sessão 1 (Claude) · branch `claude/wonderful-volta-b4600b`

## Onde estamos
- `prototypes/g/index.html` = **homepage**, visualmente igual ao mockup `G-BD` a 1440 px (verificado por comparação de capturas), agora **sem estilos inline**.
- `prototypes/g/styles.css` = CSS partilhado do G: tokens (`--ink`, `--g700`…`--g200`, `--paper`, `--accent`, `--f-ui/--f-text/--f-mono`, `--wrap`, `--gutter`), utilitários de grelha (`.grid` 12 colunas + `.span-N`/`.start-N`) e componentes (`.sec-head`, `.path`, `.dev`, `.spec`, `.ix-*`, `.cred`, `.form`…). **Páginas novas do G devem usar este ficheiro.**
- `prototypes/g/main.js` = menu recolhido do cabeçalho (abre/fecha, `aria-expanded`, Esc devolve o foco, fecha ao escolher destino). Sem JS o menu fica visível.
- **Hero revisto** (pedido do António, 22/10):
  - Título com a copy do site atual, reduzida e com a promoção: «Construímos, reabilitamos e promovemos edifícios, com as mais modernas soluções construtivas.» Por cima, «ENGICIVIL · Aveiro, desde 2013».
  - Cartões mais baixos, com linhas de autoidentificação: Construções (Indústria e serviços · Habitação e reabilitação) e Empreendimentos (Serene e Gaio, com link para cada ficha `#serene` / `#gaio`).
  - Sócios ao centro com botão «Ligar 234 060 223».
  - Terceiro caminho, mais discreto, para promotores: «Vai promover um edifício? Veja os prédios que construímos para outros promotores» → `#locais`.
  - Os dois botões principais ficam no primeiro ecrã a 1440×900 e 1280×800. No telemóvel, os cartões vêm antes da foto, e a faixa de factos mostra só 4 itens.
- Tipografia: Bricolage Grotesque (títulos) + Source Serif 4 (texto) + IBM Plex Mono (dados).
- Responsivo:
  - **≤ 1200 px:** botão «Menu» + barra dos dois negócios (Construções | Empreendimentos) sempre à vista.
  - **761–1080 px (tablet):** os dois cartões de negócio lado a lado, foto dos sócios por baixo; factos em 3 colunas; índice «Onde trabalhamos» com o local por cima das obras.
  - **≤ 760 px:** uma coluna (como no mockup móvel), factos em 2 colunas com tamanho reduzido (já não transbordam).
  - Sem scroll horizontal a 390, 768, 1024, 1280 e 1440 px.
- Acessibilidade acrescentada: link «Saltar para o conteúdo», `<main>`, alvos de 44 px no seletor PT/EN e no rodapé, foco visível no rodapé escuro, borda do rádio «Outro assunto» com contraste 3:1, opção escolhida do formulário destacada.

## Próximos passos (sugeridos — o António define a ordem)
1. **Páginas interiores** (a confirmar com o António quais e por que ordem): **Construções** · **Empreendimentos** (listagem) · **Serene** · **Gaio** · **Prédios construídos para terceiros** · **Obra / portefólio** (os links «Ver os N projetos…», «Ver o Serene», «Saber mais» ainda apontam para `#`) · **Sobre** · **Contactos**. Cada uma: `prototypes/g/<pagina>/index.html` + entrada em `vite.config.js`, usando `../styles.css`.
2. Formulário de contacto (só front-end): validação com mensagens em PT, estado «pedido enviado», pré-selecionar o tipo de pedido/edifício a partir dos CTAs («Pedir informação» do Serene → «Comprar casa» + Serene).
3. Opcional: indicar a secção atual no menu (scroll-spy com `aria-current`).
4. Rever com o António a versão tablet (não existia no mockup; foi decisão desta sessão) e o novo hero (capturas `screenshots/g/2026-10-22-hero-antes-*.png` / `-depois-*.png`).
5. A foto dos sócios mostra o logótipo antigo ao fundo — substituir quando houver identidade nova.

## Dúvidas em aberto
- Ver «Por confirmar com o cliente» em `context/decisoes.md`.
- O CLAUDE.md pede branches `g/<tema>`; esta sessão usou o branch atribuído pela sessão (`claude/wonderful-volta-b4600b`).

## Carregar na próxima sessão
- `prototypes/g/styles.css` · `prototypes/g/index.html` (só as secções relevantes para a página a criar)
- `context/brief.md` (factos) e `context/assets-manifest.csv` se a página precisar de mais imagens
