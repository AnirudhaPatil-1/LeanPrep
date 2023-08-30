import React from "react";
import { Link } from "react-router-dom";

import LinkedinIcon from "../assets/linkedinLogo.png";
import DateSelector from "./DateSelector";
import AuthContainer from './AuthContainer';

const SignupDetailsPage = () => {
  return (
    <AuthContainer>
      <div className="signupPage border lg:w-[450px] lg:min-h-[700px] h-auto  bg-white shadow-2xl rounded-2xl px-5 pt-5 text-zinc-400 font-medium relative  ">
        <h1 className="text-4xl mt-2 mb-8 text-black font-medium">
          Personal Details
        </h1>
        <p className="text-sm font-medium text-gray-600 mb-5 ">
          We need a few more details to complete the sign up process{" "}
        </p>

        <label className="block" htmlFor="languagePreference ">
          Language Preference
        </label>
        <select
          className="input-field border-2 h-9 w-full rounded-lg px-3 mt-1  text-black mb-5 cursor-pointer"
          id="jobRole"
        >
          <option className="text-zinc-400" selected disabled value="">
            Select
          </option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Chinese">Chinese</option>
          <option value="French">French</option>
          <option value="Russian">Russian</option>
          <option value="Japanese">Japanese</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Italian">Italian</option>
          <option value="Arabic">Arabic</option>
          <option value="Spanish">Spanish</option>
        </select>

        <label className="block " htmlFor="email">
          Birth Date
        </label>
        {/* <input className='input-field border-2 h-9 w-full rounded-lg px-3   text-black mb-5' type='email' id='email'/> */}
        <div className="container  mb-5">
          <DateSelector />
        </div>

        <label className="block" htmlFor="jobRole">
          Target Job/Industry
        </label>
        <select
          className="input-field border-2 h-9 w-full rounded-lg px-3  text-black mb-5 cursor-pointer"
          id="jobRole"
        >
          <option className="text-zinc-400" disabled selected value="">
            Select
          </option>
          <option value="Software Development">Software Development</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Digital Marketing:">Digital Marketing:</option>
          <option value="Finance">Finance</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Data Science">Data Science</option>
        </select>

        <label className="block" htmlFor="jobRole">
          Education Level
        </label>
        <select
          className="input-field border-2  h-9 w-full rounded-lg px-3 text-black mb-5 cursor-pointer"
          id="educationLevel"
          placeholder="Select"
        >
          <option className="text-zinc-400" selected disabled value="">
            Select
          </option>
          <option value="high-school">High School</option>
          <option value="diploma">Diploma</option>
          <option value="associate-degree">Associate Degree</option>
          <option value="bachelor-degree">Bachelor's Degree</option>
          <option value="master-degree">Master's Degree</option>
          <option value="doctoral-degree">Doctoral Degree</option>
        </select>

        
        <label className="block mb-5" htmlFor="jobRole">
          Preferred Interview mode
        </label>
        <div className="radio-list flex  justify-between items-center text-gray-400 mb-5 ">
          <div className="group">
            <input
              className="mr-2 "
              type="radio"
              id="interviewee cursor-pointer"
              name="interview-mode"
            />
            <label className="   " htmlFor="interviewee">
              Interviewee
            </label>
          </div>
          <div className="">
            <input
              className="mr-2"
              type="radio"
              id="Interviewer"
              name="interview-mode"
            />
            <label className="" htmlFor="Interviewer">
              Interviewer
            </label>
          </div>
          <div className="">
            <input
              className="mr-2"
              type="radio"
              id="Hybrid-mode"
              name="interview-mode"
            />
            <label className="" htmlFor="Hybrid-mode">
              Hybrid mode
            </label>
          </div>
        </div>

        <Link to='/signin'>
          <button className="bg-blue-700 hover:bg-blue-800 transition text-white w-full mb-2 h-9  rounded-lg">
            Sign up
          </button>
        </Link>
        <p className="text-center  text-xl mb-2">or</p>

        <div className=" flex border-2 h-9  rounded-lg justify-center items-center mb-10 cursor-pointer ">
          <img className="h-6 mr-2" src={LinkedinIcon} alt="linkedin logo" />
          <p>
            Sign Up with <span className="font-medium">Linkedin</span>
          </p>
        </div>

        <p className=" absolute bottom-0 left-0 right-0 text-center  text-sm mb-1 ">
          By signing up, you agree to our{" "}
          <span className="underline font-bold">Terms and Conditions</span>
        </p>
      </div>
    </AuthContainer>
  );
};

export default SignupDetailsPage;
