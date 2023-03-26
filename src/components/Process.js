import one from "../images/1-circle.svg";
import two from "../images/2-circle.svg";
import three from "../images/3-circle.svg";
import right from "../images/arrow-right.svg";

function Process() {
  return (
    <div className="flex flex-col bg-[#598392] py-24">
      <h2 className=" text-white  text-3xl font-extrabold md:text-4xl">
        Our Process
      </h2>
      <div className="flex items-center justify-center flex-col p-4 gap-4  md:flex-row md:items-start">
        <div className=" md:w-[30%] max-w-[18rem] space-y-4">
          <img alt="step1" src={one} className="w-[2.5rem] mx-auto my-3" />
          <p className="text-white">
            Conduct ideation sessions. Determine your needs in terms of design
            and function.
          </p>
        </div>
        <img
          alt="right-arrow"
          src={right}
          className="w-[2rem] mt-[4.6rem] hidden md:block mx-3 "
        />
        <div className=" md:w-[30%] max-w-[18rem] space-y-4">
          <img alt="step1" src={two} className="w-[2.5rem] mx-auto my-3" />

          <p className="text-white">
            Create a working prototype and test browser compatibility.
          </p>
        </div>{" "}
        <img
          alt="right-arrow"
          src={right}
          className="w-[2rem] mt-[4.6rem] hidden md:block mx-3 "
        />
        <div className="md:w-[30%]  max-w-[18rem] space-y-4">
          <img alt="step1" src={three} className="w-[2.5rem] mx-auto my-3" />
          <p className="text-white">
            Deploy the finished code. Update and Debug codebase.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
