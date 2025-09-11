// src/components/LenisProvider.jsx
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 1.8,
      smooth: true,
      smoothTouch: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
}
