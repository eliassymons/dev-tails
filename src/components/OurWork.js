import dog from "../images/noco.png";
import guitar from "../images/guitar.png";
import bread from "../images/sabzi.png";

function OurWork() {
  return (
    <div className="text-[#EFF6E0] w-full py-20 space-y-6">
      <h2 className="text-white  text-3xl font-extrabold md:text-4xl">
        Recent Work
      </h2>
      <div className="w-[85%] flex flex-col mx-auto space-y-20 items-center text-[#EFF6E0] lg:flex-row lg:items-baseline lg:space-x-16 lg:text-left lg:justify-center h-[100%] ">
        <div className="flex flex-col items-center gap-4 leading-relaxed justify-center max-w-md  lg:items-start">
          <img
            alt="noco"
            src={dog}
            className="w-[18rem] max-w-[25rem] mx-auto lg:mx-0 "
          />
          <div className="flex flex-col space-y-6 bg-[url('./images/noco-screenshot.png')] bg-black hover:bg-opacity-70 hover:bg-blend-overlay p-4  items-center justify-center w-1/1 h-[20rem] bg-center bg-cover group  rounded-lg hover:outline">
            <p className="max-w-sm md:max-w-md text-transparent group-hover:text-white">
              A website for veteran-owned pet door installation company based in
              Fort Collins, CO. We used React.js, Sass, and customized Bootstrap
              components to create this highly functional and brand-consistent
              design.
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col items-center gap-4 leading-relaxed justify-center max-w-md  lg:items-start ">
          <img
            alt="noco"
            src={guitar}
            className="w-[18rem] max-w-[18rem] mx-auto lg:mx-0 "
          />
          <div className="flex flex-col space-y-6 bg-[url('./images/classi-screenshot.png')] bg-black hover:bg-opacity-70 hover:bg-blend-overlay p-4  items-center justify-center w-1/1 h-[20rem] bg-center bg-cover group rounded-lg hover:outline">
            <p className="max-w-sm md:max-w-md z-100 text-transparent group-hover:text-white">
              A website for San Diego based music instruction company. We
              updated the clients previous CMS-built UI to a more modern and
              intuitive design. Uses modern React functionality including Hooks
              and render props.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col items-center gap-4 leading-relaxed justify-center max-w-md  lg:items-start">
          <img
            alt="noco"
            src={bread}
            className="w-[18rem] max-w-[18rem] mx-auto lg:mx-0"
          />
          <div className="flex flex-col space-y-6 bg-[url('./images/bread-loaf.jpg')] bg-black hover:bg-opacity-70 hover:bg-blend-overlay p-4  items-center justify-center w-1/1 h-[20rem] bg-center bg-cover group  rounded-lg hover:outline hover:outline">
            <p className="max-w-sm md:max-w-md text-transparent group-hover:text-white ">
              I'm already spreading the word about JustJunk. Cameron and Ryan
              were absolutely AWESOME! Professional, respectable, timely, fun,
              and man do those guys know how to work!!
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default OurWork;
