
import "./styles/Section.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Coding from "./DisplayLottie";

const Section = () => {
  const [modalActive, setModalActive] = useState(false);
  const showModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <div className="section">
      <div className="first-lottie">
        <Coding className="lottie"/>
        </div>
      <div>
        <h1 className="main-header">
          My name is <span>Stefan Dascalescu</span>
        </h1>
        <p className="main-status">
        I'm passionate Full Stack web developer having a brief experience of web applications with React, JavaScript and Next.js .
        </p>
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
