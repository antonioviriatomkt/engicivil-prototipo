# Engicivil — protótipos de website (F e G)

Website-conceito feito pela **Viriato** (agência) para a **Engicivil – Cardoso & Manata, Lda.** (Aveiro), construtora e promotora. É trabalho de prospeção: o cliente viu as primeiras direções e respondeu. Há **dois protótipos independentes**, cada um desenvolvido em várias sessões:

| Protótipo | Pasta | Estado e próximos passos | Mockup de partida |
|---|---|---|---|
| **F — Rigor com imagem** (B+C) | `prototypes/f/` | `sessions/f/STATUS.md` | `mockups/F-BC.*` |
| **G — Rigor local** (B+D) | `prototypes/g/` | `sessions/g/STATUS.md` | `mockups/G-BD.*` |

## ⭐ Como começar uma sessão
1. A pessoa diz em que protótipo se trabalha (**F** ou **G**). Se não disser, pergunta. **Uma sessão = um protótipo.** Não mexas no outro.
2. Lê `sessions/<f|g>/STATUS.md` — diz onde a última sessão parou, o que falta e que ficheiros de contexto carregar. Lê só esses.
3. Na primeira sessão de cada protótipo (ou quando o STATUS mandar), lê `context/brief.md`, `context/brief-r2.md` e `context/decisoes.md`.
4. Trabalha num branch `<f|g>/<tema-curto>` (ex.: `f/hero`, `g/pagina-empreendimentos`).

## ⭐ Como acabar uma sessão (obrigatório, mesmo que a sessão seja curta)
1. Atualiza `sessions/<f|g>/STATUS.md` — reescreve o estado atual (é a verdade presente, não um histórico): o que está feito, o que falta (lista priorizada), dúvidas em aberto, ficheiros a carregar na próxima sessão.
2. Acrescenta uma entrada no topo de `sessions/<f|g>/LOG.md`: data, branch, o que mudou, decisões tomadas, link do preview.
3. Se foi tomada uma decisão de design ou de conteúdo que vale para os dois protótipos, regista-a em `context/decisoes.md`.
4. Gera capturas: `npm run build && (npx vite preview --port 4173 &) && npm run shots -- <f|g>` (ver «Capturas»).
5. Commit + push do branch e abre PR para `main` com o resumo da sessão.

## Regras de conteúdo (não negociáveis — detalhe em `context/brief.md`)
- **PT-PT.** Copy factual. **Nunca inventar** números, prazos, preços, testemunhos, nomes, promotores ou certificações. O que faltar → placeholder entre `[ ]`.
- **Não usar BREEAM/LEED/WELL nem classe energética** como certificação. **Não mostrar nomes de particulares** (os nomes de ficheiro de algumas fotos contêm nomes — nunca os mostres como legenda).
- **Dois negócios com peso igual:** **ENGICIVIL Construções** (obra para terceiros) e **ENGICIVIL Empreendimentos** (promoção própria) — nomes de trabalho do cliente. Mais a secção de **prédios construídos para terceiros**.
- **Base neutra (F):** paleta só de cinzas + acento ardósia `#5f6b73`, wordmark de texto «ENGICIVIL». **Exceção — G:** desde 21/10/2026 usa a marca atual (`context/tokens-atuais.json`), por decisão do António (ver `context/decisoes.md`). **Não criar identidade visual** (cores de marca, logótipo) — a identidade nova é um trabalho à parte e ainda não foi feita. Tipografia de cada protótipo: a do mockup.
- Acessibilidade AA: contraste 4.5:1, alvos ≥ 44 px, `<a>`/`<button>`/`<label>` reais. Tem de funcionar a 390 px.

## Stack
- HTML + CSS estático, servido e compilado com **Vite** (multi-página). Sem framework. JS só quando preciso (menus, filtros, galerias), em ficheiros `.js` por protótipo.
- `npm install` · `npm run dev` (http://localhost:5173) · `npm run build` (→ `dist/`) · `npm run preview`.
- Imagens em `public/img/…`, referidas como `/img/…`. Catálogo: `context/assets-manifest.csv` (dimensões e origem). As fotos de obra têm ~770 px — **não as usar em largura total**; os renders exteriores dos empreendimentos têm 1920 px.
- **Páginas novas:** `prototypes/<f|g>/<pagina>/index.html` + entrada em `vite.config.js` (`rollupOptions.input`).
- CSS: começou inline (vem do mockup). À medida que o protótipo cresce, extrai para `prototypes/<f|g>/styles.css` partilhado entre as páginas desse protótipo — sem misturar F e G.
- **Deploy:** Vercel, ligado ao GitHub — cada branch/PR tem link de preview; `main` = versão estável. A raiz (`/`) é um índice com links para os protótipos e mockups.

## Capturas
`scripts/screenshots.mjs` grava páginas inteiras (desktop 1440 + mobile 390) em `screenshots/<alvo>/`. Precisa de um servidor em `http://localhost:4173` (`npx vite preview --port 4173`). Se o Chromium do Playwright não estiver instalado, define `CHROMIUM_PATH` para um Chromium existente (ex.: `/opt/pw-browsers/chromium-*/chrome-linux/chrome`) ou corre `npx playwright install chromium`.

## Mapa do repositório
```
CLAUDE.md                 ← este ficheiro
context/
  cliente.md              ← ficha da Engicivil (cópia do vault da Viriato, 21/10/2026)
  feedback-cliente.md     ← o que o cliente disse
  brief.md                ← factos, proibições, base neutra, imagens, conteúdo mínimo da homepage
  brief-r2.md             ← ronda 2: dois negócios lado a lado + prédios para terceiros
  decisoes.md             ← decisões tomadas (datadas)
  direcoes-design.md      ← as 7 direções exploradas (A–G) e porque F e G avançaram
  tokens-atuais.json      ← identidade ATUAL do site da Engicivil (referência, não usar)
  assets-manifest.csv     ← catálogo das imagens
mockups/                  ← ponto de partida congelado (não editar): .dc.html (fonte da tela de design), .html, capturas .jpg
prototypes/f/  prototypes/g/   ← o trabalho
sessions/f/  sessions/g/       ← STATUS.md (estado atual) + LOG.md (histórico)
public/img/               ← imagens (do site público engicivil.pt)
scripts/screenshots.mjs
```

## Onde vive o resto
- O **estado comercial** (conversas com o cliente, propostas) vive no vault da Viriato, não aqui. Se a pessoa trouxer feedback novo do cliente, regista-o em `context/feedback-cliente.md` e diz-lhe para o levar também ao vault.
- Tela de design com as direções A–G (privada, Claude): ver `context/direcoes-design.md`.
