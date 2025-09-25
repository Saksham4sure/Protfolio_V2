import SplitLines from "../AnimationComponents/SplitLines";
import SplitWords from "../AnimationComponents/SplitWords";

const HeroRightText = () => {


  return (
    <>
      <div className="right-text w-[90vw] md:w-1/2 absolute bottom-[42%] min-[376px]:bottom-[42%] md:bottom-[4%] md:right-3 ">
        <SplitWords delay={0.9} className="text-lg md:text-xl">Saksham Shrestha</SplitWords>
        <SplitLines delay={1} className="text-sm md:text-base leading-snug light">
          I'm a frontend-focused web developer crafting modern, scalable, and
          user-friendly digital experiences with a strong eye for design and
          performance.
        </SplitLines>
      </div>
    </>
  );
};

export default HeroRightText;
