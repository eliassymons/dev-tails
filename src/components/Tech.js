import js from "../images/icons/javascript.svg";
import bootstrap from "../images/icons/bootstrap.svg";
import css from "../images/icons/css3.svg";
import html from "../images/icons/html5.svg";
import sass from "../images/icons/sass.svg";
import ts from "../images/icons/typescript.svg";
import node from "../images/icons/nodejs.svg";

function Tech() {
  return (
    <div className="flex flex-col space-y-10 py-20  w-full bg-[#eff6e0] text-[#01161E]">
      <h2 className="  text-3xl font-extrabold md:text-4xl">Technologies</h2>
      <div className="flex flex-col items-center space-y-10 md:flex md:flex-row md:justify-center md:space-y-0 md:space-x-4 md:items-center">
        <img
          alt="tech-icon"
          className="w-1/2 max-w-[8rem] md:w-[4rem] lg:w-[5.5rem]"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
        <img
          alt="tech-icon"
          className="w-1/2 max-w-[8rem] md:w-[4rem] lg:w-[5.5rem]"
          src={js}
        />
        <img
          alt="tech-icon"
          className="w-1/2 max-w-[8rem] md:w-[4rem] lg:w-[5.5rem]"
          src={ts}
        />
        <img
          alt="tech-icon"
          className="w-1/2 max-w-[8rem] md:w-[4rem] lg:w-[5.5rem]"
          src={node}
        />
        <img
          alt="tech-icon"
          className="w-1/2 max-w-[8rem] md:w-[4rem] lg:w-[5.5rem]"
          src={css}
        />
        <img
          alt="tech-icon"
          className="w-1/2 max-w-[8rem] md:w-[4rem] lg:w-[5.5rem]"
          src={html}
        />
        <img
          alt="tech-icon"
          className="w-1/2 max-w-[8rem] md:w-[4rem] lg:w-[5.5rem]"
          src={bootstrap}
        />

        <img
          alt="tech-icon"
          className="w-1/2 max-w-[8rem] md:w-[4rem] lg:w-[5.5rem]"
          src={sass}
        />
        <img
          alt="tech-icon"
          className="w-1/2 max-w-[8rem] md:w-[4rem] lg:w-[5.5rem]"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
        />
      </div>
    </div>
  );
}

export default Tech;
