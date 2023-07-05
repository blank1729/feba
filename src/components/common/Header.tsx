import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import OnAir from "./OnAir";

const Header = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  return (
    <header className="header py-4 relative shadow-sm border-b border-black">
      <div className="absolute w-full h-full z-20 bg-white"></div>

      {/* visible nav */}
      <div className="w-full flex justify-between items-center z-30">
        <div className="w-full flex items-center z-30 justify-between">
          {/* logo */}
          <div className="flex items-end gap-x-2">
            <Link to={"/"} className="flex gap-2 items-center">
              <img src="/logo.png" alt="febaonline logo" className="w-10" />
              <p className="text-2xl md:text-4xl font-semibold">FEBA</p>
            </Link>
          </div>

          {/* links base */}
          <div className="flex items-center gap-x-2 md:gap-x-4 lg:gap-x-6 ">
            <nav className="flex justify-between items-center gap-x-2 md:gap-x-4 lg:gap-x-6 text-lg">
              {/* home path */}
              {location.pathname !== "/" && <Link to={"/"}>Home</Link>}
              {/* className="border duration-300 transition-colors ease-in-out rounded-md md:hover:bg-purple-400 md:hover:text-white  border-purple-400 px-2 py-1" */}
              <Link to={"/donate"}>Donate</Link>
            </nav>
            <OnAir />
            <button onClick={() => setShow(!show)}>
              <Bars3Icon className="w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown nav */}
      <nav
        className="w-full absolute bg-white top-[75px] border-b border-black py-2 px-2 left-0 z-10
              duration-300 ease-in-out transition-all
               -translate-y-full
               md:px-16 lg:px-[20%] 
               grid gap-y-2. text-center md:justify-between md:flex text-lg"
        style={
          show
            ? {
                transform: "translateY(0px)",
              }
            : {}
        }
      >
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/bible"}
        >
          Bible
        </Link>
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/blog"}
        >
          Blog
        </Link>
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/videos"}
        >
          Videos
        </Link>
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/about"}
        >
          About
        </Link>
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/partners"}
        >
          Partners
        </Link>
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/contact"}
        >
          Contact Us
        </Link>
        <Link
          className="shadow-sm  py-2 duration-200 transition-all hover:scale-[1.02] hover:text-blue-400"
          to={"/donate"}
        >
          Donate
        </Link>
      </nav>
    </header>
  );
};

export default Header;
