import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../images/logo.png';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [isStuck, setIsStuck] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); 
  }
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  }
  // Use effect hook to check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isStuck ? 'is_stuck' : ''}`}>
      {/* Logo */}
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Logo"/>
          <span className="logo"><span className="bold">Mood</span> Reads</span>
        </div>
      </Link>
      <div  className="hamburger" onClick={handleHamburgerClick} >
        &#9776;
      </div>
      <div className={`close-icon ${isMobileMenuOpen ? "visible" : "invisible"}`}>
       
          <CloseIcon onClick={handleMobileMenuClick}/>
      
      </div>

      {/* Navigation Bar */}
      <nav className={`nav-bar ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
        <span onClick={handleMobileMenuClick}>
          <Link to="/Subscriptions" className="nav-link underline">Subscription Plans</Link>
        </span>
        
        <span onClick={handleMobileMenuClick}>
          <Link to="/Blog" className="nav-link underline">Blog</Link>
        </span>
     
        <span onClick={handleMobileMenuClick}>
          <Link to="/Ebook-lib" className="nav-link underline">E-Book Library</Link>
        </span>

       {!isMobileMenuOpen && (
         <span onClick={handleMobileMenuClick} className='logon-options'>
          <Link to="/SignUp" className="nav-link"><button className='logon-button'>Sign-Up</button></Link>
          <Link to="/Login" className="nav-link"><button className='logon-button'>Log-in</button></Link>
        </span>
       )}
       {isMobileMenuOpen && (
         <span onClick={handleMobileMenuClick}>
          <Link to="/" className="nav-link">How it works</Link>
        </span>
       )}

        

        {/* Sign Up and Sign In Buttons */}
        {isMobileMenuOpen && (
          <div className="auth-buttons">
           
              <a href="/login" className="auth-button sign-up">Sign Up</a>
         
              <div className="login-container">
                  <span style={{ color: "#C57B57" }}>Already a member?</span>
                  <a href="/login" className="auth-button login">Sign In</a>
              </div>
          </div>
      )}

    
     
      </nav>
    </header>
  );
}

export default NavBar;
