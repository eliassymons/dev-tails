import { Link } from "react-scroll";

function Hero() {
  return (
    <div
      id="hero"
      className="bg-[url('./mobile-bg.jpg')] bg-black bg-opacity-60 bg-blend-overlay   bg-center object-cover flex-col items-start space-y-6 justify-start text-center  text-[#EFF6E0] pt-[20vh] pb-[20vh] md:space-y-10 md:bg-[url('./hero-bg.jpg')] "
    >
      <h1 className=" text-4xl font-extrabold max-w-xs mx-auto md:max-w-xl leading-[3.5rem] md:text-5xl  lg:text-6xl uppercase lg:max-w-2xl">
        DEVTAILS
      </h1>
      <div className="space-y-10 text-center">
        <p className="text-xl font-bold max-w-xs mx-auto md:max-w-sm md:text-2xl">
          Modern solutions to modern web needs.
        </p>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className="bg-[#EFF6E0] text-xl px-8 py-2 mt-10 rounded-full font-semibold text-[#01161E] hover:bg-[#01161e] md:text-2xl hover:text-white">
            Get a free estimate
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
