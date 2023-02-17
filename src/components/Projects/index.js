import React from "react";
import "./index.modules.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>

      <div className="projects">
        <motion.div
          whileInView={{ x: [-400, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          className="test-carts"
        >
          <h3>Berliner Quiz</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est iste
            officiis expedita deleniti, velit repellendus laudantium eum dolore
            nesciunt ullam maxime mollitia optio accusantium unde inventore
            doloremque, aliquam fugit vitae?
          </p>
          <div className="buttons">
            <a
              href="https://hendrawidjaya.github.io/Project-1-Berliner-Quiz/"
              target="_blank"
              rel="noreferrer"
              alt="first project"
            >
              <button className="button">Demo</button>
            </a>
            <a
              href="https://github.com/StefanDsd/Project-1-Berliner-Quiz?organization=StefanDsd&organization=StefanDsd"
              target="_blank"
              rel="noreferrer"
              alt="first project"
            >
              <button className="button">Github</button>
            </a>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: [-400, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          className="test-carts"
        >
          <h3>Space Explorer</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est iste
            officiis expedita deleniti, velit repellendus laudantium eum dolore
            nesciunt ullam maxime mollitia optio accusantium unde inventore
            doloremque, aliquam fugit vitae?
          </p>
          <div className="buttons">
            <a
              href="https://wild-space-explorer.netlify.app/"
              target="_blank"
              rel="noreferrer"
              alt="second project"
            >
              <button className="button">Demo</button>
            </a>
            <a
              href="https://github.com/StefanDsd/Space-explorer"
              target="_blank"
              rel="noreferrer"
              alt="second project"
            >
              <button className="button">Github</button>
            </a>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: [-400, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          className="test-carts"
        >
          <h3>Car Rental</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est iste
            officiis expedita deleniti, velit repellendus laudantium eum dolore
            nesciunt ullam maxime mollitia optio accusantium unde inventore
            doloremque, aliquam fugit vitae?
          </p>
          <div className="buttons">
          <a
            href="https://car-rentalapp.vercel.app/"
            target="_blank"
            rel="noreferrer"
            alt="second project"
          >
            <button className="button">Demo</button>
          </a>
          <a href="https://github.com/StefanDsd/car_rental_app" target="_blank" rel="noreferrer" alt="second project">
            <button className="button">Github</button>
          </a>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: [-400, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, ease: "easeIn" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
          className="test-carts"
        >
          <h3>Techtree</h3>
          <p>
            Coming soon !
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
