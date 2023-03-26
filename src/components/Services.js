import brush from "../images/brush.svg";
import phone from "../images/phone.svg";
import upload from "../images/upload.svg";

function Services() {
  return (
    <div
      id="services"
      className="flex flex-col space-y-4 py-24   text-[#EFF6E0] "
    >
      <h2 className=" text-3xl font-extrabold md:text-4xl ">Services</h2>
      <div className="flex items-center justify-center flex-col p-4 gap-8  md:flex-row md:items-start ">
        <div className="  w-[18rem] ">
          <img alt="brush" src={brush} className="w-[2.5rem] mx-auto my-3" />
          <h3 className="font-extrabold">UI Design</h3>
          <p className="text-md mt-3">
            From initial ideation to mapping user journeys, to creating a
            wireframe.
          </p>
        </div>
        <div className="  w-[18rem] ">
          {" "}
          <img alt="brush" src={phone} className="w-[2.5rem] mx-auto my-3" />
          <h3 className="font-extrabold">Modern Developement</h3>
          <p className="text-md mt-3">
            We use React.js and various styling frameworks to turn form into
            function using mobile-first design.
          </p>
        </div>
        <div className=" s w-[18rem] ">
          {" "}
          <img alt="brush" src={upload} className="w-[2.5rem] mx-auto my-3" />
          <h3 className="font-extrabold">Deployment</h3>{" "}
          <p className="text-md mt-3">
            Upload your site to a server or a cloudhosting platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
