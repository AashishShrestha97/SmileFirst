// Footer.jsx
import React from "react";
import '../Components/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div id="footer-box">
        <div id="contact">
          <h3>Reach Us at:</h3>
          <div id="icons">
            <ul>
              <li>
                <img
                  src="281830_phone_circle_mobile_communication_call_icon.png"
                  alt="Phone Icon"
                />
                01-4360073
              </li>
              <li>
                <img
                  src="5296499_fb_facebook_facebook logo_icon.png"
                  alt="Facebook Icon"
                />
                Smiles First Dental Clinic
              </li>
              <li>
                <img
                  src="4202011_email_gmail_mail_logo_social_icon.png"
                  alt="Email Icon"
                />
                smile.first2021@gmail.com
              </li>
              <li>
                <img
                  src="5172573_location_map_icon.png"
                  alt="Location Icon"
                />
                Khusibu, link road, Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>
        <div id="location">
          <h3>Find Us Easily:</h3>
          <img
            src="Screenshot 2024-06-10 140350.png"
            alt="Map Location of Smile First Dental Clinic"
          />
          <a
            href="https://maps.app.goo.gl/b7REQGkHUtDqDp1A6"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://maps.app.goo.gl/b7REQGkHUtDqDp1A6
          </a>
        </div>
        <div id="facebook">
          <h3>Find Us On Facebook:</h3>
          <div className="facebook-card">
            <div className="facebook-thumbnail">
              <img
                src="365297652_342590651424256_8136084921580004444_n.jpg"
                alt="Facebook Thumbnail of Smiles First Dental Clinic"
              />
            </div>
            <div className="facebook-info">
              <h4>Smiles First Dental Clinic | Kathmandu</h4>
              <p>Smiles First Dental Clinic, Kathmandu, Nepal. 187 likes...</p>
              <a
                href="https://www.facebook.com/people/Smiles-First-Dental-Clinic/100070199711179/"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-bottom">
        <p>Copyright © 2024 Smile First. All Rights Reserved. Developed.</p>
      </div>
    </footer>
  );
};

export default Footer;
