function Titles({title, text}) {
  return (
    <div className="md:px-40 pb-10 px-10 ">
      <h1 className="light text-3xl">{title}</h1>
      <p className="light text-lg">{text}</p>
    </div>
  );
};

export default Titles;
