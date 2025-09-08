function skill ({skill, desc}){
  return (
    <>
    <div className="bg-stone-500 h-[1px] w-[80vw] rounded-full"></div>
    <div className="w-[70vw] py-10 px-4 md:px-20">
        <h1 className="text-3xl md:text-5xl ">{skill}</h1>
        <h2>{desc}</h2>
    </div>
    </>
  );
};

export default skill;
