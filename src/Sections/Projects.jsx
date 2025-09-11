import Project from "../components/ProjectComponents/Project";
import Titles from "../components/Titles";
import { projectItems, titles } from "../constants";

const Projects = () => {
  return (
    <>
      <div className="">
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
      </div>
    </>
  );
};

export default Projects;
