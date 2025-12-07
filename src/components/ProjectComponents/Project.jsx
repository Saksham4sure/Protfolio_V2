import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";


function Project({ title, img, descri, techno, link, index }) {

  return (

    <Link to={link} target="_blank" className="border cursor-pointer border-[#bbbbbb] px-2 py-2 overflow-hidden relative card rounded-2xl w-full sm:w-[350px] md:w-[400px] h-[250px] md:h-[300px]">
      <div className="flex justify-between items-center h-[20%] px-2">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
        </div>
        <div className="w-8 h-8 flex items-center justify-center border rounded-full border-[#cccccc] bg-[#fafafa]">
          <MdArrowOutward />
        </div>
      </div>
      <div className="w-full h-[80%] overflow-hidden rounded-2xl border border-[#cccccc]">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
    </Link>

  );
}

export default Project;
