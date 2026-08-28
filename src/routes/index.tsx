import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, X, Star, Gift, ChevronDown } from "lucide-react";
import {
  CHECKOUT_BASICO,
  CHECKOUT_COMPLETO,
  bonuses,
  faq,
  heroImage,
} from "@/components/landing/data";
import { ImageSlot } from "@/components/landing/ImageSlot";
import { PreviewCarousel } from "@/components/landing/PreviewCarousel";
import { TestimonialsCarousel } from "@/components/landing/TestimonialsCarousel";

const TITLE = "Segunda Guerra Mundial em Quadrinhos | História Completa Ilustrada";
const DESCRIPTION =
  "Acompanhe os principais acontecimentos da Segunda Guerra Mundial em uma narrativa visual ilustrada e organizada em ordem cronológica.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function TopBar() {
  const [date, setDate] = useState("");
  useEffect(() => {
    const d = new Date();
    const p = (n: number) => String(n).padStart(2, "0");
    setDate(`${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()}`);
  }, []);

  return (
    <div className="flex min-h-[44px] items-center justify-center bg-primary px-4 py-2.5 text-center">
      <span className="font-display text-[11px] font-bold tracking-[0.08em] text-primary-foreground uppercase sm:text-xs">
        Oferta especial de hoje{date ? ` • ${date}` : ""}
      </span>
    </div>
  );
}

function CtaButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`flex min-h-12 w-full items-center justify-center rounded-[9px] bg-success px-5 py-3 text-center font-display text-[15px] font-bold tracking-wide text-success-foreground uppercase transition-transform hover:brightness-110 active:scale-[0.99] sm:text-base ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto mb-6 max-w-2xl text-center">
      <h2 className="font-display text-[22px] leading-[1.15] font-extrabold text-foreground sm:text-3xl">
        {children}
      </h2>
      {sub ? <p className="mt-2.5 text-sm text-muted-foreground sm:text-base">{sub}</p> : null}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <TopBar />

      {/* HERO */}
      <header className="px-4 pt-5 pb-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h1
            className="mx-auto max-w-[96%] font-display font-extrabold text-foreground"
            style={{ fontSize: "clamp(22px, 5.6vw, 42px)", lineHeight: 1.06, letterSpacing: "-0.5px" }}
          >
            <span className="text-primary">A Segunda Guerra Mundial</span> em Quadrinhos com{" "}
            <span className="text-primary">+250 Páginas Ilustradas</span> Para Entender Como o Mundo
            Entrou em Guerra e Como Tudo Terminou
          </h1>
          <p className="mx-auto mt-2.5 mb-2.5 max-w-2xl text-[15px] leading-[1.4] text-muted-foreground sm:text-lg">
            Uma HQ digital completa para acompanhar Hitler, Pearl Harbor, Stalingrado, Dia D,
            Hiroshima e os principais acontecimentos de 1939 a 1945 — tudo explicado em uma
            narrativa visual fácil de seguir, sem se perder em datas e fatos soltos.
          </p>

          <div className="mx-auto w-[92%] max-w-[520px]">
            <img
              src={heroImage}
              alt="Capa do livro A Segunda Guerra Mundial contada em quadrinhos"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              className="mx-auto block max-h-[300px] w-full object-contain sm:max-h-[520px]"
              style={{ borderRadius: 10 }}
            />
          </div>

          <div className="mx-auto mt-4 w-[90%] max-w-[420px]">
            <CtaButton href="#planos">Quero minha HQ em quadrinhos ↓</CtaButton>
            <p className="mt-2.5 text-xs text-muted-foreground sm:text-sm">
              Acesso digital imediato • Leia no celular, tablet ou computador
            </p>
          </div>
        </div>
      </header>

      {/* PRÉVIAS */}
      <section className="py-8" aria-labelledby="previas">
        <div className="px-4">
          <div className="mx-auto mb-6 max-w-2xl text-center">
            <h2
              id="previas"
              className="font-display text-[22px] leading-[1.15] font-extrabold sm:text-3xl"
            >
              Veja uma <span className="text-primary">prévia dos quadrinhos</span> que você vai
              receber
            </h2>
            <p className="mt-2.5 text-sm text-muted-foreground sm:text-base">
              Veja como batalhas, mapas, personagens e acontecimentos são apresentados de forma
              visual e cronológica.
            </p>
          </div>
        </div>
        <div className="pl-4 md:pl-8">
          <PreviewCarousel />
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-beige/60 px-4 py-10" aria-labelledby="depoimentos">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-6 max-w-2xl text-center">
            <h2
              id="depoimentos"
              className="font-display text-[22px] leading-[1.15] font-extrabold sm:text-3xl"
            >
              O que nossos leitores estão dizendo
            </h2>
            <p className="mt-2.5 text-sm text-muted-foreground sm:text-base">
              Veja a experiência de quem já teve contato com o material.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* BÔNUS */}
      <section className="px-4 py-10" aria-labelledby="bonus">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-display text-[11px] font-bold tracking-wide text-primary uppercase">
              <Gift className="h-3.5 w-3.5" aria-hidden="true" /> Bônus exclusivos para você
            </span>
          </div>
          <div className="mx-auto mb-6 max-w-2xl text-center">
            <h2 id="bonus" className="font-display text-[22px] font-extrabold sm:text-3xl">
              Bônus exclusivos inclusos
            </h2>
            <p className="mt-2.5 text-sm text-muted-foreground sm:text-base">
              Escolha o Plano Completo e leve também estes materiais complementares sem custo
              adicional.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bonuses.map((b) => (
              <article
                key={b.title}
                className="flex flex-col rounded-xl border border-border bg-card p-4"
              >
                <ImageSlot src={b.src} alt={b.alt} radius={8} label={b.title} />
                <h3 className="mt-4 font-display text-base font-bold">{b.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-sm text-muted-foreground line-through">{b.from}</span>
                  <span className="rounded-md bg-success px-2.5 py-1 font-display text-xs font-bold tracking-wide text-success-foreground uppercase">
                    Grátis
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="bg-beige/60 px-4 py-10" aria-labelledby="planos">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>
            <span id="planos">Escolha sua edição e comece a leitura agora mesmo.</span>
          </SectionTitle>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* BÁSICO */}
            <div className="flex flex-col rounded-2xl border border-border bg-card p-5">
              <h3 className="font-display text-lg font-extrabold tracking-wide uppercase">
                Plano Básico
              </h3>
              <p className="mt-3 text-sm text-muted-foreground line-through">DE R$19,90</p>
              <p className="font-display text-4xl font-extrabold">R$10,00</p>
              <p className="text-sm text-muted-foreground">pagamento único</p>

              <p className="mt-5 font-display text-xs font-bold tracking-wide uppercase">
                O que você leva:
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                {[
                  "Versão essencial da Segunda Guerra Mundial em Quadrinhos",
                  "Acesso digital",
                  "Leitura pelo celular, tablet ou computador",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 font-display text-xs font-bold tracking-wide uppercase">
                Não inclui:
              </p>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                {[
                  "Edição completa com +250 páginas",
                  "Atlas Visual",
                  "Linha do Tempo 1933–1945",
                  "O Brasil na Segunda Guerra Mundial",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <CtaButton href={CHECKOUT_BASICO}>Quero o plano básico</CtaButton>
              </div>
            </div>

            {/* COMPLETO */}
            <div className="relative flex flex-col rounded-2xl border-2 border-success bg-card p-5">
              <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-success px-3 py-1 font-display text-[11px] font-bold tracking-wide text-success-foreground uppercase">
                <Star className="h-3 w-3" aria-hidden="true" /> Mais escolhido
              </span>
              <h3 className="mt-2 font-display text-lg font-extrabold tracking-wide uppercase">
                Plano Completo
              </h3>
              <p className="mt-3 text-sm text-muted-foreground line-through">DE R$47,90</p>
              <p className="font-display text-4xl font-extrabold text-success-deep">R$27,90</p>
              <p className="text-sm text-muted-foreground">pagamento único</p>

              <p className="mt-5 font-display text-xs font-bold tracking-wide uppercase">
                Você recebe:
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                {[
                  "Segunda Guerra Mundial em Quadrinhos — Edição Completa",
                  "+250 páginas ilustradas",
                  "História organizada em sequência",
                  "Leitura pelo celular, tablet ou computador",
                  "Acesso digital imediato",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl bg-beige p-4">
                <p className="font-display text-xs font-bold tracking-wide uppercase">
                  Todos os bônus:
                </p>
                <ul className="mt-2 space-y-2 text-sm">
                  {["Atlas Visual", "Linha do Tempo 1933–1945", "Brasil na Segunda Guerra Mundial"].map(
                    (t) => (
                      <li key={t} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                        <span>{t}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="mt-6">
                <CtaButton href={CHECKOUT_COMPLETO}>Quero o plano completo</CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSOR */}
      <section className="px-4 py-10" aria-labelledby="professor">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:items-start">
          <div className="mx-auto w-full max-w-[320px]">
            <ImageSlot
              src={null}
              alt="Foto do Professor Erasto"
              radius={12}
              ratio="3 / 4"
              label="Foto Professor Erasto"
            />
          </div>
          <div className="min-w-0">
            <h2 id="professor" className="font-display text-[22px] font-extrabold sm:text-3xl">
              Conheça o professor que criou este guia
            </h2>
            <p className="mt-2 font-display text-sm font-bold tracking-[0.12em] text-primary uppercase">
              Prof. Erasto
            </p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Erasto é o professor responsável por transformar um dos períodos mais importantes —
                e também mais complexos — da História em uma experiência muito mais simples de
                acompanhar.
              </p>
              <p>
                Depois de perceber como datas, batalhas, alianças e personagens acabam sendo
                apresentados de forma fragmentada, surgiu a ideia de organizar a Segunda Guerra
                Mundial como uma única narrativa visual, seguindo os acontecimentos em ordem e
                mostrando como cada decisão levou à próxima.
              </p>
              <p>
                O resultado é este guia em quadrinhos: um material criado para quem quer compreender
                a Segunda Guerra de forma clara, visual e envolvente, sem depender de longas páginas
                de conteúdo difícil de conectar.
              </p>
            </div>
            <ul className="mt-5 space-y-2">
              {[
                "História organizada em ordem cronológica",
                "Explicações visuais e fáceis de acompanhar",
                "Conteúdo pensado para facilitar a compreensão",
              ].map((t) => (
                <li key={t} className="flex gap-2 font-display text-xs font-bold tracking-wide uppercase">
                  <Check className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-beige/60 px-4 py-10" aria-labelledby="faq">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>
            <span id="faq">Perguntas Frequentes</span>
          </SectionTitle>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border bg-card px-4 py-3"
              >
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 font-display text-sm font-bold">
                  {item.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-graphite px-4 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-[24px] leading-tight font-extrabold text-background sm:text-3xl">
            Veja a Segunda Guerra Mundial como uma única história.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-background/75 sm:text-base">
            Acompanhe os acontecimentos na ordem certa e descubra como decisões, batalhas e
            personagens se conectaram entre 1939 e 1945.
          </p>
          <div className="mx-auto mt-6 w-full max-w-[420px]">
            <CtaButton href={CHECKOUT_COMPLETO}>Quero acessar a HQ completa</CtaButton>
          </div>
        </div>
      </section>

      <footer className="bg-footer px-4 py-8 text-center text-footer-foreground">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a href="#" className="underline-offset-4 hover:underline">
            Termos de Uso
          </a>
          <a href="#" className="underline-offset-4 hover:underline">
            Política de Privacidade
          </a>
          <a href="#" className="underline-offset-4 hover:underline">
            Contato
          </a>
        </nav>
        <p className="mt-4 text-xs text-footer-foreground/70">
          © 2026 Segunda Guerra Mundial em Quadrinhos. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
