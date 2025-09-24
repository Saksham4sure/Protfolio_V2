import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";


function Project({ title, img, descri, techno }) {
  const tl = useRef(null);
  const imgRef = useRef(null);
  const projRef = useRef(null);
  const til1 = useRef(null);
  const til2 = useRef(null);

  useGSAP( () => {

    tl.current = gsap.timeline({paused: true})
    .to(imgRef.current, {
      scale: 1.05,
      duration: 0.5,
      ease: "power3.out"
    })
    .to(til1.current, {
      y: -30,
      duration: 0.5,
      ease: "power3.out"
    }, "<")
    .to(til2.current, {
      y: -30,
      duration: 0.5,
      ease: "power3.out"
    }, "<")
  });

  const enter = () => tl.current.play();
  const leave = () => tl.current.reverse();

  return (
    <div className="">
      <div className="bg-stone-900 h-[1px] rounded-full w-full"></div>
      <div ref={projRef} className="flex flex-col md:flex-row py-5 px-2" onMouseEnter={enter} onMouseLeave={leave}>
        <div className="md:w-1/6 flex justify-between">
        <div className="h-[30px] overflow-hidden">
          <h1 ref={til1} className="bold text-xl">-{title}</h1>
          <h1 ref={til2} className="bold text-xl">-{title}</h1>
        </div>
          <MdArrowOutward className="text-2xl flex md:hidden" />
        </div>
        <div className="md:w-2/6 h-full py-4 md:py-0 overflow-hidden">
          <img
            ref={imgRef}
            className="object-cover h-full"
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
          <div className="text-xl md:text-2xl leading-6 md:leading-7 py-3">
            {descri}
          </div>
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
