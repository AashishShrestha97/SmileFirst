// AboutUs.js
import React from "react";
import UpperButton from "../Components/AboutUs/UpperButton.jsx";
import Information from "../Components/AboutUs/Information.jsx";
import Image from "../Components/AboutUs/Image.jsx";
import Navbar from "../Components/Navbar.jsx";

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <UpperButton />
            <Information />
            <Image />
        </div>
    );
};

export default AboutUs;
