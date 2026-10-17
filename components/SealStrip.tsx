"use client";

import { useImageFailed } from "./useImageFailed";

function Seal({ src }: { src: string }) {
  const { ref, failed, onError } = useImageFailed();
  if (failed) return null;
  return (
    <li className="an-seals__item">
      <img
        src={src}
        alt="Selo de reconhecimento recebido pelo escritório"
        width={120}
        height={120}
        loading="lazy"
        decoding="async"
        ref={ref}
        onError={onError}
      />
    </li>
  );
}

export function SealStrip({ seals }: { seals: string[] }) {
  return (
    <ul className="an-seals" aria-label="Selos de reconhecimento">
      {seals.map((src) => (
        <Seal key={src} src={src} />
      ))}
    </ul>
  );
}
