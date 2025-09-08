import Skills from "../components/SkillComponents/Skills";
import { skillTiles } from "../constants";

const About = () => {
  return (
    <>
      <div className=" bg-[#222222] text-[#FFFFFF] flex flex-col items-center rounded-t-[60px] px-10">
        <div className="py-36 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          <p className="text-3xl md:w-[45%] md:text-[2vw] light">
            Hi I'm Saksham Shrestha, a passionate frontend developer with a
            focus on building fast, minimal, and visually appealing web
            applications.
          </p>
          <p className="text-xl md:w-[20%] md:text-[1.3vw] light">
            I'm continuously learning and experimenting with modern tools like
            React, Tailwind, and motion libraries.
          </p>
        </div>

        <div className="md:py-10">
          <div className="md:pl-16 pb-10">
            <h1 className="light text-2xl">Skills</h1>
            <p className="light">
              Not just technologies, but the ingredients of creativity, speed,
              and precision.
            </p>
          </div>
          <div>
            {skillTiles.map((skill) => (
              <Skills key={skill.skill} skill={skill.skill} />
            ))}
          </div>
          <div className="bg-stone-500 h-[1px] w-[80vw] rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default About;
