# Estado — Protótipo F — Rigor com imagem (B+C)

> **Este ficheiro é o estado ATUAL** — reescreve-o no fim de cada sessão (não acumules histórico aqui; isso vai para `LOG.md`).
> Atualizado: **2026-10-21** · por: sessão de setup (Claude, conversa do vault)

## Onde estamos
- `prototypes/f/index.html` = **homepage** convertida 1:1 do mockup `mockups/F-BC.dc.html` (HTML estático, CSS inline, imagens em `/img/…`). Ainda **não foi trabalhada** em sessão própria.
- Ideia da direção: hero de imagem + díptico Construções (claro) / Empreendimentos (escuro); capítulos com o mesmo peso; fichas técnicas; montra de prédios para terceiros.
- Tipografia: Instrument Serif (títulos) + Hanken Grotesk (corpo) + IBM Plex Mono (dados) (Google Fonts, `<link>` no `<head>`).
- Referência visual congelada: `mockups/F-BC-desktop.jpg` e `mockups/F-BC-mobile.jpg`.

## Próximos passos (sugeridos — o António define a ordem)
1. Abrir a homepage no browser (desktop e 390 px), comparar com o mockup e corrigir o que a conversão estragou.
2. Extrair o CSS inline para `prototypes/f/styles.css` (tokens de cor/tipo/espaçamento como variáveis CSS) para poder criar mais páginas sem duplicar.
3. Navegação funcional: menu mobile, âncoras, estados de foco.
4. Páginas interiores (a confirmar com o António): **Construções** · **Empreendimentos** (listagem) · **Serene** · **Gaio** · **Prédios construídos para terceiros** · **Obra / portefólio** · **Sobre** · **Contactos**.
5. Formulário de contacto (só front-end; sem envio real).

## Dúvidas em aberto
- Ver «Por confirmar com o cliente» em `context/decisoes.md`.

## Carregar na próxima sessão
- `context/brief.md` · `context/brief-r2.md` · `context/decisoes.md` (primeira sessão deste protótipo)
- `prototypes/f/index.html` · `mockups/F-BC-desktop.jpg`
