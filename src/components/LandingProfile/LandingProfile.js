import React from "react";
import "./landingProfile.css";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../Header/Header";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";


const LandingProfile = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
  );
  const [dateValue, setDateValue] = useState(new Date());
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [dateLabel, setDateLabel] = useState("Choose birthday");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleCalendarClick = () => {
    setCalendarOpen(true);
  };

function handleFormSubmit(e){
  e.preventDefault()
  navigate('/gender');
}
  return (
    <>
      <Header />
      <p className="skip">Skip</p>
      <p className="profile">Profile details</p>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="camera-container">
          <label htmlFor="profile-img">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 6.14539C7.48 6.14539 6.992 6.33962 6.616 6.70477C6.248 7.06215 6.048 7.53607 6.056 8.02553V8.0333C6.056 8.53829 6.256 9.01221 6.624 9.36959C6.992 9.72697 7.48 9.9212 8 9.9212C9.072 9.9212 9.936 9.07436 9.944 8.0333C9.944 7.5283 9.744 7.05438 9.376 6.697C9.008 6.33962 8.52 6.14539 8 6.14539ZM12.488 6.19978C12.088 6.19978 11.768 5.88901 11.768 5.50056C11.768 5.1121 12.088 4.79356 12.488 4.79356C12.888 4.79356 13.216 5.1121 13.216 5.50056C13.216 5.88901 12.888 6.19978 12.488 6.19978ZM10.216 10.1931C9.648 10.7447 8.864 11.0866 8 11.0866C7.16 11.0866 6.376 10.768 5.776 10.1931C5.184 9.61043 4.856 8.84906 4.856 8.0333C4.848 7.22531 5.176 6.46393 5.768 5.88124C6.368 5.29856 7.16 4.98002 8 4.98002C8.84 4.98002 9.632 5.29856 10.224 5.87347C10.816 6.45616 11.144 7.22531 11.144 8.0333C11.136 8.88013 10.784 9.64151 10.216 10.1931ZM12.512 2.61043C12.44 2.61043 12.384 2.57159 12.352 2.5172L12.272 2.34628C12.056 1.90344 11.808 1.39068 11.656 1.09545C11.288 0.396226 10.656 0.00776915 9.88 0H6.112C5.336 0.00776915 4.712 0.396226 4.344 1.09545C4.184 1.40622 3.912 1.96559 3.688 2.42397L3.64 2.5172C3.616 2.57936 3.552 2.61043 3.488 2.61043C1.56 2.61043 0 4.13319 0 5.99778V10.6127C0 12.4772 1.56 14 3.488 14H12.512C14.432 14 16 12.4772 16 10.6127V5.99778C16 4.13319 14.432 2.61043 12.512 2.61043Z"
                fill="white"
              />
            </svg>
          </label>
          <input
            id="profile-img"
            type="file"
            onChange={onImageChange}
            className="filetype"
          />
        </div>
        <img className="image-preview" alt="preview image" src={image} />

        <div className="input-container">
          <label className="input-label" htmlFor="fname">
            First name
          </label>
          <br />
          <input className="input-box" type="text" id="fname" name="fname" />
          <br />
          <br />
          <label className="input-label" htmlFor="lname">
            Last name
          </label>
          <br />
          <input className="input-box" type="text" id="lname" name="lname" />
          <br />
          <br />
          {!isCalendarOpen && (
            <div className="calendar-btn" onClick={() => handleCalendarClick()}>
              <img src="https://static.vecteezy.com/system/resources/previews/005/988/959/non_2x/calendar-icon-free-vector.jpg" />
              <label htmlFor="fname">{dateLabel}</label>
            </div>
          )}
        </div>

        {isCalendarOpen && (
          <Calendar
            className="calendar"
            value={dateValue}
            // minDate={moment().subtract(18, "years").format('DD-MM-YYYY')}
            onClickDay={(value, event) => {
              console.log(new Date())
              value = moment(value).format('DD/MM/YYYY');
              setDateLabel(value);
              setCalendarOpen(false);
            }}
          />
        )}

        {!isCalendarOpen && <button className="confirm-btn">Confirm</button>}
      </form>
    </>
  );
};

export default LandingProfile;
