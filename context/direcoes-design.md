# Direções de design exploradas (homepage, 21/10/2026)

Todas em base neutra e PT-PT. Estão lado a lado numa tela de design privada no Claude («Engicivil — Homepage, 4 direções», conta do António). Há um PDF da ronda 1 no vault da Viriato (`prospects/engicivil/Engicivil_Homepage_4-direcoes_rascunho-1_2026-10-21.pdf`).

## Ronda 1 — quatro direções
| | Direção | Ideia |
|---|---|---|
| A | Duas portas | Hero 50/50 «Construir» / «Viver»; cada caminho com cor própria (tinta / ardósia) em toda a página; credenciais como base comum ao meio. Archivo. |
| B | Rigor técnico | Folha de desenho técnico: grelha de 12 colunas visível, régua, «Fig.», faixa de factos tipo carimbo, empreendimentos em ficha técnica, credenciais em tabela verificável. Archivo + IBM Plex Mono. |
| C | Promotor / lifestyle | Hero de imagem do Serene a toda a largura, capítulo escuro com Serene e Gaio, construtora como garantia; obra em segundo plano. Instrument Serif + Hanken Grotesk. |
| D | Próximo e local | Sócios + obra no hero, antes/depois em destaque, índice de locais, empreendimentos «aqui ao lado». Bricolage Grotesque + Source Serif 4. |

## Ronda 2 — depois do feedback do cliente
| | Direção | Ideia |
|---|---|---|
| E | Duas portas com rigor (A+B) | Portas Construções (tinta) / Empreendimentos (ardósia) sobre folha técnica; secções numeradas por negócio (C.01…, E.01…, 00.x comum). **Fica na tela, não avança.** |
| **F** | **Rigor com imagem (B+C)** → `prototypes/f/` | Hero de imagem + díptico de entrada igual (Construções claro / Empreendimentos escuro); capítulos 01/02 com o mesmo peso; fichas técnicas; montra «Prédios construídos para terceiros» com ponte «Vai promover um edifício?» / «Procura casa?». Instrument Serif + Hanken Grotesk + IBM Plex Mono. |
| **G** | **Rigor local (B+D)** → `prototypes/g/` | Hero simétrico: sócios ao centro, Construções à esquerda, Empreendimentos à direita; antes/depois e mosaico de obra; índice «Onde trabalhamos» que integra os prédios para terceiros; diagrama «uma empresa, dois negócios». Bricolage Grotesque + Source Serif 4 + IBM Plex Mono. |

## Lições das rondas
- Peso igual entre os dois negócios tem de se ver **na grelha**, não só no texto (díptico na F, simetria na G).
- As fotos de obra (~770 px) não aguentam largura total; os renders dos empreendimentos (1920 px) sim.
- Os agentes de design tenderam a voltar a pôr placeholders em factos conhecidos (anos das credenciais) — conferir com `decisoes.md`.
