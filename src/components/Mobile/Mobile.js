import React from "react";
import "./mobile.css";
import Header from "../Header/Header";

const Mobile = () => {
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
        <button className="mobile-continue">Continue</button>
      </div>
    </>
  );
};

export default Mobile;
