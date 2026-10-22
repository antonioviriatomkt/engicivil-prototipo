# Estado — Protótipo G — Rigor local (B+D)

> **Este ficheiro é o estado ATUAL** — reescreve-o no fim de cada sessão (não acumules histórico aqui; isso vai para `LOG.md`).
> Atualizado: **2026-10-22** · por: sessão 8 (Claude) · branch `claude/blissful-cerf-u8l1t1` — motion feito (proposta A «Discreta»).

> Lembrete do António: é um **protótipo para mostrar o design ao cliente**, não um site de produção.

## Onde estamos
**Sessão 8 — motion e micro-animações: feito.** O António escolheu a proposta **A «Discreta»** (de 2; a B «Construtiva» foi apagada):
- entradas em fade curto (16 px), em sequência nos cartões, uma vez;
- hero: o vídeo «assenta» (1,06 → 1) e o logótipo e o slogan entram depois do loader;
- os fios por cima das listas (mais-valias, ficha, CTA, contactos) desenham-se;
- a linha do «Como trabalhamos» desenha-se do 1 ao 4 e os círculos aparecem em sequência;
- ligações com seta que avança; galeria em fade cruzado; o traço dos separadores Serene | Gaio desliza;
- campos do formulário e menu recolhido entram suavemente; botões com transições;
- **botão de pausa do vídeo do hero** (canto inferior direito), sempre presente (WCAG 2.2.2).
- Ficheiros: `prototypes/g/motion.css` + `prototypes/g/motion.js`; a classe `.motion` é posta no `<head>` (exceto com «reduzir movimento»). Sem JS ou com «reduzir movimento» a página fica estática.
- **Páginas novas do G:** copiar a linha `.motion` do `<head>`, o `<link>` do `motion.css` e o `<script>` do `motion.js`; acrescentar os seletores novos às chamadas `reveal(...)` do `motion.js`.

**A homepage do G está completa de cima a baixo.** O hero, a faixa de distinções e os sócios ficaram fechados na sessão 5. Os dois negócios e o cabeçalho fixo foram feitos na sessão 6. As secções 01–05 foram refeitas na sessão 7. Em cada secção o António escolheu uma de 4 propostas; as capturas das propostas estão em `screenshots/g/2026-10-22-<secção>-{a,b,c,d}-*.png`.

### Ficheiros
- `prototypes/g/index.html` = homepage (sem estilos inline).
- `prototypes/g/styles.css` = CSS partilhado do G. Contém:
  - tokens (`--ink`, `--g700`…`--g200`, `--paper`, `--accent`, `--f-ui/--f-text/--f-mono`, `--wrap`, `--gutter`);
  - a grelha `.grid`;
  - o cabeçalho de secção centrado `.sec-intro` (eyebrow «0N · …» + título + texto), usado em todas as secções;
  - os componentes de cada secção.

  **Páginas novas do G devem usar este ficheiro.**
- `prototypes/g/main.js` = JS do G:
  - cabeçalho fixo: transparente sobre o hero (`.is-over`), branco depois; mede as alturas para `--header-top`/`--header-solid`;
  - menu recolhido (≤ 1200 px);
  - arranque do vídeo do hero;
  - separadores (`[data-tabs]`, padrão ARIA; uma ligação para o id de um painel abre o separador certo);
  - galeria (`[data-gallery]`);
  - campos do formulário que dependem do tipo de pedido (`form[data-dyn]` + `[data-when]`).
- `prototypes/g/loader.js` + bloco `#loader` = ecrã de carregamento (símbolo da fita).
  - Só aparece na primeira visita da sessão (`sessionStorage` `g-loader`). Para o rever: abrir um separador novo.
  - Páginas novas do G devem copiar o bloco `#loader`, a classe `is-loading` no script do `<head>` e o `<script src="…/loader.js">`.

### Homepage, por ordem
1. **Cabeçalho fixo** (sessão 6): wordmark «ENGICIVIL» + símbolo da fita.
   - Com JS fica fixo no topo: transparente com texto branco por cima do hero, branco depois.
   - `scroll-padding-top` evita que as âncoras fiquem tapadas. Sem JS fica estático.
   - ≤ 1200 px: botão «Menu» + barra dos dois negócios, que se esconde quando o cabeçalho fica branco.
   - O item «Sobre nós» leva à secção dos sócios (`#sobre`).
   - O item «Onde trabalhamos» leva à 03 (`#locais`).
2. **Hero:** vídeo a toda a largura com o logótipo branco ao centro e o slogan «O seu projeto em boas mãos».
   - Véu escuro a 60 %.
   - Botão de pausa no canto inferior direito (sessão 8).
3. **Faixa de distinções** (fundo branco): Alvará classe 5 · PME Líder 2020–2022 · TOP 5% PME 2022 · TOP 10 PME do setor 2022 · R.U.-I.S. Selos em `public/img/selos/`; 3 deles são provisórios.
4. **Título da página + os dois negócios** (sessão 6, versão «D2»):
   - `<h1>` centrado;
   - «O que procura?» + dois blocos-link com foto e véu a 60 %: «Construir ou reabilitar» → `#construcoes` · «Comprar casa» → `#empreendimentos`;
   - botão discreto «Promover um edifício» → `#locais`.
5. **Os dois sócios fundadores** (`#sobre`): foto, texto e «Ligar».
6. **01 Construções** (`#construcoes`, branco):
   - título centrado;
   - 3 cartões com foto (Indústria e serviços · Construção · Reabilitação), com «Ver projetos de …» → `#`;
   - faixa «Porquê a ENGICIVIL» (4 mais-valias) + faixa «Pedir orçamento».
   - Classes `.cons*`.
7. **02 Empreendimentos** (`#empreendimentos`, papel):
   - separadores Serene | Gaio;
   - galeria (exterior + 3 interiores) + ficha com logótipo, lema e `.spec` (`[Área m²] · [Preço sob consulta]`).
   - Os painéis têm `id="serene"`/`id="gaio"`.
   - Classes `.dev-*`, `.gallery`.
8. **03 Prédios para promotores** (`#locais`, branco):
   - 6 cartões (foto, «Construído pela ENGICIVIL», local, `[Promotor]`, `[À venda / vendido]`).
   - **Sem CTAs** (pedido do António).
   - Classes `.pred-*`.
9. **04 Como trabalhamos** (`#processo`, papel): 4 passos numa linha com círculos numerados (vertical no telemóvel). Classes `.proc-*`.
10. **05 Contacto** (`#contacto`, branco):
    - formulário ao centro com o tipo de pedido em mosaicos:
      - «Fazer uma obra» mostra tipo de obra + local;
      - «Comprar casa» mostra o edifício;
    - faixa de contactos por baixo (telefone · geral@ · comercial@ · morada).
    - Ids `g-*`; classes `.contact*`, `.radios--tiles`.
11. **Rodapé** escuro. Os links não têm sublinhado e sublinham ao passar o rato ou com o foco (pedido do António).

- A antiga secção 04 «Sobre nós e credenciais» foi **removida** (pedido do António). As credenciais ficam na faixa de distinções, nas mais-valias da 01 e no rodapé.
- Tipografia: Bricolage Grotesque (títulos) + Source Serif 4 (texto) + IBM Plex Mono (dados).
- Sem scroll horizontal a 360, 390, 768, 1024, 1280 e 1440 px.
- Capturas da página inteira: `screenshots/g/2026-10-22-g-desktop.png` / `-mobile.png`.

## Próximos passos (sugeridos — o António define a ordem)
1. **Rever a página inteira com o António**: ritmo entre secções, fundos (branco/papel alternados) e repetição entre as mais-valias da 01 e os passos da 04.
2. **Páginas interiores** (confirmar quais e a ordem): Construções / portefólio (os «Ver projetos de …» apontam para `#`) · Serene · Gaio (os «Ver o Serene/Gaio» apontam para `#`) · Prédios para promotores · Contactos / Política de Privacidade. Cada uma: `prototypes/g/<pagina>/index.html` + entrada em `vite.config.js`, usando `../styles.css`.
3. **Formulário** (só front-end): validação com mensagens em PT, estado «pedido enviado», pré-seleção a partir dos CTAs (ex.: «Pedir informação» do Serene → «Comprar casa» + Serene).
4. ~~Pausa do vídeo~~ feita (sessão 8).
5. **Selos:** substituir os 3 recortes (PME Líder, Scoring TOP 5%, Scoring TOP 10) pelos ficheiros oficiais e confirmar se há anos mais recentes.
6. Vídeo do hero em 1080p, se houver o original.
7. Os dois negócios: a foto da Delabie é a mesma obra do vídeo do hero. Alternativas, se o António quiser variar: `public/img/site/construcao-3.jpg` ou `ribas-i-3.jpg`.
8. Quando houver identidade nova, trocar: a foto dos sócios (tem o logótipo antigo ao fundo), o símbolo do loader e o do wordmark.

## Dúvidas em aberto
- Ver «Por confirmar com o cliente» em `context/decisoes.md`. Mais específicas do G:
  - `[prazo]` de resposta no contacto;
  - `[Concelho]` de Peralta e Rios, Viela do Canto, Ribas e Rua do Gravito;
  - `[Promotor]` e `[À venda / vendido]` de cada prédio;
  - que email serve cada negócio (hipótese: geral@ → Construções, comercial@ → Empreendimentos).
- Da Gafanha de Aquém só há fotos em obra. Os ficheiros da Rua do Gravito chamam-se `ed-pedro-cardoso-*` (o nome não é mostrado).

## Carregar na próxima sessão
- `prototypes/g/motion.css` · `prototypes/g/motion.js` (se a sessão mexer em animações ou criar páginas)
- `prototypes/g/styles.css` · `prototypes/g/main.js` · `prototypes/g/index.html` (só as secções relevantes)
- `context/brief.md` (factos) e `context/assets-manifest.csv` se a página precisar de mais imagens
