import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import Header from '../Header/Header';
const Landing = () => {
  return (
    <>
    <Header/>
      <img
        alt="app-logo"
        src="https://img.freepik.com/premium-vector/love-chat-logo-icon-vector-isolated_717577-95.jpg"
        className="app-logo"
      />
      <span className="sign-up-title">Sign up to continue</span>
      <Link to='/email'> <button className="continue-btn">Continue with Email</button> </Link>
      <Link to='/mobile'><button className="continue-btn-mobile">Use phone number</button></Link>
      <span className="landing-description">or sign up with</span>

      <span className="fb">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.4544 0H1.54562C0.692143 0.000344911 0.000344911 0.692143 0 1.54562V26.4544C0.000344911 27.3079 0.692143 27.9997 1.54562 28H14V17H10.6531V13H14V9.8125C14 6.19625 16.5081 4.2275 19.7388 4.2275C21.2844 4.2275 22.9469 4.34375 23.3331 4.395V8.17188H20.7594C19.0019 8.17188 18.6669 9.00312 18.6669 10.2281V13H22.8544L22.3075 17H18.6669V28H26.4544C27.3079 27.9997 27.9997 27.3079 28 26.4544V1.54562C27.9997 0.692143 27.3079 0.000344911 26.4544 0Z"
            fill="#E94057"
          />
        </svg>
      </span>
      <span className="google">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
           fillRule="evenodd"
            clipRule="evenodd"
            d="M27.5725 11.8425L27.4312 11.2431H14.4038V16.7569H22.1875C21.3794 20.5944 17.6294 22.6144 14.5662 22.6144C12.3375 22.6144 9.98812 21.6769 8.43312 20.17C6.77617 18.5387 5.83623 16.3152 5.82062 13.99C5.82062 11.6675 6.86438 9.34437 8.38313 7.81625C9.90188 6.28812 12.1956 5.43313 14.4762 5.43313C17.0881 5.43313 18.96 6.82 19.66 7.4525L23.5781 3.555C22.4288 2.545 19.2713 0 14.35 0V0C10.5531 0 6.9125 1.45438 4.25125 4.10687C1.625 6.71875 0.265625 10.4956 0.265625 14C0.265625 17.5044 1.55187 21.0925 4.09687 23.725C6.81625 26.5325 10.6675 28 14.6331 28C18.2413 28 21.6612 26.5862 24.0987 24.0212C26.495 21.4962 27.7344 18.0025 27.7344 14.34C27.7344 12.7981 27.5794 11.8825 27.5725 11.8425Z"
            fill="#E94057"
          />
        </svg>
      </span>
      <span className="ios">
      <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
           fillRule="evenodd"
            clipRule="evenodd"
            d="M26.4544 0H1.54562C0.692143 0.000344911 0.000344911 0.692143 0 1.54562V26.4544C0.000344911 27.3079 0.692143 27.9997 1.54562 28H14V17H10.6531V13H14V9.8125C14 6.19625 16.5081 4.2275 19.7388 4.2275C21.2844 4.2275 22.9469 4.34375 23.3331 4.395V8.17188H20.7594C19.0019 8.17188 18.6669 9.00312 18.6669 10.2281V13H22.8544L22.3075 17H18.6669V28H26.4544C27.3079 27.9997 27.9997 27.3079 28 26.4544V1.54562C27.9997 0.692143 27.3079 0.000344911 26.4544 0Z"
            fill="#E94057"
          />
        </svg>
      </span>

      <p className="terms">Terms of use</p>
      <p className="privacy">Privacy Policy</p>
    </>
  );
};

export default Landing;
