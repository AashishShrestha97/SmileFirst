import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import UpperButton from "../Components/ContactUs/UpperButton";
import FormBox from "../Components/ContactUs/FormBox";
import Footer2 from "../Components/ContactUs/Footer";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errorMessage, setErrorMessage] = useState(""); // For error messages
    const [loading, setLoading] = useState(false); // For loading state
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Simple email and phone validation
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validatePhone = (phone) => /^\d{10}$/.test(phone);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Clear any previous error message

        // Form validation
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            setErrorMessage("All fields are required.");
            return;
        }

        if (!validateEmail(formData.email)) {
            setErrorMessage("Invalid email format.");
            return;
        }

        if (!validatePhone(formData.phone)) {
            setErrorMessage("Phone number must be 10 digits.");
            return;
        }

        setLoading(true); // Start loading

        const payload = { ...formData };

        try {
            const response = await fetch("http://localhost:4000/send-message", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error("Server returned an error.");
            }

            const data = await response.json();
            if (data.success) {
                alert(data.message || "Email sent successfully");
                navigate('/');
            } else {
                setErrorMessage(data.message || "Something went wrong.");
            }
        } catch (err) {
            console.error("Error occurred: ", err);
            setErrorMessage(err.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <>
            <Navbar />
            <UpperButton />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <FormBox 
                onChange={handleInputChange} 
                formData={formData} 
                onSubmit={handleSubmit} 
                disabled={loading} // Disable form during submission
            />
            {loading && <div>Sending message...</div>} {/* Loading message */}
            <Footer2 />
        </>
    );
}

export default ContactUs;
