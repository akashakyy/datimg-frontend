import React from "react";
import Header from "../Header/Header";
import "./gender.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { gender } from "../../constants";

const Gender = () => {
  const navigate = useNavigate();
  const [selectedGenderId, setGenderId] = useState(0);
  const selectGender = (ele) => {
    setGenderId(ele.id);
  };

  const handleOnClick = () => {
    navigate("/interest");
  };

  return (
    <>
      <Header />
      <p className="skip">Skip</p>
      <h1 className="yourself">I am a</h1>
      <div className="gender">
        <ul>
          {gender.map((ele) => (
            <li
              style={
                ele.id == selectedGenderId
                  ? { backgroundColor: "#E94057", color: "white" }
                  : {}
              }
              onClick={() => selectGender(ele)}
              key={ele.id}
            >
              {ele.label}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => handleOnClick()} className="continue">
        Continue
      </button>
    </>
  );
};

export default Gender;
