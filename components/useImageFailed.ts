"use client";

import { useEffect, useRef, useState } from "react";

// Detecta falha de carregamento mesmo quando o erro acontece antes da hidratação
// (o onError do React não dispara nesse caso porque o evento já passou).
export function useImageFailed() {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return { ref, failed, onError: () => setFailed(true) };
}
