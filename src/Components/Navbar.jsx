import React  from "react";
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <nav id="navbox">
        <div id="logo">
          <img src="SF PNG Final.png" alt="error" />
        </div>
        <div id="info">
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About us</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/ContactUs">Contact Us</Link>
        </div>
      </nav>
    )
}

export default Navbar;