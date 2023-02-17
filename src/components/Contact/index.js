import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/index.modules.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <form className="contact" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" className="input-message" />
      </form>
    </div>
  );
};

<div className="contact" id="contact">
  <h1>Contact me</h1>
  <input type="text" placeholder="Name" />
  <input type="text" placeholder="Email" />
  <input type="text" placeholder="Message" className="input-message" />
  <div to="/">send</div>
  {/* <div className='second-lottie'>
          <HireMe />
        </div> */}
</div>;

export default Contact;
