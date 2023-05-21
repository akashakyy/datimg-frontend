import React from 'react';
import './email.css';
import Header from '../Header/Header';

const Email = () => {
  return (
    <>
    <Header/>
      <div>
        <h1>My Email</h1>
        <p>
          Please enter your valid Email address. We will send you a 4-digit code
          to verify your account.
        </p>
      </div>

      <input className="email" type="text" />

      <div>
        <button className="email-continue">Continue</button>
      </div>
    </>
  )
}

export default Email