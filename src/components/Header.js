import { Link } from "react-scroll";
import logo from "../devtails-logo3.png";

function Header() {
  return (
    <div className=" flex sticky top-0">
      <nav className="w-full flex flex-col justify-between items-center px-10 py-4 space-y-3 text-[#eff6e0] bg-[#01161E] bg-opacity-80 md:flex-row">
        <Link
          className="text-xl font-bold md:text-2xl md:font-extrabold lg:text-3xl logo uppercase cursor-pointer"
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img alt="logo" src={logo} className="w-[3.5rem] block md:w-20 " />
        </Link>
        <ul className="flex gap-10  items-center justify-center ">
          <li>
            <Link
              className="font-bold lg:text-xl cursor-pointer"
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="font-bold lg:text-xl cursor-pointer"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="font-bold lg:text-xl cursor-pointer "
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
