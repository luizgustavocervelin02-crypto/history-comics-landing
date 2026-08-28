type Props = {
  src?: string | null;
  alt: string;
  radius: number;
  className?: string;
  priority?: boolean;
  label?: string;
  ratio?: string;
};

export function ImageSlot({
  src,
  alt,
  radius,
  className = "",
  priority = false,
  label,
  ratio = "4 / 5",
}: Props) {
  if (!src) {
    return (
      <div
        className={`flex w-full items-center justify-center border border-dashed border-border bg-beige px-4 text-center ${className}`}
        style={{ borderRadius: radius, aspectRatio: ratio }}
        role="img"
        aria-label={`Imagem pendente: ${alt}`}
      >
        <span className="font-display text-[11px] leading-snug font-bold tracking-wide text-muted-foreground uppercase">
          Imagem pendente
          <br />
          {label ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={`block w-full object-contain ${className}`}
      style={{ borderRadius: radius }}
    />
  );
}
