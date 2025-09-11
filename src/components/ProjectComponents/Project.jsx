import { MdArrowOutward } from "react-icons/md";

function Project({ title, img, descri, techno }) {
  return (
    <div className="">
      <div className="bg-stone-900 h-[1px] rounded-full w-full"></div>
      <div className="flex flex-col md:flex-row py-5 px-2">
        <div className="md:w-1/6 flex justify-between">
          <h1 className="bold text-xl">-{title}</h1>
          <MdArrowOutward className="text-2xl flex md:hidden" />
        </div>
        <div className="md:w-2/6 h-full py-4 md:py-0">
          <img
            className="object-cover border border-stone-400 "
            src={img}
            alt={title}
          />
        </div>
        <div className="flex flex-col md:w-3/6 md:px-10">
          <div className="flex items-center gap-2 text-sm ">
            {techno.map((tech) => (
              <p
                className="border rounded-2xl px-3 flex items-center text-center justify-center light"
                key={tech}
              >
                {tech}
              </p>
            ))}
          </div>
          <div className="text-xl md:text-2xl leading-6 md:leading-7 py-3">{descri}</div>
          <div className=" border border-stone-200 rounded-2xl bg-[#222222] text-[#FFFFFF] w-[90px] flex items-center justify-center cursor-pointer">
            <p className="light flex items-center gap-2">Discover </p>
          </div>
        </div>
        <MdArrowOutward className="text-2xl hidden md:flex" />
      </div>
    </div>
  );
}

export default Project;
