import React, { useState } from "react";
import "./email.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
axios.defaults.baseURL = API_URL;

const Email = () => {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  const handleClick = async () => {
    if (!email) {
      toast("Invalid email provided");
      return;
    }

    const payload = {
      email: email,
    };

    try {
      let data = await axios({
        method: "post",
        url: "/auth/otp",
        data: payload, // you are sending body instead
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (data.status == 200) {
        return navigate("/otp", { replace: true, state: {email:email} });
      }
    } catch (error) {
      toast("Internal Error");
    }
  };
  return (
    <>
      <Header />
      <div>
        <h1>My Email</h1>
        <p>
          Please enter your valid Email address. We will send you a 4-digit code
          to verify your account.
        </p>
      </div>

      <input
        onChange={(e) => setEmail(e.target.value)}
        className="email"
        type="email"
      />

      <div>
        <button onClick={() => handleClick()} className="email-continue">
          Continue
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Email;
