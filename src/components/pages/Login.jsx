import React from 'react';
import './login.css';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiSignInFill } from "react-icons/pi";


function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="signin-icon"><PiSignInFill /></div>
        <div className="login-form">
          <h2>Sign in with email</h2>
          <p className='filler-text'>Lorem ipsum odor amet, consectetuer adipiscing elit. Diam finibus phasellus, augue habitant nibh porta.</p>
          <div className="input-box">
            <MdEmail className='icon'/>
            <input type="text" placeholder="Email" className='input'/>            
          </div>
          <div className="input-box">
            <FaLock className='icon'/>
            <input type="password" placeholder="Password" className='input'/>
          </div>
          
          <a href="/forgot-password" className="forgot-password-link">Forgot the password?</a>
          
          <button type="submit" className="login-button">Get Started</button>
          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-signin-button">
            <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google logo" />
            Sign in with Google
          </button>
          
          <p className="signup-link">
            Don't have an account? <a href="/SignUp">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
