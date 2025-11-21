import { useEffect, useRef } from "react";
import gsap from "gsap";

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

export default function Preloader({ setLoading }) {
  const textRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(textRef.current, {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out"
    }
  )

    words.forEach((word) => {

      tl.to(textRef.current, {
        duration: 0.08,
        onComplete: () => {
          textRef.current.innerText = word;
        }
      });
      tl.to(textRef.current, {
        duration: 0.08,
      });
    });

    tl.to({}, { duration: 0.3 });

    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.5,
      ease: "power1.inOut",
      onComplete: () => setLoading(false),
    });

  }, [setLoading]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#252525] h-[100vh] w-[100vw] flex items-center justify-center z-[9999]"
    >
      <p
        ref={textRef}
        className="text-white text-5xl font-light tracking-wide"
      >
        • Hello
      </p>
    </div>
  );
}
