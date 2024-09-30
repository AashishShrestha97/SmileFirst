// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./Pages/AboutUs.jsx";
import Services from "./Pages/Services.jsx";
import Gallery from "./Pages/Gallery.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import './Components/Navbar.css';
import HomePage from "./Pages/HomePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <HomePage/>
        } />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
