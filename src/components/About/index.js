import React from "react";
import "../About/index.modules.css";
import Modal from '../Modal';

const About = () => {
  return (
    <div className="info-section" id="about">
      <div className="info-about">
        <h3>
          About <span>me</span>
        </h3>
        <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>

        <div className="info-btn">
          <Modal />
        </div>
      </div>

      <div className="info-content">
        <h1>Who am I</h1>
        <p>JavaScript Developer</p>
        <p>UI & UX Designer</p>
        <p>Junior Full Stack Web Developer</p>
      </div>
    </div>
  );
};

export default About;
