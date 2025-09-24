import { navLinks, socialMedias, titles } from "../constants";
import Titles from "../components/Titles";
import { Link } from "react-scroll";
import { motion } from "framer-motion";


const Contact = () => {
    

  return (
    <>
      <motion.div id='contact'  className="py-10 bg-[#222222] text-[#ffffff] h-[100vh] ">
        <div className="pt-20">
          <Titles title={titles[2].title} text={titles[2].text} />
        </div>
        <div>
          <h1 className="text-5xl bold px-10">Get in touch</h1>
        </div>
        <div className="px-10 pt-4">
          <div className="bg-stone-100 h-[1px] rounded-full w-full"></div>
          <div className="flex flex-col items-center justify-center md:flex-row py-10 px-5 gap-10 md:gap-20">
            <div className="flex gap-10 md:gap-20 md:w-1/2 items-center justify-center">
              <div className="flex flex-col ">
                <p className="text-white/50 text-xl">Go to</p>
                {navLinks.map((navLinks, index) => (
                  <Link
                    className="tracking-wide text-3xl light cursor-pointer"
                    key={index}
                    to={navLinks.href}
                    smooth offset={0} duration={2000} 
                  >
                    {navLinks.id}
                  </Link>
                ))}
              </div>
              <div className="">
                <p className="text-white/50 text-xl">Socials</p>
                <div className="flex flex-wrap flex-col ">
                  {socialMedias.map((socials, index) => (
                    <a
                      className="tracking-wide text-3xl light"
                      key={index}
                      href={socials.href}
                    >
                      {socials.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div>
                <p className="text-xl text-white/50">G-mail</p>
                <p className="text-2xl tracking-wide light">
                  sakshamorig123@gmail.com
                </p>
              </div>
            </div>
          </div>
          <motion.div className="bg-stone-100 h-[1px] rounded-full w-full"></motion.div>
          <motion.div className="bg-stone-100 h-[1px] rounded-full w-full mt-1"></motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
