import React from "react";
import '../ContactUs/FormBox.css';

const FormBox = ({onSubmit,onChange,formData}) => {
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
                    <form onSubmit={onSubmit}>
                        <div className="input-group">
                            <img src="Name.png" alt="Name" />
                            <input id="Name" type="text" placeholder="Name" name="name"  onChange={onChange} value={formData.name} />
                        </div>
                        <div className="input-group">
                            <img src="phone-call.png" alt="Phone Number" />
                            <input id="Number" type="text" placeholder="Phone Number"  name="phone" onChange={onChange} value={formData.phone}/>
                        </div>
                        <div className="input-group">
                            <img src="email.png" alt="E-mail" />
                            <input id="Email" type="text" placeholder="E-mail" name="email" onChange={onChange} value={formData.email}  />
                        </div>
                        <div className="input-group">
                            <textarea name="message" id="Message" placeholder="Message"  onChange={onChange} value={formData.message}  ></textarea>
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
