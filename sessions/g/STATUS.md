# Estado — Protótipo G — Rigor local (B+D)

> **Este ficheiro é o estado ATUAL** — reescreve-o no fim de cada sessão (não acumules histórico aqui; isso vai para `LOG.md`).
> Atualizado: **2026-10-21** · por: sessão de setup (Claude, conversa do vault)

## Onde estamos
- `prototypes/g/index.html` = **homepage** convertida 1:1 do mockup `mockups/G-BD.dc.html` (HTML estático, CSS inline, imagens em `/img/…`). Ainda **não foi trabalhada** em sessão própria.
- Ideia da direção: hero simétrico (sócios ao centro, Construções | Empreendimentos); antes/depois; mosaico de obra; índice «Onde trabalhamos» com os prédios para terceiros; diagrama «uma empresa, dois negócios».
- Tipografia: Bricolage Grotesque (títulos) + Source Serif 4 (texto) + IBM Plex Mono (dados) (Google Fonts, `<link>` no `<head>`).
- Referência visual congelada: `mockups/G-BD-desktop.jpg` e `mockups/G-BD-mobile.jpg`.

## Próximos passos (sugeridos — o António define a ordem)
1. Abrir a homepage no browser (desktop e 390 px), comparar com o mockup e corrigir o que a conversão estragou.
2. Extrair o CSS inline para `prototypes/g/styles.css` (tokens de cor/tipo/espaçamento como variáveis CSS) para poder criar mais páginas sem duplicar.
3. Navegação funcional: menu mobile, âncoras, estados de foco.
4. Páginas interiores (a confirmar com o António): **Construções** · **Empreendimentos** (listagem) · **Serene** · **Gaio** · **Prédios construídos para terceiros** · **Obra / portefólio** · **Sobre** · **Contactos**.
5. Formulário de contacto (só front-end; sem envio real).

## Dúvidas em aberto
- Ver «Por confirmar com o cliente» em `context/decisoes.md`.

## Carregar na próxima sessão
- `context/brief.md` · `context/brief-r2.md` · `context/decisoes.md` (primeira sessão deste protótipo)
- `prototypes/g/index.html` · `mockups/G-BD-desktop.jpg`
