import React from 'react';
import './pages.css';
import placeholderImage from '../images/placeholder.png';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleChoosePlan = () => {
    navigate('/Subscriptions');
  };

  return (
    <div>
      <div className="welcome">
        <h1 className="welcome-title">Welcome to </h1>
        <h2>Mood <span className="bold">Reads</span></h2>
        <p>A new way to read your favorite books</p>
      </div>
      <div className="how-it-works">
        <div className="how-it-works-container">
          <div className="image-container">
            <img src={placeholderImage} alt="How it works illustration" />
          </div>
          <div className="text-container">
            <h3>How it works</h3>
            <p className="filler-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="how-it-works-two">
        <div className="how-it-works-container">
          <div className="text-container">
            <h3>How it works</h3>
            <p className="filler-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="image-container">
            <img src={placeholderImage} alt="How it works illustration" />
          </div>
        </div>
      </div>
      <div className="subscriptions">
      <h3 className="subscriptions-title">Subscription Plans</h3>
        <div className="subscription-container">
        <div className="card preview1">
            <h4>Basic Plan</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>10 books per month</p>
            <p><strong>$5/month</strong></p>
            <button className="choose-plan-button" onClick={handleChoosePlan}>
              Choose Plan
            </button>
          </div>
          <div className="card preview2">
            <h4>Standard Plan</h4>
            <p>Praesent sapien massa, convallis a pellentesque nec.</p>
            <p>50 books per month</p>
            <p><strong>$15/month</strong></p>
            <button className="choose-plan-button" onClick={handleChoosePlan}>
              Choose Plan
            </button>
          </div>
          <div className="card preview3">
            <h4>Premium Plan</h4>
            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
            <p>Unlimited books</p>
            <p><strong>$30/month</strong></p>
            <button className="choose-plan-button" onClick={handleChoosePlan}>
              Choose Plan
            </button>
          </div>
        </div>
      </div>
      <div className="contact-us">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
