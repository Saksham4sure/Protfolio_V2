import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiMaximize } from "react-icons/fi";



function Project({ title, img, descri, techno, link }) {

  return (
    <Link to={link} target="_blank">
      <div className="border border-[#cccccc] w-[320px] md:w-[400px] h-[240px] md:h-[300px] px-4 pt-3 bg-[#eeeeee] rounded-2xl gap-4 flex flex-col overflow-hidden">
        <div className="flex justify-between items-center cursor-default">
          <div className="flex px-2 py-1 rounded-2xl text-xs capitalize text-[#666666] gap-1 bg-[#cccccc]">
            {techno.map((techno) => (
              <p className="border px-2 rounded-2xl border-[#bebebe]">{techno}</p>
            ))}
          </div>
          <Link to={link}>
            <FiMaximize />
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl text-[#222222] bold">{title}</h1>
          <p className="text-sm text-[#666666]">{descri}</p>
        </div>
        <div className="w-full rounded-2xl">
          <img className="w-full object-cover rounded-xl" src={img} alt={title} />
        </div>
      </div>
    </Link>
  );
}

export default Project;
