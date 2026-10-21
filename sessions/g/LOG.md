# Log — Protótipo G — Rigor local (B+D)

Entrada nova **no topo**. Formato: data · branch · o que mudou · decisões · link do preview.

## 2026-10-21 · g/hero · marca atual + hero com mais contraste
- Pedido do António: o hero estava estranho e sem contraste; usar os tokens da marca atual na homepage; reposicionar o hero e tirar texto complementar.
- Tokens de `context/tokens-atuais.json` aplicados à página toda: cores, Roboto Condensed, raio 0, botões em maiúsculas, logótipo atual no cabeçalho.
- Hero:
  - Saem a «Fig. 1» e a legenda dos sócios, a linha «Prefere falar? Ligue…» (duplica o «Fale connosco»), o rótulo «Comum aos dois negócios…» e as listas tracejadas dos cartões (os factos estão na faixa por baixo).
  - Os cartões passam a blocos de cor (cinza / azul) com texto branco; imagens 16:9; o botão principal fica branco.
  - Texto do hero reescrito para começar pelos dois negócios.
  - Foto dos sócios em 4:3 (era mais alta do que larga e empurrava os negócios para baixo).
- Responsivo: faixa de factos em 3 colunas abaixo de 1100 px (corrige a sobreposição a 1024 px); abaixo de 1100 px escondem-se o seletor PT/EN e o link «Contactos» (o «Fale connosco» já lá está), para o cabeçalho caber numa linha.
- Decisão registada em `context/decisoes.md`: a G usa a marca atual.
- Preview: PR do branch `g/hero`.

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
