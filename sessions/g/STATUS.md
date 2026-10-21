# Estado — Protótipo G — Rigor local (B+D)

> **Este ficheiro é o estado ATUAL** — reescreve-o no fim de cada sessão (não acumules histórico aqui; isso vai para `LOG.md`).
> Atualizado: **2026-10-21** · por: sessão «hero» (Claude, branch `g/hero`)

## Onde estamos
- `prototypes/g/index.html` = **homepage** convertida do mockup `mockups/G-BD.dc.html` (HTML estático, CSS inline, imagens em `/img/…`).
- **Hero refeito (pedido do António):** título e texto por baixo, à esquerda (7 col.) · Fig. 1 (sócios + legenda + «Prefere falar?») à direita (5 col.) · por baixo, os dois negócios lado a lado (6 + 6 col.) · faixa de factos. Em telemóvel: título → texto → foto → Construções → Empreendimentos (a barra móvel com os dois negócios continua no topo).
- Ideia da direção: antes/depois; mosaico de obra; índice «Onde trabalhamos» com os prédios para terceiros; diagrama «uma empresa, dois negócios».
- Tipografia: Bricolage Grotesque (títulos) + Source Serif 4 (texto) + IBM Plex Mono (dados) (Google Fonts, `<link>` no `<head>`).
- Referência visual congelada: `mockups/G-BD-desktop.jpg` e `mockups/G-BD-mobile.jpg`.

## Próximos passos (sugeridos — o António define a ordem)
1. Corrigir problemas já existentes vistos nesta sessão (não mexidos): a 1024 px o cabeçalho parte-se em duas linhas e a faixa de factos sobrepõe «30 especialistas» a «PME Líder»; a 390 px «30 especialistas» encosta à margem. Rever o resto da página a 390 px.
   - Opcional: com os cartões a 6 col., as imagens 3:2 ficam altas (~400 px) e empurram os factos para baixo — considerar 16:9.
2. Extrair o CSS inline para `prototypes/g/styles.css` (tokens de cor/tipo/espaçamento como variáveis CSS) para poder criar mais páginas sem duplicar.
3. Navegação funcional: menu mobile, âncoras, estados de foco.
4. Páginas interiores (a confirmar com o António): **Construções** · **Empreendimentos** (listagem) · **Serene** · **Gaio** · **Prédios construídos para terceiros** · **Obra / portefólio** · **Sobre** · **Contactos**.
5. Formulário de contacto (só front-end; sem envio real).

## Dúvidas em aberto
- Ver «Por confirmar com o cliente» em `context/decisoes.md`.

## Carregar na próxima sessão
- `context/brief.md` · `context/brief-r2.md` · `context/decisoes.md` (primeira sessão deste protótipo)
- `prototypes/g/index.html` · `mockups/G-BD-desktop.jpg` · `screenshots/g/2026-10-21-g-*.png`
