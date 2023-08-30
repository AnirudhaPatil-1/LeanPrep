import React from "react";

import Navbar from "../components/Navbar";
import Body from "../components/Body";
import blobLeft from '../assets/blobLeft.png';
import blobRight from '../assets/blobRight.png';

const LandingPage = () => {
  return (
    <>
      <img className="absolute z-1 left-0 top-0" src={blobLeft} alt='blob-left' />
      <img className="absolute z-1 bottom-0 right-0" src={blobRight} alt='blob-right'/>
      <Navbar />
      <Body />
    </>
  );
};

export default LandingPage;
