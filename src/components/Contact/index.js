import React from "react";
import { Link } from "react-router-dom";
import "./Contact.module.css";
import HireMe from "./../HireMe";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me</h1>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Message" className="input-message" />
      <div to="/">send</div>
      <div className="second-lottie">
        <HireMe />
      </div>
    </div>
  );
};

export default Contact;
