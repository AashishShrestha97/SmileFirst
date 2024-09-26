// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Services from "./Pages/Services.jsx";
import Gallery from "./Pages/Gallery.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Description from "./Components/Homepage/Description.jsx";
import Schedule from "./Components/Homepage/Schedule.jsx";
import Footer from "./Components/Footer.jsx";
import './Components/Navbar.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
                <Navbar />
            <Description />
            <Schedule />
            <Footer />
          </>
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
