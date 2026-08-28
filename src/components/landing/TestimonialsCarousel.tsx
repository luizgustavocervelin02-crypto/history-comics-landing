import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "./data";
import { ImageSlot } from "./ImageSlot";

export function TestimonialsCarousel() {
  const items = testimonials.filter(Boolean);
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect).on("reInit", onSelect);
  }, [embla, onSelect]);

  if (items.length === 0) return null;

  return (
    <div>
      <div className="embla-viewport" ref={emblaRef}>
        <div className="flex gap-3 md:gap-4">
          {items.map((t, i) => (
            <div
              key={t.alt}
              className="min-w-0 shrink-0 grow-0 basis-[86%] sm:basis-[48%] lg:basis-[33%]"
            >
              <ImageSlot src={t.src} alt={t.alt} radius={10} ratio="3 / 4" label={`Depoimento 0${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Depoimento anterior"
          onClick={() => embla?.scrollPrev()}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-beige"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((t, i) => (
            <button
              key={`dot-${t.alt}`}
              type="button"
              aria-label={`Ir para o depoimento ${i + 1}`}
              aria-current={selected === i}
              onClick={() => embla?.scrollTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                selected === i ? "w-6 bg-primary" : "w-2.5 bg-border"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Próximo depoimento"
          onClick={() => embla?.scrollNext()}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-beige"
        >
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Imagens ilustrativas. Depoimentos reais serão exibidos assim que enviados.
      </p>
    </div>
  );
}
