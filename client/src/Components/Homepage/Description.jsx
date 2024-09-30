import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import './Description.css';

const Description = () => {
  const navigate = useNavigate(); // Create a navigate instance

  // Function to handle button click
  const handleClick = () => {
    navigate("/ContactUs"); // This redirects to the Contact Us page
  };

  return (
    <div>
      <div id="img1">
        <img src="dentist final.png" alt="error" />
      </div>
      <div id="img2">
        <img src="teeth 1.jpg" alt="error" />
      </div>
      <div id="img3">
        <img src="teeth.png" alt="error" />
      </div>
      <div id="img4">
        <img src="smile.png" alt="error" />
      </div>
      <div id="msg">
        <p>
          Your <span id="red-text">Smile</span>, <br />
          Our Passion.
        </p>
      </div>
      <div id="btn1">
        <button onClick={handleClick}>Book Online</button> {/* Add onClick */}
      </div>
    </div>
  );
};

export default Description;
