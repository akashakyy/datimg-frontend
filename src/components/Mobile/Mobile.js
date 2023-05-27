import React from "react";
import "./mobile.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const Mobile = () => {
  let navigate = useNavigate();
  const handleClick = () =>{
    //api call
    return navigate('/otp');
  }
  return (
    <>
      <Header />
      <div>
        <h1>My Mobile</h1>
        <p>
          Please enter your valid phone number. We will send you a 4-digit code
          to verify your account.
        </p>
      </div>

      <input className="mobile-number" type="number" />

      <div>
        <button  onClick={() =>handleClick()} className="mobile-continue">Continue</button>
      </div>
    </>
  );
};

export default Mobile;
