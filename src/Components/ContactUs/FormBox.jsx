import React from "react";
import '../ContactUs/FormBox.css';

const FormBox = () => {
    return (
        <div id="container"> {/* Wrapping the two main divs in a container */}
            <div id="mainbox">
                <div id="map">
                    <img
                        src="Group 8.png"
                        alt="Map Location of Smile First Dental Clinic"
                    />
                </div>
                <div id="form">
                    <h2>Write to us</h2>
                    <form action="">
                        <div className="input-group">
                            <img src="Name.png" alt="Name" />
                            <input id="Name" type="text" placeholder="Name" />
                        </div>
                        <div className="input-group">
                            <img src="phone-call.png" alt="Phone Number" />
                            <input id="Number" type="text" placeholder="Phone Number" />
                        </div>
                        <div className="input-group">
                            <img src="email.png" alt="E-mail" />
                            <input id="Email" type="text" placeholder="E-mail" />
                        </div>
                        <div className="input-group">
                            <textarea name="message" id="Message" placeholder="Message"></textarea>
                        </div>
                        <div id="btn">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormBox;
