import React, { useEffect, useState, useRef } from "react";
import "./otp.css";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Otp = () => {
  //OTP
  const [otp, setOtp] = useState("");
  let navigate = useNavigate();
  let [timer, setTimer] = useState(60);
  let [sendAgain, setSendAgain] = useState(false);
  let classNameOtp = "otp-input";
  let classNameOtpContainer = "otp-container";

  if(otp/1000 >= 1){
    console.log("otp filled");
    navigate('/landingProfile')
    //make api call
  }

  //TIMER
  useEffect(() => {
    if (timer == 0) {
      return setSendAgain(true);
    }
    if (timer > 0) {
      let timerInterval = setInterval(() => {
        timer = timer - 1;
        if (Math.floor(timer / 10) == 0) {
          timer = "0" + timer;
        }
        setTimer(timer);
      }, 1000);
      return () => {
        clearInterval(timerInterval);
      };
    } else {
      setTimer(0);
    }
  }, [timer]);


  return (
    <>
    <Header/>
      <h1 className="timer">{"00: " + timer}</h1>
      <p className="msg-text">Type the verification code we’ve sent you</p>
      <OtpInput
        value={otp}
        inputStyle={classNameOtp}
        containerStyle={classNameOtpContainer}
        onChange={setOtp}
        numInputs={4}
        inputType="number"
        renderSeparator={<span className="seperator"></span>}
        renderInput={(props) => <input {...props} />}
        shouldAutoFocus={true}
      />
      {sendAgain && <p onClick={() => navigate(0) } className="btn-send">Send again</p>}
    </>
  );
};

export default Otp;
