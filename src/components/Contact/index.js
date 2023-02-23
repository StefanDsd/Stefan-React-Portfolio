import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/index.modules.css";
import ContactMe from "../DisplayLottieContact";

export const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rxe5r44",
        "template_v3h5yuo",
        e.target,
        "tahCaWgIA-VoVp4ja"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    
    <div className="contact" id="contact">
      <form className="contact" ref={form} onSubmit={sendEmail}>
        <h1>Contact me</h1>
        <input type="text" name="from_name" placeholder="Name" />
        <input type="email" name="reply_to" placeholder="Email" />
        <textarea
          name="message"
          placeholder="Message"
          className="input-message"
        />
        <button className="submit-button" type="submit">
          Send
        </button>
      </form>
      <div >
        <ContactMe className="lottie-contact" />
      </div>
    </div>
    
  );
};

export default Contact;
