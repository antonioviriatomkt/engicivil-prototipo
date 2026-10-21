# Log — Protótipo G — Rigor local (B+D)

Entrada nova **no topo**. Formato: data · branch · o que mudou · decisões · link do preview.

## 2026-10-21 · g/hero · hero reorganizado
- Pedido do António: o `<p>` do hero passa para baixo do título; a Fig. 1 (sócios) vai para o lado direito; as duas áreas de negócio ficam por baixo, lado a lado.
- Implementação: linha 1 = título + texto (col. 1–7) | Fig. 1 (col. 8–12); linha 2 = Construções (col. 1–6) | Empreendimentos (col. 7–12), com a mesma altura.
- Telemóvel: retirado `.hero-photo{order:-1}` (punha a foto acima do título).
- Problemas já existentes anotados no STATUS (1024 px: cabeçalho e factos; 390 px: «30 especialistas»).
- Decisões: nenhuma para `context/decisoes.md` (só vale para o G).
- Preview: link do Vercel no PR do branch `g/hero`.

## 2026-10-21 · main · setup
- Repositório criado. Homepage convertida do mockup `G-BD` (tela de design, ronda 2) para `prototypes/g/index.html`.
- Contexto do projeto copiado do vault da Viriato para `context/`.
