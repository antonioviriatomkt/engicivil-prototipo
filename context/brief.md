# Brief — factos, regras e imagens (válido para F e G)

Brief usado nas rondas 1 e 2 da homepage (21/10/2026), adaptado a este repositório. Website-conceito da Viriato (agência) para a Engicivil — trabalho de prospeção; o cliente já respondeu (ver `feedback-cliente.md` e `brief-r2.md`).

## Cliente (factos do site público engicivil.pt, lido a 21/10/2026 — usar só isto, não inventar)
- **ENGICIVIL – Cardoso & Manata, Lda.**, Aveiro. Construção e reabilitação de edifícios + **promoção imobiliária própria** (recente).
- Fundada em **2013** por dois profissionais com **mais de duas décadas** de experiência. **30 especialistas**.
- Engenharia própria, estaleiro próprio, meios de produção integrados, gabinete de planeamento e orçamentação («precisão e transparência»), rede de parceiros. Na reabilitação trabalham com arquitetos/designers indicados pelo cliente.
- **Alvará IMPIC 70366-PUB, classe 5** — obras públicas e particulares até **2.656.000 €**. Seguro RC Tranquilidade, **670.000 €**.
- Distinções: **PME Líder** (IAPMEI) 3 anos consecutivos (2020–2022) · **TOP 5% Melhores PME de Portugal 2022** (Scoring / Executive Digest) · **TOP 10 Melhores PME do Setor** (Scoring, construção, reabilitação e remodelações, Edição 2022, 2.º ano consecutivo — o site chama-lhe «Prémio de Excelência») · marca **R.U.-I.S. — Reabilitação Urbana Inteligente e Sustentável** (AICCOPN).
- Slogan atual: «O seu projeto em boas mãos». Promessa: «soluções completas, sustentáveis e personalizadas … do seu projeto à sua execução».
- Áreas de obra: **Indústria e Serviços** (requalificação de unidades industriais, escritórios, showrooms, lojas, ginásios) · **Construção** (edifícios de habitação, moradias) · **Reabilitação** (moradias, residência universitária, fachadas).
- Portefólio publicado: 24 projetos (6 + 12 + 6). Exemplos com nome público de empresa: Delabie (edifício administrativo + produção), Bresimar (zona comercial e lobby, 2.º convite), Vitor Guimarães & Filhos (antes/depois), loja ISPM. Outros por local: Viaduto de Esgueira, Viela do Canto, Ribas I/II, Rua do Gravito, Peralta e Rios, Gafanha de Aquém, moradia em Oliveira de Azeméis, residência universitária em Coimbra, moradia Kleya (reabilitação), moradia Rossio (demolição e reconstrução integral).
- **Empreendimentos próprios à venda:**
  - **Serene Condominium** — Rua Vasco da Gama, Ílhavo (entre Aveiro, as praias e a ria). **8 apartamentos: 4 T2 + 4 T3 duplex.** Estado: «em construção/finalizado». Varandas e terraços nascente/poente, elevador a todos os pisos, fotovoltaico em todos os apartamentos, carregamento elétrico, fachada em lâmina porcelânica, zinco patinado, condomínio fechado. Lema: «Projeto ímpar de design, conforto e luz».
  - **Edifício Gaio** — Oliveira do Bairro. **12 apartamentos: T1, T2, T3 duplex.** Estado: «em construção». Varandas amplas, estacionamento interior com elevador, terraços nos duplex. Nome inspirado na ave gaio. Lema: «Escolher onde viver é escolher como viver.»
  - **Sem preços, áreas nem plantas no site** → usar placeholders `[Preço sob consulta]`, `[Área m²]` se precisares.
- Contactos: Rua Eng.º Von Haff, 47, 1.º B, 3800-177 Aveiro · +351 234 060 223 · geral@engicivil.pt · comercial@engicivil.pt.
- Âmbito decidido pelo António (Viriato): **o site serve os dois negócios** — angariar obra (construtora) **e** vender casas (promotora) — com caminhos claros desde a homepage. Público: empresas/indústria e particulares que querem construir ou reabilitar; compradores de casa na região de Aveiro (incl. emigrantes/estrangeiros — o site atual é só PT).

### Não fazer
- **Não inventar** números, prazos, testemunhos, nomes, preços ou certificações. O que faltar = placeholder entre `[ ]`.
- **Não usar BREEAM/LEED/WELL nem classe energética** como certificação (o site só fala em «princípios de referência»).
- **Não mostrar nomes de particulares** (clientes privados). Empresas listadas acima podem aparecer.
- Os nomes dos sócios **não são públicos** — a foto existe; legenda genérica («Os dois sócios fundadores»).

## Identidade: BASE NEUTRA (obrigatório, igual nas 4 versões)
A identidade nova será proposta noutra sessão. Aqui decide-se **layout, hierarquia, ritmo, tipo de navegação, tratamento de imagem e tom** — não cor de marca.
- Paleta só neutra: tinta `#141414`, cinzas `#3a3a3a` `#6b6b6b` `#a3a3a3` `#d9d9d6`, papel `#f4f4f1`, branco `#ffffff`. **Um único acento provisório neutro** opcional: `#5f6b73` (cinza-ardósia). Nada de azuis de marca, gradientes, nem cor saturada (só a das fotos).
- Logo: **wordmark de texto «ENGICIVIL»** na tipografia escolhida (o logo atual vai ser substituído). Sub-marcas Serene e Gaio têm logos próprios (brancos, para pôr sobre imagem escura) — podes usá-los.
- Tipografia: 1–2 famílias do Google Fonts, escolhidas pela direção (é parte da direção de layout), carregadas por `<link>` css2 no `<helmet>`. Evitar Inter genérico e serifas "cream+clay".
- Contraste AA (4.5:1 texto; 3:1 ≥24px). Alvos de toque ≥44px. `<a href>`, `<button>`, `<input>`+`<label>` reais. Sem emoji, sem "AI tropes" (gradient washes, cartões com borda à esquerda).
- PT-PT em toda a copy. Copy factual, curta, com verbos concretos. Usa a skill `design:ux-copy` para títulos e CTAs.

## Imagens selecionadas para a homepage (servidas em `/img/…` a partir de `public/img/`)
Catálogo completo (283 imagens, dimensões, origem): `context/assets-manifest.csv`.
Resolução: renders exteriores 1920px; o resto ~770px de largura (fotos reais de obra, telemóvel) — **não usar fotos de 770px em heros de largura total**; usar em grelhas/cartões. Os renders 1920 aguentam hero.

| Imagem | Caminho | Notas |
|---|---|---|
| Serene — fachada ao entardecer (render, 1920×1357) | `/img/empreendimentos/serene-condominium/edificio-serene-11.jpg` | hero-capable |
| Serene — fachada à noite, azul (render, 1920×1357) | `/img/empreendimentos/serene-condominium/edificio-serene-16.jpg` | hero-capable |
| Serene — aérea, terraços (render 770×544) | `/img/empreendimentos/serene-condominium/edificio-serene-19.jpg` | |
| Serene — sala/cozinha (render 770) | `/img/empreendimentos/serene-condominium/edificio-serene-20.jpg` | |
| Serene — casa de banho (render 770) | `/img/empreendimentos/serene-condominium/edificio-serene-22.jpg` | |
| Serene — logo (branco, script, 3508×711, transparente) | `/img/logos/serene-logo.png` | só sobre fundo escuro |
| Gaio — fachada ao pôr do sol, rua (render 1920×960) | `/img/empreendimentos/edificio-gaio/edificio-gaio-1.jpg` | hero-capable |
| Gaio — fachada noite, carros (render 1920×1920) | `/img/empreendimentos/edificio-gaio/edificio-gaio-17.jpg` | hero-capable, quadrado |
| Gaio — pormenor varandas, céu azul (render 1920×1920) | `/img/empreendimentos/edificio-gaio/edificio-gaio-18.jpg` | quadrado |
| Gaio — sala com escada (render 770) | `/img/empreendimentos/edificio-gaio/edificio-gaio-13.jpg` | |
| Gaio — sala de estar (render 770) | `/img/empreendimentos/edificio-gaio/edificio-gaio-22.jpg` | |
| Gaio — logo (ave + «Edifício Gaio», branco/azul claro, transparente) | `/img/logos/gaio-logo.png` | só sobre fundo escuro |
| Sócios fundadores, P&B, frente ao logo antigo (770×730) | `/img/site/engicivil-3.jpg` | logo antigo visível ao fundo |
| Delabie — fachada negra ao entardecer (770×577) | `/img/portefolio/industria-e-servicos/requalificacao-de-unidade-industrial-delabie/delabie-8.jpg` | indústria |
| Delabie — fachada com ripado de madeira (770×577) | `/img/portefolio/industria-e-servicos/requalificacao-de-unidade-industrial-delabie/delabie.jpg` | indústria |
| Bresimar — receção/lobby (770×577) | `/img/portefolio/industria-e-servicos/requalificacao-bresimar/requalificacao-bresimar-6.jpg` | serviços |
| Vitor Guimarães & Filhos — ANTES, exterior (770×770, etiqueta «Antes» na imagem) | `/img/portefolio/industria-e-servicos/requalificacao-de-unidade-industrial-vitor-guimaraes-filhos/requalificacao-de-unidade-industrial-vitor-guimaraes-filhos-1.jpg` | par antes/depois |
| Vitor Guimarães & Filhos — DEPOIS, exterior (770×770, etiqueta «Depois») | `/img/portefolio/industria-e-servicos/requalificacao-de-unidade-industrial-vitor-guimaraes-filhos/requalificacao-de-unidade-industrial-vitor-guimaraes-filhos-10.jpg` | par antes/depois |
| Moradia Oliveira de Azeméis — betão e vidro, relvado (770×577) | `/img/portefolio/construcao/moradia-unifamiliar-oliveira-de-azemeis/moradia-oliveira-de-azemeis.jpg` | construção |
| Moradia Oliveira de Azeméis — outro ângulo (770×577) | `/img/portefolio/construcao/moradia-unifamiliar-oliveira-de-azemeis/moradia-oliveira-de-azemeis-7.jpg` | construção |
| Viela do Canto — fachada com azulejo (770×513) | `/img/portefolio/construcao/edificio-de-habitacao-viela-do-canto/viela-do-canto-12.jpg` | construção, detalhe |
| Viaduto de Esgueira — edifício (770×346) | `/img/portefolio/construcao/edificio-de-habitacao-viaduto-de-esgueira/viaduto-de-esgueira-12.jpg` | construção |
| Ribas I — edifício de habitação (770×770) | `/img/portefolio/construcao/edificio-de-habitacao-ribas-i/ribas-i-3.jpg` | construção |
| Moradia Kleya — ANTES (ruína na rua, 770×513) | `/img/portefolio/reabilitacao/reabilitacao-de-moradia-kleya/cleia-6.jpg` | par antes/depois |
| Moradia Kleya — DEPOIS (moradia branca, 770×346) | `/img/portefolio/reabilitacao/reabilitacao-de-moradia-kleya/cleia.jpg` | par antes/depois |
| Residência universitária Coimbra — edifício amarelo (770×346) | `/img/portefolio/reabilitacao/reabilitacao-de-residencia-universitaria-coimbra/residencia-universitaria-coimbra.jpg` | reabilitação |
| Reabilitação (imagem de área) — moradia amarela | `/img/site/reabilitacao-2.jpg` | ≈ Coimbra |
(Imagens de área: «Indústria» = Delabie fachada negra; «Construção» = moradia Oliveira de Azeméis.)

## Conteúdo mínimo da homepage (ordem e forma livres conforme a direção)
1. Cabeçalho com wordmark + navegação (sugestão: Construir · Empreendimentos · Obra · Sobre · Contactos — adapta) + CTA.
2. Hero que deixa claro, nos primeiros segundos, que há **dois caminhos**: fazer uma obra com a Engicivil / comprar casa num empreendimento Engicivil (o peso relativo depende da direção).
3. Empreendimentos (Serene e Gaio) com tipologias, local, estado e CTA «Pedir informação».
4. Áreas de obra (Indústria e Serviços · Construção · Reabilitação) com projetos de prova.
5. Credenciais/prova (alvará classe 5, PME Líder, TOP 5%, R.U.-I.S., 2013, 30 especialistas, estaleiro próprio).
6. Como trabalham (do orçamento à entrega — usar só o que é factual: planeamento e orçamentação, engenharia interna, estaleiro e meios próprios, acompanhamento até à execução).
7. Contacto (formulário curto com escolha do tipo de pedido: obra / comprar casa / outro) + rodapé (morada, telefone, emails, Livro de Reclamações, Política de Privacidade).
