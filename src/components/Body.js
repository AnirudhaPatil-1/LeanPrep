import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-col items-center mt-[150px]">
      <div className="w-[977px] h-36 text-center">
        <span className="text-neutral-600 text-4xl font-semibold">
          Don't let nerves get the best of you – <br />
        </span>
        <span className="font-poppins text-black text-4xl font-bold">
          practice makes perfect!
        </span>
      </div>
      <div className="w-[950px] h-32 text-center mb-12 text-zinc-600">
        <span className=" text-xl font-normal">Welcome to </span>
        <span className="text-black text-xl font-semibold">LeanPrep</span>
        <span className=" text-xl font-normal">
          ! The ultimate destination for honing your interview skills. Whether
          you're a fresh graduate, career changer, or seasoned professional,
          we've got you covered. Our{" "}
        </span>
        <span className="text-black text-xl font-semibold">
          comprehensive library
        </span>
        <span className=" text-xl font-normal">
          {" "}
          of mock interview questions and
        </span>
        <span className="text-black text-xl font-semibold"> expert tips</span>
        <span className=" text-xl font-normal"> will help you </span>
        <span className="text-black text-xl font-semibold">
          ace any job interview.{" "}
        </span>
      </div>

      <Link to="/signup">
        <button className="w-[413px]  flex text-center px-3 py-3 bg-blue-700 hover:bg-blue-800 transition  rounded-xl justify-center items-center text-white text-3xl       font-normal  mb-5">
          Join our Program
        </button>
      </Link>

      <div className=" w-72 h-8 text-center text-zinc-600 text-lg font-normal">
        {" "}
        <span>Already a member?</span>{" "}
        <Link to="/signin">
          {" "}
          <span className="w-24 h-6  text-center text-lg font-semibold underline text-indigo-600 ">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Body;
