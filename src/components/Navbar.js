import React from "react";
import { Link } from "react-router-dom";
import VideoCamera from "../assets/video-camera.png";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-4">
      <div className="pl-[61px]">
        <Link to="/" className=" ">
          <img className="absolute top-5 left-10" src={Logo} alt="logo" />
        </Link>
      </div>
      <div>
        <ul className="flex justify-between items-center text-lg font-semibold">
          <li className="hover:text-blue-700">
            <Link className="mr-[61px]" to="/">
              About us
            </Link>
          </li>
          <li className="hover:text-blue-700">
            <Link className="mr-[61px]" to="/">
              Pricing
            </Link>
          </li>
          <li className="">
            <Link to="/">
              <div className="flex justify-evenly items-center mr-[61px]  border-2 rounded-2xl border-blue-700  px-5 text-blue-700
               hover:bg-blue-300 hover:text-white hover:border-blue-300">
                <p className="pr-1">Demo</p>
                <img className="hover:text-white" src={VideoCamera} alt="video camera" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
