import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./components/SignupPage";
import SigninPage from "./components/SigninPage";
import SignupDetailsPage from "./components/SignupDetailsPage";
import ThankyouCard from "./components/ThankyouCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup-details" element={<SignupDetailsPage />} />
        <Route path="/thank-you" element={<ThankyouCard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
