import { motion, useScroll, useTransform, } from "framer-motion";
import Project from "../components/ProjectComponents/Project";
import Titles from "../components/Titles";
import { projectItems, titles } from "../constants";
import { useRef } from "react";



const Projects = () => {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const height = useTransform(scrollYProgress, [0,1], [100, 0])

  return (
    <>
      <div ref={container} id='projects' className="">
        <div className="pt-28">
          <Titles title={titles[1].title} text={titles[1].text} />
        </div>
        <div>
          <h1 className="text-5xl bold px-10">Selected Works</h1>
        </div>
        <div className="px-10 pt-6 pb-10">
          {projectItems.map((proj) => (
            <Project
              key={proj.title}
              title={proj.title}
              img={proj.img}
              descri={proj.desc}
              techno={proj.tech}
            />
          ))}
          <div className="bg-stone-900 h-[1px] rounded-full w-full"></div>
        </div>
        <motion.div style={{height}} className="relative mt-[10px]">
          <div className="absolute h-[700%] w-[120%] bg-[#FFFFFF] left-[-10%] rounded-b-[50%] "></div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
