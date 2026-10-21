# Estado — Protótipo G — Rigor local (B+D)

> **Este ficheiro é o estado ATUAL** — reescreve-o no fim de cada sessão (não acumules histórico aqui; isso vai para `LOG.md`).
> Atualizado: **2026-10-21** · por: sessão «hero + marca atual» (Claude, branch `g/hero`)

## Onde estamos
- `prototypes/g/index.html` = **homepage** (HTML estático; CSS ainda quase todo inline, mais um `<style>` com tokens e o hero).
- **Marca atual aplicada (pedido do António, 21/10):** a G deixou a base neutra e usa os tokens de `context/tokens-atuais.json`.
  - Cores: azul `#2e71a8`, cinza `#575757`, texto `#333333`, cinza claro `#efefef`, linhas `#dddddd`/`#cdcdcd`.
  - Tipo: Roboto Condensed (400 no corpo, 700 nos títulos); h1/h2 e botões em maiúsculas.
  - Botões com raio 0; logótipo atual (`/img/logos/engicivil-logo.png`) no cabeçalho.
  - Variáveis CSS em `:root` no `<style>` (`--blue`, `--grey-dark`, `--text`, `--light`, `--edge`, `--line`, `--font`).
- **Hero:**
  - Em cima: título e texto à esquerda, foto dos sócios (4:3, P&B) à direita, sem legenda nem «Fig.».
  - Por baixo: dois blocos de cor, com o mesmo peso — **Construções** em cinza `#575757` e **Empreendimentos** em azul `#2e71a8`, texto branco (contraste 7:1 e 5:1).
  - A seguir, a faixa de factos em `#efefef` (3 colunas abaixo de 1100 px).
  - Em telemóvel: título → texto → Construções → Empreendimentos → foto → factos.
- Contraste AA verificado por script em toda a página (1440 e 390 px): sem falhas. Sem scroll horizontal a 1440, 1024 e 390 px.
- Tipografia anterior (Bricolage Grotesque, Source Serif 4, IBM Plex Mono) foi substituída.

## Próximos passos (prioridade sugerida — o António define)
1. **Menu móvel.** Abaixo de 760 px só há a barra Construções/Empreendimentos: «Onde trabalhamos», «Sobre nós» e «Contactos» ficam inacessíveis. Entre 761 e 960 px o cabeçalho quebra em duas linhas. Resolver com um botão Menu.
2. Rever o resto da página com a marca atual: secções escuras, legendas «Fig.» fora do hero, o selo «Projeto em Empresas» das fotos antes/depois, o rodapé (links com 36 px de altura — subir para 44).
3. Extrair o CSS inline para `prototypes/g/styles.css`.
4. Páginas interiores (a confirmar): Construções · Empreendimentos · Serene · Gaio · Prédios para terceiros · Obra · Sobre · Contactos.
5. Formulário (só front-end).

## Dúvidas em aberto
- A marca atual vale só para a G, ou também para o F? (Hoje o F continua na base neutra.)
- O seletor PT/EN fica escondido abaixo de 1100 px (é só proposta).
- Ver também «Por confirmar com o cliente» em `context/decisoes.md`.

## Carregar na próxima sessão
- `prototypes/g/index.html` · `context/tokens-atuais.json`
- Capturas: `screenshots/g/2026-10-21-g-*.png`
