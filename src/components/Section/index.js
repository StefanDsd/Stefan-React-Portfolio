import "../Section/index.modules.css";
import Modal from "../Modal";
import React, { useState } from "react";
import Coding from "../DisplayLottie";
import Typewriter from "typewriter-effect";
 // import bg from "../assets/bgPhoto.jpg"

const introdata = {
  title: "I’m Stefan Dascalescu",
  animated: {
    first:
      "I'm a passionate Full Stack web developer having a brief experience of web applications with React, JavaScript and Next.js",
  },
  description: "",
};

const Section = () => {
  const [modalActive, setModalActive] = useState(false);
  const showModal = () => {
    setModalActive(!modalActive);
  };

  return (
    
    <div className="section" id="section">
      <div className="first-lottie">
        <Coding className="lottie" />
      </div>
      <div>
        <h1 className="main-header">{introdata.title}</h1>
        <h1 className="main-status">
          <Typewriter
            options={{
              strings: [introdata.animated.first],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
            }}
          />
        </h1>
         <div className="main-btn">
          <div onClick={showModal} to="/">
            My Resume
          </div>
        </div>
        {modalActive && <Modal showModal={showModal} />}
      </div>
    </div>
  );
};

export default Section;
