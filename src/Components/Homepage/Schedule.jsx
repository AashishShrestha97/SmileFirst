import React from "react";
import './Schedule.css';

const Schedule = () => {
  return (
    <div>
      <div id="box1">
        <h1>Schedule your first visit</h1>
        <br />
        <p>
          As a fee-for-service practice, we offer easy payment plans to fit your
          budget. Experience exceptional dental care at <br />
          Smile First Dental Clinic. Schedule your first visit now! Call or book
          online for personalized treatment.
        </p>
        <div id="btn2">
          <button>Schedule Your Visit</button>
        </div>
      </div>
      <div id="box2">
        <div id="inner-box">
          <div className="video-card">
            <div className="video-thumbnail">
              <iframe
                src="https://www.youtube.com/embed/lw7xIB0kPCo"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Dental Ad Video"
              ></iframe>
            </div>
            <div className="video-info">
              <h3>Dental Ad Video Template (Editable)</h3>
              <p className="source">YouTube</p>
            </div>
          </div>
        </div>
        <p>
          At Smile First Dental Clinic, we believe in delivering more than just
          exceptional dental care – we're dedicated to crafting brighter,
          healthier smiles that inspire confidence. Our skilled team combines
          state-of-the-art technology with compassionate expertise to ensure
          every patient receives personalized treatment tailored to their unique
          needs. From routine check-ups to advanced procedures, trust Smile
          First to prioritize your oral health and leave you smiling from ear to
          ear. Discover the difference at Smile First Dental Clinic today.
        </p>
      </div>
    </div>
  );
};

export default Schedule;
