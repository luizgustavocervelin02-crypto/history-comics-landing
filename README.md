# History Comics Landing

CRIE DO ZERO UMA LANDING PAGE DE VENDAS COMPLETA, PROFISSIONAL, RESPONSIVA, MOBILE-FIRST, OTIMIZADA PARA CONVERSÃO E PRONTA PARA PUBLICAÇÃO NO NETLIFY.

PRODUTO:

“A SEGUNDA GUERRA MUNDIAL CONTADA EM QUADRINHOS”

IMPORTANTE:

ESTE PROJETO PRECISA SER ENTREGUE FUNCIONAL, COMPILÁVEL E PRONTO PARA GITHUB + NETLIFY.

NÃO quero apenas uma prévia visual.

O código final precisa passar com sucesso por:

npm install

npm run build

ANTES DE CONSIDERAR O PROJETO FINALIZADO.

==================================================

OBJETIVO COMERCIAL

==================================================

Quero uma landing page de low ticket extremamente visual, objetiva e focada em conversão.

A página deve transmitir:

DOCUMENTÁRIO HISTÓRICO PREMIUM

+

GRAPHIC NOVEL

+

EDITORA HISTÓRICA

+

PRODUTO DIGITAL DE ALTO VALOR PERCEBIDO

A estrutura obrigatória será:

1. Barra superior com oferta/data atual

2. Hero extremamente compacto

3. Imagem principal do produto

4. CTA

5. Prévia das páginas internas em carrossel infinito

6. Prova social / depoimentos em carrossel

7. Bônus

8. Plano Básico x Plano Completo

9. Professor Erasto

10. FAQ

11. CTA final

12. Rodapé

==================================================

PRIORIDADE MOBILE

==================================================

A página deve ser construída MOBILE-FIRST.

Priorizar:

360px

375px

390px

393px

414px

430px

Também testar:

768px

1024px

1440px+

A página NÃO pode criar scroll horizontal acidental.

==================================================

REGRA ABSOLUTA SOBRE IMAGENS

==================================================

NÃO gere imagens.

NÃO busque imagens online.

NÃO use Unsplash.

NÃO use banco de imagens.

NÃO crie novas capas automaticamente.

Todas as imagens principais do produto serão fornecidas por mim.

Se um arquivo não estiver disponível:

NÃO substituir por imagem parecida.

Criar placeholder claramente identificado.

==================================================

MAPEAMENTO EXATO DAS IMAGENS DO PRODUTO

==================================================

HERO:

a_segunda_guerra_em_quadrinhos.png

PRÉVIA 01:

o_caminho_para_a_guerra.png

PRÉVIA 02:

1940_a_guerra_se_espalha.png

PRÉVIA 03:

1941_o_conflito_se_torna_mundial.png

PRÉVIA 04:

a_virada_da_guerra_em_quadrinhos.png

PRÉVIA 05:

1944_a_libertação_da_europa.png

Caso o sistema não aceite acentos:

1944_a_libertacao_da_europa.png

PRÉVIA 06:

1945_o_fim_da_guerra_mundial.png

BÔNUS 01:

atlas_visual_da_segunda_guerra_mundial.png

BÔNUS 02:

linha_do_tempo_da_segunda_guerra_mundial.png

BÔNUS 03:

o_brasil_na_segunda_guerra_mundial.png

FOTO PROFESSOR:

[FOTO_PROFESSOR_ERASTO]

DEPOIMENTOS:

[DEPOIMENTO_01]

[DEPOIMENTO_02]

[DEPOIMENTO_03]

[DEPOIMENTO_04]

[DEPOIMENTO_05]

IMPORTANTE SOBRE DEPOIMENTOS:

Não inventar clientes, compras, mensagens ou resultados como se fossem reais.

Se forem usadas imagens ilustrativas/geradas, não apresentá-las como prova de compra real.

==================================================

TRATAMENTO GLOBAL DAS IMAGENS

==================================================

Na versão anterior surgiram bordas e molduras estranhas.

Isso NÃO pode acontecer.

Todas as imagens devem usar:

border: none;

outline: none;

box-shadow: none;

background: transparent;

width: 100%;

height: auto;

object-fit: contain;

Quero somente cantos LEVEMENTE arredondados.

HERO:

border-radius: 10px;

PRÉVIAS:

border-radius: 10px;

BÔNUS:

border-radius: 8px;

DEPOIMENTOS:

border-radius: 10px;

PROFESSOR:

border-radius: 12px;

Não transformar as imagens em cards com moldura branca desnecessária.

==================================================

IDENTIDADE VISUAL

==================================================

Estética:

HISTÓRIA

+

DOCUMENTÁRIO

+

GRAPHIC NOVEL

+

EDITORA PREMIUM

NÃO quero:

site militar exagerado

videogame

excesso de fogo

design infantil

landing page genérica

página totalmente escura

PALETA:

Fundo principal:

#F8F7F3

Branco:

#FFFFFF

Texto:

#181818

Texto secundário:

#5C5C5C

Vermelho histórico:

#A32724

Verde CTA:

#078C58

Verde escuro:

#315D45

Dourado:

#B18A4C

Bege:

#EEE8DC

Borda:

#E2DDD3

Grafite:

#202321

Rodapé:

#161817

==================================================

TIPOGRAFIA

==================================================

HERO:

Poppins

ou Montserrat

ou Inter

Preferência:

Poppins

Headline:

font-weight: 800;

Textos:

Inter / DM Sans.

==================================================

SEÇÃO 01 — BARRA SUPERIOR

==================================================

Fundo:

#A32724

Texto branco.

Altura mobile:

42px a 48px.

Texto:

OFERTA ESPECIAL DE HOJE • DD/MM/AAAA

A data deve ser a data LOCAL atual do visitante.

Formato:

DD/MM/YYYY

Exemplo:

OFERTA ESPECIAL DE HOJE • 28/08/2026

NÃO criar contador falso.

NÃO colocar data fixa.

==================================================

SEÇÃO 02 — HERO

==================================================

A primeira dobra é PRIORIDADE MÁXIMA.

Em aproximadamente 390x844, quero visualizar:

barra

+

headline

+

subheadline

+

parte significativa da imagem

+

CTA

com mínima rolagem.

NÃO adicionar eyebrow.

NÃO adicionar parágrafo extra.

NÃO criar espaço vertical exagerado.

HEADLINE:

A Segunda Guerra Mundial em Quadrinhos com +250 Páginas Ilustradas Para Entender Como o Mundo Entrou em Guerra e Como Tudo Terminou

Destacar:

“A Segunda Guerra Mundial”

em:

#A32724

Destacar:

“+250 Páginas Ilustradas”

em:

#A32724

Restante:

#181818

MOBILE:

font-size:

clamp(22px, 5.6vw, 27px);

font-weight:

800;

line-height:

1.04 a 1.08;

letter-spacing:

-0.5px;

max-width:

96%;

Não criar quebras manuais desnecessárias.

DESKTOP:

38px a 44px.

==================================================

SUBHEADLINE HERO

==================================================

Uma HQ digital completa para acompanhar Hitler, Pearl Harbor, Stalingrado, Dia D, Hiroshima e os principais acontecimentos de 1939 a 1945 — tudo explicado em uma narrativa visual fácil de seguir, sem se perder em datas e fatos soltos.

MOBILE:

font-size:

15px a 16px;

line-height:

1.35 a 1.42;

margin-top:

10px;

margin-bottom:

10px;

DESKTOP:

18px a 20px.

==================================================

IMAGEM HERO

==================================================

Usar:

a_segunda_guerra_em_quadrinhos.png

Imediatamente depois da subheadline.

Mobile:

width:

90% a 94%;

max-height:

270px a 310px;

object-fit:

contain;

border-radius:

10px;

Desktop:

max-width:

520px;

Não cortar.

==================================================

CTA HERO

==================================================

Texto:

QUERO MINHA HQ EM QUADRINHOS ↓

Fundo:

#078C58

Texto branco.

Mobile:

width:

88% a 92%;

min-height:

48px;

font-size:

15px a 16px;

font-weight:

700;

border-radius:

9px;

LINK REAL:

https://pay.lowify.com.br/go.php?offer=6wz9fns

Usar este link diretamente.

Abaixo:

Acesso digital imediato • Leia no celular, tablet ou computador

==================================================

SEÇÃO 03 — PRÉVIA DO PRODUTO

==================================================

Título:

Veja uma prévia dos quadrinhos que você vai receber

Destacar:

“prévia dos quadrinhos”

em vermelho.

Subtexto:

Veja como batalhas, mapas, personagens e acontecimentos são apresentados de forma visual e cronológica.

==================================================

CARROSSEL DAS PRÉVIAS — MUITO IMPORTANTE

==================================================

Essa seção PRECISA ser extremamente estável.

Na versão anterior havia:

- espaço branco

- fim físico do carrossel

- loop quebrado

- problemas no mobile

NÃO repetir.

Se Embla Carousel estiver disponível, utilizar:

Embla Carousel

+

AutoScroll plugin oficial/compatível.

NÃO misturar múltiplas bibliotecas.

Não usar Swiper + Embla + Slick simultaneamente.

==================================================

ORDEM DAS PRÉVIAS

==================================================

1.

o_caminho_para_a_guerra.png

2.

1940_a_guerra_se_espalha.png

3.

1941_o_conflito_se_torna_mundial.png

4.

a_virada_da_guerra_em_quadrinhos.png

5.

1944_a_libertação_da_europa.png

6.

1945_o_fim_da_guerra_mundial.png

Depois continuar novamente:

1

2

3

4

5

6

em loop infinito.

==================================================

CARROSSEL DAS PRÉVIAS — COMPORTAMENTO

==================================================

NÃO quero slider estático.

Quero uma ESTEIRA CONTÍNUA.

As imagens entram pela DIREITA e se movimentam para a ESQUERDA continuamente.

Não fazer:

parar

→ trocar

→ parar

→ trocar

Quero movimento linear contínuo.

==================================================

LOOP INFINITO REAL

==================================================

O loop precisa ser REAL.

Nunca mostrar:

imagem 6

→ espaço branco

→ imagem 1

Quero:

5

6

1

2

3

continuamente.

Se necessário, duplicar internamente os slides:

1 2 3 4 5 6 1 2 3 4 5 6

Mas a duplicação deve ser imperceptível.

Não mostrar slides vazios.

Não mostrar espaço branco.

==================================================

AUTOSCROLL

==================================================

Movimento:

direita → esquerda.

Velocidade:

lenta e elegante.

Algo visualmente equivalente a:

0.6px a 1px por frame.

Movimento linear.

Sem acelerar entre páginas.

==================================================

INTERAÇÃO

==================================================

Ao tocar/arrastar:

pausar temporariamente.

Depois de aproximadamente 2 a 3 segundos:

retomar o movimento contínuo.

==================================================

MOBILE — PRÉVIAS

==================================================

Cada slide:

flex-basis aproximadamente 84% a 88%.

Mostrar:

1 página grande

+

pequena parte da próxima.

Swipe esquerda:

próxima.

Swipe direita:

anterior.

Usar:

touch-action: pan-y;

Não bloquear scroll vertical.

==================================================

DESKTOP — PRÉVIAS

==================================================

Mostrar aproximadamente:

3 a 4 páginas simultaneamente.

Permitir drag com mouse.

cursor:

grab;

durante drag:

grabbing;

==================================================

SEM ESPAÇO BRANCO

==================================================

Essa regra é obrigatória.

Não usar:

justify-content: space-between;

no track.

Não colocar margin-right especial no último item.

Não criar padding final.

Não usar width fixa inadequada.

Viewport:

overflow: hidden;

Track:

display: flex;

gap consistente:

12px a 16px.

Todos os slides:

flex-shrink: 0;

==================================================

FILTRAR IMAGENS INVÁLIDAS

==================================================

Antes de renderizar:

filter(Boolean)

ou equivalente.

Não renderizar:

undefined

null

src=""

imports quebrados

Nenhum slide inválido pode ocupar espaço.

==================================================

SEÇÃO 04 — DEPOIMENTOS

==================================================

Título:

O que nossos leitores estão dizendo

Subtexto:

Veja a experiência de quem já teve contato com o material.

Criar estrutura preparada para até:

5 depoimentos.

==================================================

CARROSSEL DE DEPOIMENTOS

==================================================

PRECISA ser funcional.

NÃO repetir o bug do espaço branco.

Usar o mesmo sistema de carousel estável.

Loop:

true.

Navegação:

1 → 2 → 3 → 4 → 5 → 1

e:

1 ← 5 ← 4 ← 3

Sem reset visual.

Sem espaço branco.

==================================================

SETAS DOS DEPOIMENTOS

==================================================

Criar seta esquerda funcional:

←

e seta direita funcional:

→

Tamanho mínimo:

42x42px.

Background:

#FFFFFF

border:

1px solid #E2DDD3

border-radius:

50%

Adicionar:

aria-label="Depoimento anterior"

aria-label="Próximo depoimento"

==================================================

MOBILE — DEPOIMENTOS

==================================================

Mostrar:

1 depoimento principal por vez.

Deixar aproximadamente 8% da próxima imagem aparecendo.

Permitir swipe.

Não bloquear scroll vertical.

==================================================

DESKTOP — DEPOIMENTOS

==================================================

Mostrar:

2 a 3 depoimentos.

Drag com mouse habilitado.

==================================================

DOTS DOS DEPOIMENTOS

==================================================

Adicionar indicadores:

● ○ ○ ○ ○

Devem ser clicáveis e acompanhar corretamente o slide.

==================================================

AUTOPLAY DOS DEPOIMENTOS

==================================================

NÃO é obrigatório.

Priorizar estabilidade.

Se autoplay gerar qualquer bug:

não usar autoplay.

Prioridade:

loop

+

setas

+

swipe

+

zero espaço branco.

==================================================

SEÇÃO 05 — BÔNUS

==================================================

Selo:

🎁 BÔNUS EXCLUSIVOS PARA VOCÊ

Título:

Bônus exclusivos inclusos

Subtexto:

Escolha o Plano Completo e leve também estes materiais complementares sem custo adicional.

==================================================

BÔNUS 01

==================================================

Imagem:

atlas_visual_da_segunda_guerra_mundial.png

Título:

Atlas Visual da Segunda Guerra Mundial

Descrição:

Mapas organizados para acompanhar invasões, avanços, frentes de batalha e mudanças territoriais durante o conflito.

Valor:

DE R$47

GRÁTIS

==================================================

BÔNUS 02

==================================================

Imagem:

linha_do_tempo_da_segunda_guerra_mundial.png

Título:

Linha do Tempo Completa — 1933 a 1945

Descrição:

Os principais acontecimentos organizados em sequência para entender como cada decisão levou à próxima.

Valor:

DE R$37

GRÁTIS

==================================================

BÔNUS 03

==================================================

Imagem:

o_brasil_na_segunda_guerra_mundial.png

Título:

O Brasil na Segunda Guerra Mundial

Descrição:

Entenda a entrada do Brasil no conflito, a FEB e a participação brasileira na campanha da Itália.

Valor:

DE R$27

GRÁTIS

==================================================

SEÇÃO 06 — PLANOS

==================================================

Título:

Escolha sua edição e comece a leitura agora mesmo.

==================================================

PLANO BÁSICO

==================================================

Título:

PLANO BÁSICO

DE R$19,90

POR:

R$10,00

pagamento único

O QUE VOCÊ LEVA:

✓ Versão essencial da Segunda Guerra Mundial em Quadrinhos

✓ Acesso digital

✓ Leitura pelo celular, tablet ou computador

NÃO INCLUI:

✕ Edição completa com +250 páginas

✕ Atlas Visual

✕ Linha do Tempo 1933–1945

✕ O Brasil na Segunda Guerra Mundial

CTA:

QUERO O PLANO BÁSICO

LINK REAL:

https://pay.lowify.com.br/checkout.php?product_id=1SWsRZ

==================================================

PLANO COMPLETO

==================================================

Selo:

★ MAIS ESCOLHIDO

Título:

PLANO COMPLETO

DE R$47,90

POR:

R$27,90

pagamento único

VOCÊ RECEBE:

✓ Segunda Guerra Mundial em Quadrinhos — Edição Completa

✓ +250 páginas ilustradas

✓ História organizada em sequência

✓ Leitura pelo celular, tablet ou computador

✓ Acesso digital imediato

TODOS OS BÔNUS:

✓ Atlas Visual

✓ Linha do Tempo 1933–1945

✓ Brasil na Segunda Guerra Mundial

CTA:

QUERO O PLANO COMPLETO

LINK REAL:

https://pay.lowify.com.br/go.php?offer=6wz9fns

==================================================

TODOS OS CTAs PRINCIPAIS

==================================================

CTA HERO:

https://pay.lowify.com.br/go.php?offer=6wz9fns

PLANO BÁSICO:

https://pay.lowify.com.br/checkout.php?product_id=1SWsRZ

PLANO COMPLETO:

https://pay.lowify.com.br/go.php?offer=6wz9fns

CTA FINAL:

https://pay.lowify.com.br/go.php?offer=6wz9fns

Abrir na mesma aba.

==================================================

SEÇÃO 07 — PROFESSOR ERASTO

==================================================

Desktop:

foto à esquerda.

Texto à direita.

Mobile:

foto primeiro.

Texto depois.

Imagem:

[FOTO_PROFESSOR_ERASTO]

Título:

Conheça o professor que criou este guia

Nome:

PROF. ERASTO

Texto:

Erasto é o professor responsável por transformar um dos períodos mais importantes — e também mais complexos — da História em uma experiência muito mais simples de acompanhar.

Depois de perceber como datas, batalhas, alianças e personagens acabam sendo apresentados de forma fragmentada, surgiu a ideia de organizar a Segunda Guerra Mundial como uma única narrativa visual, seguindo os acontecimentos em ordem e mostrando como cada decisão levou à próxima.

O resultado é este guia em quadrinhos: um material criado para quem quer compreender a Segunda Guerra de forma clara, visual e envolvente, sem depender de longas páginas de conteúdo difícil de conectar.

Benefícios:

✓ HISTÓRIA ORGANIZADA EM ORDEM CRONOLÓGICA

✓ EXPLICAÇÕES VISUAIS E FÁCEIS DE ACOMPANHAR

✓ CONTEÚDO PENSADO PARA FACILITAR A COMPREENSÃO

NÃO inventar formação, universidade ou credenciais.

==================================================

SEÇÃO 08 — FAQ

==================================================

Perguntas Frequentes

PERGUNTA:

Como recebo o material?

RESPOSTA:

Após a confirmação do pagamento, você receberá as instruções para acessar o conteúdo digital no e-mail informado durante a compra.

PERGUNTA:

O material é físico ou digital?

RESPOSTA:

O material é 100% digital e poderá ser acessado pelo celular, tablet ou computador.

PERGUNTA:

Preciso entender de História para acompanhar?

RESPOSTA:

Não. O objetivo do material é justamente apresentar os acontecimentos em sequência e facilitar a compreensão através de uma narrativa visual.

PERGUNTA:

A HQ fala apenas sobre batalhas?

RESPOSTA:

Não. O conteúdo apresenta contexto histórico, alianças, personagens, decisões políticas, principais acontecimentos militares e consequências do conflito.

PERGUNTA:

O Brasil aparece no material?

RESPOSTA:

Sim. A participação brasileira é abordada no conteúdo e o Plano Completo inclui um material complementar dedicado ao Brasil na Segunda Guerra Mundial.

PERGUNTA:

Posso ler pelo celular?

RESPOSTA:

Sim. O material pode ser acessado pelo celular, tablet ou computador.

PERGUNTA:

Preciso instalar algum programa?

RESPOSTA:

Não. As instruções de acesso serão enviadas após a compra.

==================================================

CTA FINAL

==================================================

Título:

Veja a Segunda Guerra Mundial como uma única história.

Subheadline:

Acompanhe os acontecimentos na ordem certa e descubra como decisões, batalhas e personagens se conectaram entre 1939 e 1945.

Botão:

QUERO ACESSAR A HQ COMPLETA

LINK:

https://pay.lowify.com.br/go.php?offer=6wz9fns

==================================================

META PIXEL

==================================================

Instalar o Meta Pixel de maneira correta na página.

PIXEL ID:

942056364896696

Inserir o código base:

<!-- Meta Pixel Code -->

<script>

!function(f,b,e,v,n,t,s)

{if(f.fbq)return;n=f.fbq=function(){n.callMethod?

n.callMethod.apply(n,arguments):n.queue.push(arguments)};

if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

n.queue=[];t=b.createElement(e);t.async=!0;

t.src=v;s=b.getElementsByTagName(e)[0];

s.parentNode.insertBefore(t,s)}(window, document,'script',

'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '942056364896696');

fbq('track', 'PageView');

</script>

<noscript><img height="1" width="1" style="display:none"

src="https://www.facebook.com/tr?id=942056364896696&ev=PageView&noscript=1"

/></noscript>

<!-- End Meta Pixel Code -->

IMPORTANTE:

Garantir que o Pixel seja carregado apenas uma vez.

Não duplicar PageView.

Se estiver usando React/Vite, colocar o código de forma compatível com a estrutura do projeto.

O noscript deve estar no HTML final.

==================================================

NETLIFY — REQUISITO CRÍTICO

==================================================

ESTE PROJETO PRECISA SER 100% COMPATÍVEL COM NETLIFY.

Antes de finalizar:

DETECTAR QUAL FRAMEWORK ESTÁ SENDO USADO.

Verificar se é:

- Vite

- Create React App

- HTML/CSS/JS puro

- Next.js

- outra ferramenta

==================================================

VITE

==================================================

Se utilizar Vite:

build command:

npm run build

publish directory:

dist

Garantir que:

npm install

npm run build

funcionem sem erros.

==================================================

CREATE REACT APP

==================================================

Se utilizar CRA:

build command:

npm run build

publish directory:

build

==================================================

NEXT.JS

==================================================

Se utilizar Next.js:

primeiro identificar se a aplicação pode ser exportada estaticamente.

Se for exportação estática:

utilizar:

out

como diretório final.

Não configurar “out” se o projeto não estiver usando exportação estática.

Caso necessite runtime Next compatível com Netlify, usar a integração suportada pelo Netlify.

==================================================

HTML PURO

==================================================

Se o projeto for HTML/CSS/JS puro:

não criar processo de build desnecessário.

Garantir que index.html esteja no diretório publicado.

==================================================

BACKEND

==================================================

NÃO criar servidor Express tradicional de longa duração.

Netlify não deve depender de:

node server.js

ou servidor permanente.

Se alguma função backend for necessária:

utilizar Netlify Functions.

Neste projeto, preferencialmente manter o frontend 100% estático.

==================================================

PACKAGE.JSON

==================================================

Garantir que exista:

package.json

com dependências corretas.

Garantir script:

"build"

funcional.

Não deixar dependências ausentes.

Não deixar imports quebrados.

==================================================

TESTE OBRIGATÓRIO DE BUILD

==================================================

ANTES DE FINALIZAR O PROJETO:

executar:

npm install

depois:

npm run build

Se houver QUALQUER erro:

corrigir antes de finalizar.

Não entregar projeto dizendo apenas que “deveria funcionar”.

O build precisa efetivamente concluir com sucesso.

==================================================

NETLIFY.TOML

==================================================

CRIAR:

netlify.toml

na raiz do projeto.

Detectar automaticamente a pasta correta.

Se for Vite, exemplo:

[build]

  command = "npm run build"

  publish = "dist"

[[redirects]]

  from = "/*"

  to = "/index.html"

  status = 200

Se for CRA:

[build]

  command = "npm run build"

  publish = "build"

[[redirects]]

  from = "/*"

  to = "/index.html"

  status = 200

IMPORTANTE:

A regra SPA deve ser adicionada apenas quando adequada.

==================================================

SPA / REACT ROUTER

==================================================

Se for SPA usando React Router:

refresh de URLs internas NÃO pode retornar 404.

Adicionar redirect:

/* /index.html 200

Pode ser:

netlify.toml

OU:

public/_redirects

Preferência:

netlify.toml

Não criar regras conflitantes em dois lugares sem necessidade.

==================================================

ASSETS E CAMINHOS

==================================================

Garantir que todas as imagens e assets utilizem caminhos compatíveis com produção.

NÃO utilizar:

caminho absoluto local

C:\Users\

/home/

localhost

NÃO depender do ambiente de desenvolvimento.

Depois do build, todas as imagens precisam funcionar em produção.

==================================================

GITHUB

==================================================

O projeto precisa estar preparado para ser enviado ao GitHub.

Não deixar:

node_modules

dentro do repositório.

Criar:

.gitignore

com pelo menos:

node_modules

dist

build

.env

.DS_Store

Não ignorar os arquivos necessários do projeto.

==================================================

NETLIFY — VALIDAÇÃO FINAL

==================================================

Antes de concluir:

1. npm install funciona

2. npm run build funciona

3. diretório de saída existe

4. netlify.toml está correto

5. SPA redirect está configurado se necessário

6. imagens funcionam após build

7. Pixel está presente

8. checkout funciona

9. nenhum import está quebrado

10. nenhuma variável obrigatória está faltando

==================================================

RODAPÉ

==================================================

Fundo:

#161817

Texto:

© 2026 Segunda Guerra Mundial em Quadrinhos. Todos os direitos reservados.

Links:

Termos de Uso

Política de Privacidade

Contato

Não inventar:

CNPJ

endereço

telefone

e-mail

==================================================

SEO

==================================================

Title:

Segunda Guerra Mundial em Quadrinhos | História Completa Ilustrada

Meta description:

Acompanhe os principais acontecimentos da Segunda Guerra Mundial em uma narrativa visual ilustrada e organizada em ordem cronológica.

Usar somente um H1.

H2/H3 semanticamente corretos.

==================================================

PERFORMANCE

==================================================

Hero:

imagem com carregamento prioritário.

Imagens abaixo da dobra:

lazy loading.

Evitar layout shift.

Não instalar bibliotecas gigantes desnecessárias.

Não usar múltiplos carrosséis diferentes.

==================================================

ACESSIBILIDADE

==================================================

Garantir:

contraste

alt texts

aria-label

navegação por teclado

focus visível

botões mínimo 48px

==================================================

TESTE DEFINITIVO DOS CARROSSÉIS

==================================================

Antes de finalizar:

CARROSSEL HQ:

deixar rodar por várias voltas completas.

Não pode acontecer:

- espaço branco

- reset

- pulo

- travamento

- slide vazio

CARROSSEL DEPOIMENTOS:

clicar 20 vezes para direita.

clicar 20 vezes para esquerda.

fazer vários swipes mobile.

Não pode acontecer:

- área branca

- slide vazio

- fim físico

- retorno brusco

==================================================

CHECKLIST FINAL

==================================================

[ ] Hero compacto

[ ] CTA aparece cedo no mobile

[ ] Imagem hero correta

[ ] 6 prévias corretas

[ ] Prévia em loop contínuo direita → esquerda

[ ] Zero espaço branco no carrossel

[ ] Swipe mobile funciona

[ ] Depoimentos com setas funcionais

[ ] Depoimentos em loop infinito

[ ] Zero espaço branco nos depoimentos

[ ] 3 bônus corretos

[ ] Plano Básico R$10

[ ] Plano Completo R$27,90

[ ] Link Básico correto

[ ] Link Completo correto

[ ] CTA Hero correto

[ ] CTA final correto

[ ] Professor Erasto correto

[ ] Meta Pixel 942056364896696 funcionando

[ ] PageView dispara apenas uma vez

[ ] netlify.toml existe

[ ] npm install funciona

[ ] npm run build funciona

[ ] pasta de build correta

[ ] SPA redirect correto

[ ] nenhum asset quebrado

[ ] nenhuma imagem quebrada

[ ] nenhum import quebrado

[ ] projeto pronto para GitHub

[ ] projeto pronto para Netlify

==================================================

IMPORTANTE — NÃO FAZER

==================================================

NÃO entregar somente uma interface visual.

NÃO deixar build quebrado.

NÃO criar servidor Express.

NÃO inventar dependências.

NÃO inventar imagens.

NÃO trocar arquivos.

NÃO adicionar depoimentos falsos.

NÃO duplicar Meta Pixel.

NÃO criar espaços brancos nos carrosséis.

NÃO utilizar paths locais.

NÃO deixar configuração do Netlify para eu fazer manualmente depois.

==================================================

RESULTADO FINAL

==================================================

Quero receber um projeto:

COMPLETO

+

RESPONSIVO

+

MOBILE-FIRST

+

FUNCIONAL

+

COMPILÁVEL

+

SEM BUG NOS CARROSSÉIS

+

COM CHECKOUT CONFIGURADO

+

COM META PIXEL INSTALADO

+

COM NETLIFY CONFIGURADO

+

PRONTO PARA SUBIR AO GITHUB E PUBLICAR NO NETLIFY.

Depois de implementar tudo:

EXECUTE npm install.

EXECUTE npm run build.

CORRIJA QUALQUER ERRO ENCONTRADO.

Somente considere o projeto finalizado quando o build de produção estiver concluindo com sucesso. esse print que estou te enviando é a pagina base, voce deve construir essa em que estou te enviando semelhante a do print

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e06d5c48-a93d-4079-9939-efa4e99c2305).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
