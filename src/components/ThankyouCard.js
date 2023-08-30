import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AuthContainer from "./AuthContainer";

const ThankyouCard = () => {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "/";
    }, 4000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <AuthContainer>
      <div className="signupPage border lg:w-[450px] lg:min-h-[700px] bg-white shadow-2xl rounded-2xl px-5 pt-5  text-zinc-400 font-medium relative ">
        <h1 className=" text-center text-4xl mt-2 mb-8 text-black font-medium leading-tight">
          Thank you for Signing In!
        </h1>
        <p className=" text-center text-lg text-zinc-600 mb-8">
          We appreciate your interaction with us.
        </p>
        <p className=" text-center text-lg text-zinc-600 mb-8">
            Your support means a lot to us.
        </p>
        <p className=" text-center text-lg font-medium  mb-5 text-zinc-600 ">
          Redirecting to{" "}
          <span className="text-indigo-600 font-medium text-lg underline">
            <Link to="/">Home Page</Link>
          </span>
        </p>
      </div>
    </AuthContainer>
  );
};

export default ThankyouCard;
