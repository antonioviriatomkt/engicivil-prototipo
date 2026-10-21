# Estado — Protótipo F — Rigor com imagem (B+C)

> **Este ficheiro é o estado ATUAL** — reescreve-o no fim de cada sessão (não acumules histórico aqui; isso vai para `LOG.md`).
> Atualizado: **2026-10-21** · por: sessão «base da homepage» (Claude)

## Onde estamos
- `prototypes/f/index.html` = **homepage**, fiel ao mockup `mockups/F-BC.*` a 1440 px, agora **sem CSS inline** (exceção: `object-position` de uma imagem).
- `prototypes/f/styles.css` = estilos partilhados do F: tokens (`--ink`, `--g800…--g200`, `--paper`, `--accent`, fontes, `--t-*` tipo fluido com `clamp()`, `--gutter`, `--sec-y`), base, componentes por ordem da homepage, responsivo (≤1100, ≤900, ≤760). **Páginas novas do F devem usar este ficheiro** (`<link rel="stylesheet" href="../styles.css">`).
- `prototypes/f/main.js` = menu (botão real com `aria-expanded`, fecha com Esc / clique fora / ao escolher link / ao sair com Tab; foco volta ao botão) + formulário sem envio (mensagem `role="status"`).
- Corrigido nesta sessão: overflow horizontal a 390 px («Empreendimentos»), título a sair do cartão a 1024 px, faixa de factos partida a 761–1100 px (passa a 3 colunas), links «Prédios construídos»/«Empresa» inacessíveis a 761–1100 px (agora há botão Menu), `role="cell"` em `<h3>`/`<a>` (anulava título/link), alvos < 44 px (barra de serviço, wordmark, rodapé, PT/EN), skip link + `<main>`, smooth scroll respeitando `prefers-reduced-motion`.
- Tipografia: Instrument Serif (títulos) + Hanken Grotesk (corpo) + IBM Plex Mono (dados).

## Próximos passos (prioridade sugerida — o António define)
1. **Páginas interiores** (confirmar lista e ordem com o António): **Empreendimentos** (listagem) · **Serene** · **Gaio** · **Construções** · **Prédios construídos para terceiros** · **Obra / portefólio** (24 projetos) · **Sobre** · **Contactos**. Cada uma: `prototypes/f/<pagina>/index.html` + entrada em `vite.config.js`. Depois trocar os `href="#"` da homepage pelos links reais.
2. **Formulário** (front-end): validação acessível (mensagens por campo), campo «Empreendimento» só quando «Comprar casa», pré-seleção a partir dos CTA «Pedir informação» do Serene/Gaio (ex.: `#contacto?emp=serene`).
3. Extrair cabeçalho/rodapé repetidos quando houver 2+ páginas (Vite não tem includes — decidir entre copiar ou um plugin simples de partials).
4. Revisão de contraste das legendas sobre o hero (`--g200` sobre a foto) e do logo Gaio sobre imagem.
5. Seletor PT/EN: hoje é só proposta visual (links `#`).

## Dúvidas em aberto
- Ver «Por confirmar com o cliente» em `context/decisoes.md`.
- Branch: o `CLAUDE.md` pede `f/<tema>`; esta sessão correu no branch atribuído pela plataforma (`claude/eager-goldberg-s787lk`).

## Carregar na próxima sessão
- `prototypes/f/index.html` · `prototypes/f/styles.css` · `prototypes/f/main.js`
- `context/brief.md` (factos e imagens) se for fazer páginas de empreendimentos ou obra; `context/assets-manifest.csv` para escolher imagens.
- Capturas atuais: `screenshots/f/2026-10-21-f-desktop.png` e `-mobile.png`.
