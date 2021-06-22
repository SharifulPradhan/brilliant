import React from 'react';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className="fixed-top bg-white">
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>

          <div className="navbar-nav">
            <a className="nav-item nav-link ms-5" href="/">TODAY</a>
            <a className="nav-item nav-link active ms-5" href="/">COURSES</a>
            <a className="nav-item nav-link ms-5" href="/">PRACTICE</a>
          </div>
          <button className="btn-tranparent">Login</button>
          <button className="btn-blue">Sign up</button>
        </nav>

      </div>
    </div>
  );
};

export default Header;