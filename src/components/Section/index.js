import "../Section/index.modules.css";
import Modal from "../Modal";
import { Link } from "react-router-dom";
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
    
    <div className="section">
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
          <Link onClick={showModal} to="/">
            My Resume
          </Link>
        </div>
        {modalActive && <Modal showModal={showModal} />}
      </div>
    </div>
  );
};

export default Section;
