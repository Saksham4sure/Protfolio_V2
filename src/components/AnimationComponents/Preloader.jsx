import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useState } from "react";

const words = [
  "• Namaste",
  "• Nǐ hǎo",
  "• Ciao",
  "• Hola",
  "• Konnichiwa",
  "• Hallo",
  "• Bonjour",
  "• नमस्कार",
];

export default function Preloader({ ready, setLoading }) {
  const textRef = useRef();
  const containerRef = useRef();
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setAnimationDone(true),
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );

    words.forEach((word) => {
      tl.to(textRef.current, {
        duration: 0.08,
        onComplete: () => {
          textRef.current.innerText = word;
        },
      });
      tl.to(textRef.current, { duration: 0.08 });
    });

    return () => tl.kill();
  }, []);

  useEffect(() => {
    if (!ready || !animationDone) return;

    gsap.to(containerRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => setLoading(false),
    });
  }, [ready, animationDone, setLoading]);


  return (
    <div
      ref={containerRef}
      className="fixed bg-[#252525] h-[100vh] w-[100vw] flex items-center justify-center z-[9999]"
    >
      <p
        ref={textRef}
        className="text-white text-5xl font-light tracking-wide flex items-center justify-center w-full h-full"
      >
        • Hello
      </p>
    </div>
  );
}
