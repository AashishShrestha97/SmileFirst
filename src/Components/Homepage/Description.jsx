import React from "react";
import './Description.css';

const Description = () => {
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
        <button>Book Online</button>
      </div>
    </div>
  );
};

export default Description;
