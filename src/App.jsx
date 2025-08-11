import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Subscriptions from './components/pages/Subscriptions'; 
import Contact from './components/pages/Contact'; 
import Login from './components/pages/Login';
import Ebook from './components/pages/Ebook-lib';
import { SignUp } from './components/pages/SignUp';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ebook-lib" element={<Ebook />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
