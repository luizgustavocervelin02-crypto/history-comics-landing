import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { previews } from "./data";
import { ImageSlot } from "./ImageSlot";

export function PreviewCarousel() {
  const valid = previews.filter((p) => Boolean(p.src));
  const slides = [...valid, ...valid];

  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true, align: "start" }, [
    AutoScroll({ speed: 0.8, startDelay: 800, stopOnInteraction: false, stopOnMouseEnter: false }),
  ]);

  if (slides.length === 0) return null;

  return (
    <div className="embla-viewport" ref={emblaRef}>
      <div className="flex gap-3 md:gap-4">
        {slides.map((s, i) => (
          <div
            key={`${s.alt}-${i}`}
            className="min-w-0 shrink-0 grow-0 basis-[86%] sm:basis-[48%] lg:basis-[30%] xl:basis-[26%]"
          >
            <ImageSlot src={s.src} alt={s.alt} radius={10} />
          </div>
        ))}
      </div>
    </div>
  );
}
