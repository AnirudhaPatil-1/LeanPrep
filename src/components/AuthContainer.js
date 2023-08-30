import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../assets/Logo.png';


const AuthContainer = ({children}) =>{

    return (
        <div className=" w-100 h-screen flex justify-center items-center bg-[#F0F1FF]">
            <Link to="/" className=" ">
                <img className="absolute top-5 left-10" src={Logo} alt="logo" />
            </Link>   
            {children} 
        </div>
    )
}

export default AuthContainer;
