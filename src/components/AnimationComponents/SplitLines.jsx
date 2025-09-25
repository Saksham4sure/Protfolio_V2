import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const SplitLines = ({ children, className = "", delay }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    if (textRef.current) {
      const split = new SplitText(textRef.current, { type: "lines", mask: "lines" });

      gsap.from(split.lines, {
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: delay,
      });
    }
  }, []);

  return (
    <p ref={textRef} className={className}>
      {children}
    </p>
  );
};

export default SplitLines;
