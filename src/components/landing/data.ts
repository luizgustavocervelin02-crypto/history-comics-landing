import hero from "@/assets/hero.webp.asset.json";
import previa1 from "@/assets/previa1.webp.asset.json";
import previa2 from "@/assets/previa2.webp.asset.json";
import previa3 from "@/assets/previa3.webp.asset.json";
import previa4 from "@/assets/previa4.webp.asset.json";
import previa5 from "@/assets/previa5.webp.asset.json";
import previa6 from "@/assets/previa6.webp.asset.json";
import atlas from "@/assets/bonus-atlas.webp.asset.json";
import linha from "@/assets/bonus-linha.webp.asset.json";
import dep1 from "@/assets/depoimento1.webp.asset.json";
import dep2 from "@/assets/depoimento2.webp.asset.json";
import dep3 from "@/assets/depoimento3.webp.asset.json";
import dep4 from "@/assets/depoimento4.webp.asset.json";
import dep5 from "@/assets/depoimento5.webp.asset.json";
import brasil from "@/assets/bonus-brasil.webp.asset.json";
import professor from "@/assets/professor.webp.asset.json";

export const CHECKOUT_COMPLETO = "https://pay.lowify.com.br/go.php?offer=6wz9fns";
export const CHECKOUT_BASICO = "https://pay.lowify.com.br/checkout.php?product_id=1SWsRZ";

export const heroImage = hero.url;

export type Slide = { src: string | null; alt: string };

export const previews: Slide[] = [
  { src: previa1.url, alt: "Prévia: O caminho para a guerra" },
  { src: previa2.url, alt: "Prévia: 1940 — A guerra se espalha" },
  { src: previa3.url, alt: "Prévia: 1941 — O conflito se torna mundial" },
  { src: previa4.url, alt: "Prévia: A virada da guerra" },
  { src: previa5.url, alt: "Prévia: 1944 — Dia D e a libertação da Europa" },
  { src: previa6.url, alt: "Prévia: 1945 — A queda do Eixo e o fim da guerra" },
];

export const bonuses = [
  {
    src: atlas.url as string | null,
    alt: "Atlas Visual da Segunda Guerra Mundial",
    title: "Atlas Visual da Segunda Guerra Mundial",
    desc: "Mapas organizados para acompanhar invasões, avanços, frentes de batalha e mudanças territoriais durante o conflito.",
    from: "DE R$47",
  },
  {
    src: linha.url as string | null,
    alt: "Linha do Tempo Completa 1933 a 1945",
    title: "Linha do Tempo Completa — 1933 a 1945",
    desc: "Os principais acontecimentos organizados em sequência para entender como cada decisão levou à próxima.",
    from: "DE R$37",
  },
  {
    src: brasil.url as string | null,
    alt: "O Brasil na Segunda Guerra Mundial",
    title: "O Brasil na Segunda Guerra Mundial",
    desc: "Entenda a entrada do Brasil no conflito, a FEB e a participação brasileira na campanha da Itália.",
    from: "DE R$27",
  },
];

export const testimonials: Slide[] = [
  { src: dep1.url, alt: "Depoimento de Marcos sobre a HQ da Segunda Guerra Mundial" },
  { src: dep2.url, alt: "Depoimento de Renata sobre a leitura da HQ no tablet" },
  { src: dep3.url, alt: "Depoimento de Carlos, professor de História" },
  { src: dep4.url, alt: "Depoimento de Diego sobre o período de 1933 a 1939" },
  { src: dep5.url, alt: "Depoimento de Patrícia sobre o atlas e a linha do tempo" },
];

export const faq = [
  {
    q: "Como recebo o material?",
    a: "Após a confirmação do pagamento, você receberá as instruções para acessar o conteúdo digital no e-mail informado durante a compra.",
  },
  {
    q: "O material é físico ou digital?",
    a: "O material é 100% digital e poderá ser acessado pelo celular, tablet ou computador.",
  },
  {
    q: "Preciso entender de História para acompanhar?",
    a: "Não. O objetivo do material é justamente apresentar os acontecimentos em sequência e facilitar a compreensão através de uma narrativa visual.",
  },
  {
    q: "A HQ fala apenas sobre batalhas?",
    a: "Não. O conteúdo apresenta contexto histórico, alianças, personagens, decisões políticas, principais acontecimentos militares e consequências do conflito.",
  },
  {
    q: "O Brasil aparece no material?",
    a: "Sim. A participação brasileira é abordada no conteúdo e o Plano Completo inclui um material complementar dedicado ao Brasil na Segunda Guerra Mundial.",
  },
  {
    q: "Posso ler pelo celular?",
    a: "Sim. O material pode ser acessado pelo celular, tablet ou computador.",
  },
  {
    q: "Preciso instalar algum programa?",
    a: "Não. As instruções de acesso serão enviadas após a compra.",
  },
];

export const professorImage: string = professor.url;
