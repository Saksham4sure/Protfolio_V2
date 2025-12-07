import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Skill({ skill, desc, marq }) {
  const skillRef = useRef(null);
  const descRef = useRef(null);
  const bgRef = useRef(null);
  const tl = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } })
      .to(skillRef.current, {
        x: -20,
        color: "#222222",
        duration: 0.6,
      })
      .to(descRef.current, {
        x: 20,
        color: "#222222",
        duration: 0.6,
      }, "<")

      .fromTo(bgRef.current,
        { clipPath: "inset(50% 0% 50% 0%)" }, 
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.4, ease: "expo.inOut" }, 
        "<"
      );
  });

  const enter = () => tl.current.play();
  const leave = () => tl.current.reverse();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-stone-500 h-[1px] rounded-full w-[80vw]"></div>

      <div
        className="relative py-10 px-4 md:px-20 flex items-center w-[100vw]"
        onMouseEnter={enter}
        onMouseLeave={leave}
      >
        <div
          ref={bgRef}
          className="absolute inset-0 z-10 flex items-center bg-[#FFFFFF] text-[#222222] uppercase origin-left cursor-default"
          style={{ clipPath: "inset(100% 0% 0% 0%)" }}
        >
          <div className="flex moveX">
            <h1 className="text-[15vh] md:text-[20vh] whitespace-nowrap leading-0">{marq}</h1>
            <h1 className="text-[15vh] md:text-[20vh] whitespace-nowrap leading-0">{marq}</h1>
          </div>
          <div className="flex moveX">
            <h1 className="text-[15vh] md:text-[20vh] whitespace-nowrap leading-0">{marq}</h1>
            <h1 className="text-[15vh] md:text-[20vh] whitespace-nowrap leading-0">{marq}</h1>
          </div>
        </div>

        <div className="w-full flex items-center px-10 md:px-32 pointer-events-none">
          <div ref={skillRef} className="w-3/4 md:w-4/5 md:pl-10">
            <h1 className="text-4xl md:text-6xl">{skill}</h1>
          </div>
          <div ref={descRef} className="w-1/4 md:w-1/5 text-sm">
            <h2>{desc}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;