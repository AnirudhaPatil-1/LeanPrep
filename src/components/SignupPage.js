import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import LinkedinIcon from "../assets/linkedinLogo.png";
import AuthContainer from "./AuthContainer";

const SignupPage = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form submitted", data);
    if(Object.keys(errors).length === 0){
      navigate("/signup-details")
    } ;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthContainer>
        <div className="signupPage relative border lg:w-[450px] lg:h-[700px]  bg-white shadow-2xl rounded-2xl px-5 pt-5  text-zinc-400 font-medium  ">
          <h1 className="text-4xl mt-2 mb-8 text-black font-medium">Sign Up</h1>
          <p className="text-lg font-medium  mb-5 text-zinc-600 ">
            Already a member?{" "}
            <span className="text-indigo-600 font-medium text-lg underline">
              <Link to="/signin">Login</Link>
            </span>
          </p>

          <div className="flex justify-between gap-3 items-center mb-5 ">
            <div className="">
              <label className=" block text-start " htmlFor="firstName">
                First Name
              </label>
              <input
                className="input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black "
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First Name is required",
                    maxLength: 80,
                  },
                })}
              />
              <p className="text-red-500 text-xs font-normal ">{errors.firstName?.message}</p>
            </div>
            <div className="">
              <label className="block text-start " htmlFor="lastName">
                Last Name
              </label>
              <input
                className="input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black "
                type="text"
                id="lastName"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last Name is required",
                    maxLength: 80,
                  },
                })}
              />
              <p className="error text-red-500 text-xs font-normal">{errors.lastName?.message}</p>
            </div>
          </div>

          <label className="block" htmlFor="email">
            Email Address
          </label>
          <input
            className="input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black "
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern:{
                value: /^\S+@\S+$/i,
                message: "Please use valid email address",
              },
            })}
          />
          <p className="error text-red-500 text-xs font-normal mb-5">{errors.email?.message}</p>

          <label className="block" htmlFor="jobRole">
            Current Job Title
          </label>
          <select
            className="input-field border-2 h-9 w-full rounded-lg px-3 text-black mb-5 cursor-pointer"
            id="jobRole"
          >
            <option className="text-zinc-400" select disabled value="">
              Select
            </option>
            <option value="project-manager">Project Manager</option>
            <option value="software-engineer">Software Engineer</option>
            <option value="data-scientist">Data Scientist</option>
            <option value="ux-ui-designer">UX/UI Designer</option>
            <option value="graphic-designer">Graphic Designer</option>
            <option value="marketing-manager">Marketing Manager</option>
            <option value="sales-representative">Sales Representative</option>
            <option value="frontend-developer">Frontend Developer</option>
            <option value="backend-developer">Backend Developer</option>
          </select>

          <label className="block" htmlFor="password">
            Set Password
          </label>
          <input
            className="input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black"
            type="password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, and one number",
              },
            })}
          />
            <p className="text-red-500 text-xs font-normal mb-14">{errors.password?.message}</p>

          
            
            <button type="submit"
              className="bg-blue-700 hover:bg-blue-800 transition text-white w-full mb-2 h-9  rounded-lg"
            >Next
            </button>
            
          <p className="text-center  text-xl mb-2">or</p>

          <div className=" flex border-2 h-9  rounded-lg justify-center items-center cursor-pointer ">
            <img className="h-6 mr-2" src={LinkedinIcon} alt="linkedin logo" />
            <p>
              Sign Up with <span className="font-medium">Linkedin</span>
            </p>
          </div>

          <p className=" absolute bottom-0 left-0 right-0 text-center  text-sm mb-1">
            By signing up, you agree to our{" "}
            <span className="underline font-bold">Terms and Conditions</span>
          </p>
        </div>
      </AuthContainer>
    </form>
  );
};

export default SignupPage;
