"use client";

import { useImageFailed } from "./useImageFailed";

type PortraitProps = {
  src: string;
  name: string;
  priority?: boolean;
  className?: string;
};

// Retrato real da sócia. Se a imagem não carregar, mostra as iniciais
// em vez de colocar uma foto de outra pessoa no lugar.
export function Portrait({ src, name, priority = false, className = "" }: PortraitProps) {
  const { ref, failed, onError } = useImageFailed();
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className={`an-portrait ${className}`}>
      {failed ? (
        <div className="an-portrait__fallback" role="img" aria-label={`Retrato de ${name} indisponível`}>
          {initials}
        </div>
      ) : (
        <img
          src={src}
          alt={`Retrato de ${name}`}
          width={683}
          height={1024}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          ref={ref}
          onError={onError}
        />
      )}
    </div>
  );
}
