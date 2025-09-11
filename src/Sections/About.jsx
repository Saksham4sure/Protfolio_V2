import Skills from "../components/SkillComponents/Skills";
import Titles from "../components/Titles";
import { skillTiles, titles } from "../constants";

const About = () => {
  return (
    <>
      <div className=" bg-[#222222] text-[#FFFFFF] flex flex-col items-center rounded-[40px] px-10">
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
            <div className="bg-stone-500 h-[1px] w-[80vw] rounded-full "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
