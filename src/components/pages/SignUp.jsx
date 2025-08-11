import React, { useEffect } from 'react';
import './login.css';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiUserFill } from "react-icons/pi";

export const SignUp = () => {
  useEffect(() => {
    /* Initialize Google Sign-In */
    window.google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google Client ID
      callback: handleGoogleSignIn,
    });

    window.google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      {
        theme: 'outline',
        size: 'large',
      }
    );
  }, []);

  const handleGoogleSignIn = (response) => {
    console.log('Encoded JWT ID token: ' + response.credential);
    // Handle Google Sign-In logic here
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="signin-icon"><PiUserFill /></div>
        <div className="login-form">
          <h2>Create an Account</h2>
          <p className="filler-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam finibus phasellus, augue habitant nibh porta.
          </p>

          <div className="input-box">
            <PiUserFill className="icon" />
            <input type="text" placeholder="Create a username." className="input" />
          </div>

          <div className="input-box">
            <MdEmail className="icon" />
            <input type="email" placeholder="Enter your email." className="input" />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="Create your password." className="input" />
          </div>

          <button type="submit" className="login-button">Sign Up</button>

          <div className="divider">
            <span>OR</span>
          </div>

          <div id="google-signin-button" className="google-signin-button"></div>

          <p className="signup-link">
            Already have an account? <a href="/Login">Log in here</a>
          </p>
        </div>
      </div>
    </div>
  );
};
