import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Feedlayout.css";

function Feedlayout() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i649bqd", "template_i4li3ee", form.current, {
        publicKey: "i7tJ-QNlVC24KYG4V",
      })
      .then(
        () => {
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          setSuccessMessage("Thank you for the feedback!!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccessMessage("");
        }
      );
  };

  return (
    <div className="container">
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <label>Name:</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
          />
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <input type="submit" value="Send" />
        </form>
        {successMessage && <p>{successMessage}</p>}{" "}
      </div>
    </div>
  );
}

export default Feedlayout;
