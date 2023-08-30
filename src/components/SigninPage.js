import React from 'react';
import {Link} from 'react-router-dom';


import LinkedinIcon from '../assets/linkedinLogo.png';
import FacebookIcon from '../assets/facebookLogo.png';
import GoogleIcon from '../assets/googleLogo.png';
import AuthContainer from './AuthContainer';

const SigninPage = () => {

  return (
    <AuthContainer>
      <div className="signupPage relative border lg:w-[450px] lg:min-h-[700px]   bg-white shadow-2xl rounded-2xl px-5 pt-5  text-zinc-400 font-medium relative  ">
        <h1 className='text-4xl mt-2 mb-8 text-black font-medium'>Sign in</h1>
        <p className='text-lg font-medium  mb-5 text-zinc-600 '>New to LeanPrep? <span className='text-indigo-600 font-medium text-lg underline'><Link to='/signup'>Signup</Link></span></p>

        <label className='block' htmlFor='email' >Email Address</label>
        <input className='input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black mb-5' type='email' id='email'/>


        <label className='block' htmlFor='password'>Password</label>
        <input className='input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black mb-14' type='password' id='password'/> 

        <Link to='/thank-you'>
          <button className='bg-blue-700 hover:bg-blue-800 transition text-white w-full mb-2 h-9  rounded-lg'>Continue</button>  
        </Link>
        <p className='text-center  text-xl mb-2'>or</p>

        <div className='flex  border-2 h-9  rounded-lg justify-center items-center mb-4 cursor-pointer  '>
          <img className=' h-6 mr-2' src={FacebookIcon} alt='facebook logo'/> 
          <p>Sign Up with <span className='font-medium'>Facebook</span></p>
        </div>
        <div className='flex border-2 h-9  rounded-lg justify-center items-center mb-4  cursor-pointer '>
          <img className='h-6 mr-2'  src={GoogleIcon} alt='google logo'/> 
          <p>Sign Up with <span className='font-medium'>Google</span></p>
        </div>
        <div className=' flex border-2 h-9  rounded-lg justify-center items-center mb-4 cursor-pointer '>
          <img className='h-6 mr-2' src={LinkedinIcon} alt='linkedin logo'/> 
          <p>Sign Up with <span className='font-medium'>Linkedin</span></p>
        </div>
        <p className=' absolute bottom-0 left-0 right-0 text-center  text-sm mb-1'>By signing up, you agree to our <span className='underline font-semibold'>Terms and Conditions</span></p>
      </div>
      </AuthContainer>
  )
}

export default SigninPage;