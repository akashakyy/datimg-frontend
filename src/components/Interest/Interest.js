import React from "react";
import "./interest.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InteresetData } from "../../constants";

const Interest = () => {
  const navigate = useNavigate();
  const [interest, setInterest] = useState([]);

  const handleOnClick = () => {
    navigate("/cards");
  };

  const addInterest = (ele) => {
    interest.push(ele.id);
    setInterest([...interest])
  };

  return (
    <>
      <Header />
      <p className="skip">Skip</p>
      <h1>Your interests</h1>
      <p>
        Select a few of your interests and let everyone know what you’re
        passionate about.
      </p>
      <div className="interest">
        <ul>
          {InteresetData.map((ele) => (
            <li
              onClick={() => addInterest(ele)}
              style={
                interest && interest.includes(ele.id)
                  ? { backgroundColor: "#E94057", color: "white" }
                  : {}
              }
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

export default Interest;
