import { useEffect, useRef } from "react";
import Skills from "../components/SkillComponents/Skills";
import Titles from "../components/Titles";
import { aboutPara1, aboutPara2, skillTiles, titles } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const words1 = aboutPara1.split(" ");
  const words2 = aboutPara2.split(" ");
  const mainText = useRef(null);
  const secondText = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const text1 = mainText.current.querySelectorAll("span");
    const text2 = secondText.current.querySelectorAll("span");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      })
      .from(text1, {
        autoAlpha: 0,
        stagger: 0.03,
        duration: 0.1,
        ease: "power3.out",
      })
      .from(text2, {
        autoAlpha: 0,
        stagger: 0.03,
        duration: 0.5,
        ease: "power3.out",
      });
  }, []);

  return (
    <div id='skills' className="bg-[#222222] text-[#FFFFFF] flex flex-col items-center rounded-[40px] px-10">
      <div
        ref={sectionRef}
        className="py-36 flex flex-col items-center justify-center gap-8 md:h-[70vh] md:w-[100vw] md:relative z-10"
      >
        <div
          ref={mainText}
          className="text-3xl md:text-[2.5vw] md:absolute md:left-15 md:top-[35%] md:w-[70vw]  flex flex-wrap"
        >
          {words1.map((word, i) => (
            <span className="mr-[6px] inline-block" key={i}>
              {word}
            </span>
          ))}
        </div>

        <div
          ref={secondText}
          className="text-xl md:text-[1.7vw] md:absolute md:right-15 md:w-[30vw] md:top-[60%] light flex flex-wrap"
        >
          {words2.map((word, i) => (
            <span className="mr-[6px] inline-block" key={i}>
              {word}
            </span>
          ))}
        </div>
      </div>
      <div className="py-36 flex flex-col items-center justify-center gap-8 md:h-[70vh] md:w-[100vw] absolute px-10 text-[#464646]"
      >
        <div
          
          className="text-3xl md:text-[2.5vw] md:absolute md:left-15 md:top-[35%] md:w-[70vw] flex flex-wrap"
        >
          {words1.map((word, i) => (
            <span className="mr-[6px] inline-block" key={i}>
              {word}
            </span>
          ))}
        </div>

        <div
          
          className="text-xl md:text-[1.7vw] md:absolute md:right-15 md:w-[30vw] md:top-[60%] light flex flex-wrap"
        >
          {words2.map((word, i) => (
            <span className="mr-[6px] inline-block" key={i}>
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="md:pt-10 pb-10">
        <Titles title={titles[0].title} text={titles[0].text} />
        <div className="flex items-center justify-center flex-col">
          <div>
            {skillTiles.map((skill) => (
              <Skills
                key={skill.skill}
                skill={skill.skill}
                desc={skill.desc}
                marq={skill.marq}
              />
            ))}
          </div>
          <div className="bg-stone-500 h-[1px] w-[80vw] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
