import React from "react";
import './Information.css';

const Information = () => {
  return (
    <div className="info-container">
      <div className="top-section">
        <div className="text-left">
          <p>
            Welcome to Smile First Dental Clinic, your premier destination for
            top-tier dental care and unrivaled patient satisfaction. Established
            in 2021, our state-of-the-art practice is committed to setting a new
            standard in oral health excellence. Despite our recent inception, our
            dedication to providing exceptional service has already garnered rave
            reviews from our valued patients.
          </p><br />
          <p>
            At Smile First, we believe in prioritizing not only your dental needs
            but also your overall comfort and well-being. From the moment you step
            into our modern and inviting clinic, you'll be greeted by a team of
            compassionate professionals dedicated to making your dental experience
            as positive and stress-free as possible.
          </p>
        </div>

        <div className="image-right">
          <img src="Clinic.jpg" alt="Clinic" className="clinic-image" />
        </div>
      </div>

      <div className="bottom-section">
        <p>
          Our newly founded dental lab boasts cutting-edge technology and a skilled
          team of technicians, allowing us to deliver precision-crafted restorations
          and customized solutions tailored to your unique smile. Whether you're
          seeking routine cleanings, cosmetic enhancements, or complex dental
          procedures, you can trust Smile First Dental Clinic to provide the highest
          quality of care with a personal touch. <br />
          Join our growing family of satisfied patients and experience the difference that exceptional dentistry
          can make. Schedule your appointment with Smile First today, and let us help you achieve the smile of
          your dreams.
        </p>
      </div>
    </div>
  );
};

export default Information;
