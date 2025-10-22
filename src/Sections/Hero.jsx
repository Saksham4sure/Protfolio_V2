import { useRef } from "react";
import SplitChar from "../components/AnimationComponents/SplitChar";
import HeroLeftText from "../components/HeroComponents/HeroLeftText";
import HeroRightText from "../components/HeroComponents/HeroRightText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const block = useRef(null);
  const block2 = useRef(null);

  useGSAP(() => {
    const blocks = block.current.children;
    const blocks2 = block2.current.children;

    gsap.fromTo(
      blocks,
      {
        clipPath: "inset(0% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 100% 0%)",
        delay: 0.8,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      }
    )
    gsap.fromTo(blocks2,
      {
        clipPath: "inset(0% 0% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 100% 0%)",
        delay: 0.85,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      });
  }, []);

  return (
    <div className="" id="home">
      <div className="container relative md:h-[100vh] w-[100vw] ">
        <div className="background relative flex flex-col md:flex-row w-[100vw] lg:h-[100vh]">
          <div className="left-side h-[60vh] lg:h-[100vh] w-[100vw] md:w-[50vw]"></div>
          <div className="right-side lg:h-[100vh] w-[100vw] md:w-[50vw] overflow-hidden ">
            <div className="img relative overflow-hidden md:h-[100vh]">
              <div
                ref={block}
                className="w-[100vw] h-[100vh] absolute z-20 flex"
              >
                <div className="h-full w-1/5 md:w-[10vw] bg-[#ffffff]"></div>
                <div className="h-full w-1/5 md:w-[10vw] bg-[#ffffff]"></div>
                <div className="h-full w-1/5 md:w-[10vw] bg-[#ffffff]"></div>
                <div className="h-full w-1/5 md:w-[10vw] bg-[#ffffff]"></div>
                <div className="h-full w-1/5 md:w-[10vw] bg-[#ffffff]"></div>
              </div>
              <div
                ref={block2}
                className="w-[100vw] h-[100vh] absolute z-10 flex"
              >
                <div className="h-full w-1/5 md:w-[10vw] bg-[#505050]"></div>
                <div className="h-full w-1/5 md:w-[10vw] bg-[#505050]"></div>
                <div className="h-full w-1/5 md:w-[10vw] bg-[#505050]"></div>
                <div className="h-full w-1/5 md:w-[10vw] bg-[#505050]"></div>
                <div className="h-full w-1/5 md:w-[10vw] bg-[#505050]"></div>
              </div>
              <img
                className="xl:absolute xl:-top-32 object-cover md:h-[100vh] w-full lg:h-auto"
                src="/Image.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main-title absolute left-[50%] -translate-x-[50%] top-[9%] md:top-[20%] z-30 flex items-center justify-center">
          <SplitChar className="stylish text-5xl min-[376px]:text-[55px] text-[#222222] animated-text">
            Saksham
          </SplitChar>
        </div>
        <div className="overlay absolute top-0 md:bottom-0 flex w-[100vw] md:w-[50vw] px-4 md:px-10">
          <HeroLeftText />
          <HeroRightText />
        </div>
      </div>
    </div>
  );
};

export default Hero;
